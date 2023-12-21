import { IMG_URL } from "../utils/constant";

const Card = (props) => {
    const { restData } = props;
    return (
      
      <div className="cardbody">
        <img
          alt=""
          src={
         IMG_URL +
            restData.info.cloudinaryImageId
          }
        />
        <h1>{restData.info.name}</h1>
        <h2>{restData.info.cuisines.join(",")}</h2>
        <h2>{restData.info.costForTwo}</h2>
        <h2>{restData.info.avgRatingString}</h2>
      </div>
    );
  };

  export default Card;