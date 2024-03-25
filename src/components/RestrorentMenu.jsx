import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { CON_URL } from "../utils/constan";
import { useParams } from "react-router-dom";

const RestrorentMenu = () => {
    const {id}=useParams()
  const [restaurantsDetal, setRestaurantsDetal] = useState(null);
//   346332
  const fetchMenu = async () => {
    const datat = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.45874458603345&lng=73.97010035812855&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await datat.json();
    setRestaurantsDetal(json);
  };
  useEffect(() => {
    fetchMenu();
}, []);

console.log("restaurantsDetal +==", restaurantsDetal?.data);
console.log("restaurantsDetal", restaurantsDetal?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info
);
// const {name} =restaurantsDetal?.data?.cards[0].card?.card?.info;
  return restaurantsDetal ==null ? <ShimmerUi /> :( 

      <div className="restoreMne">
        <h1>{restaurantsDetal?.data?.cards[0].card?.card?.info.name} </h1>
        <h1>{restaurantsDetal?.data?.cards[0].card?.card?.info.areaName} </h1>
        <p>{restaurantsDetal?.data?.cards[0].card?.card?.info.avgRating} </p>
        <img src={CON_URL + restaurantsDetal?.data?.cards[0].card?.card?.info.cloudinaryImageId} />
        <p>Menu</p>
        <ul>
        { restaurantsDetal?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((items)=>{
     <li>{items.card.info}</li>

        })}
        </ul>
        <ul>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
        </ul>
      </div>

  );
};

export default RestrorentMenu;
