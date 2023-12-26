import { useState, useEffect } from "react";
import Shimmar from "./Fackcard";
import {  useParams } from "react-router-dom";
import { MenuAPI } from "../utils/constant";
const RestaurantMenu = () => {
  const [restInfo, setrestInfo] = useState(null);
  const {restId} = useParams();
  console.log("param",restId);
  useEffect(() => {
    fetchUrl();
  }, []);

  const fetchUrl = async () => {
    const data = await fetch(MenuAPI+restId);
    const response = await data.json();
    setrestInfo(response);
    console.log("menu response ", response);
  };

  if (restInfo === null) return <Shimmar />;
  const { name, cuisines, costForTwo, avgRatingString } =
    restInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwo}</h2>
      <h2>{avgRatingString}</h2>
      <h2>MENU</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} Rs:- {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
