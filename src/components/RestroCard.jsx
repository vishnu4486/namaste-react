import { useState } from "react";
import { CON_URL } from "../utils/constan";


const RestroCard = ({ details}) => {
    return (
      <div className="res-card">
        <div className="img-baner">
          <img src={CON_URL + details?.info?.cloudinaryImageId} alt={details?.info?.name} />
          <div className="card-containt">
            <h3>{details?.info?.name}</h3>
            <p>{details?.info?.areaName} </p>
            <p>{details?.info?.costForTwo} </p>
            <p>{details?.info?.avgRating} </p>
          </div>
        </div>
      </div>
    );
};

export default RestroCard;
