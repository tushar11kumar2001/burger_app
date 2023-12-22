import { IMG_URL } from "../utils/constant";

const Card = (props) => {
    const { restData } = props;
    const {name , cuisines , cloudinaryImageId , avgRatingString , costForTwo} = restData.info;
    return (
      
      <div className="cardbody">
        <img
          alt=""
          src={
         IMG_URL +
            cloudinaryImageId
          }
        />
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>{costForTwo}</h2>
        <h2>{avgRatingString}</h2>
      </div>
    );
  };

  export default Card;