import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmar from "./Fackcard";
import {  useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const {restId} = useParams();
  const restInfo = useRestaurantMenu(restId);
  console.log("param",restId);


  if (restInfo === null) return <Shimmar />;
  const { name, cuisines, costForTwo, avgRatingString } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
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
