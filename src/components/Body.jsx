import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
const Body = () => {
  const [restorent, setRestorent] = useState([]);
  const [filterrestorent, setFilterRestorent] = useState([]);
  const [serachText, setSerachText] = useState("");

  useEffect(() => {
    console.log("UseEffect Call");
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.45874458603345&lng=73.97010035812855&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setRestorent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestorent( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return restorent.length == 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={serachText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let list = restorent.filter((element) =>
                element?.info?.name.toLowerCase()?.includes(serachText.toLowerCase())
              );
              setFilterRestorent(list);
              console.log(list);
              // name
            }}
          >
            Serch
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let list = restorent.filter((element) => element?.info?.name > 4);
            setFilterRestorent(list);
          }}
        >
          Top Rated Restorant
        </button>
      </div>
      <div className="res-container">
        {filterrestorent.map((card, index) => {
            console.log("card",card)
          return <Link to={"/restaurants/"+card.info.id}><RestroCard key={index} details={card} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
