import { IMG_URL } from "../utils/constant";

const Card = (props) => {
    const { restData } = props;
    const {name , cuisines , cloudinaryImageId , avgRatingString , costForTwo} = restData.info;
    return (
      
      <div className="h-[450px] flex flex-col flex-wrap justify-evenly w-64 mb-10 border-2 border-black rounded-lg  p-2.5 bg-gray-200 text-xl font-bold font-Comforter hover:scale-95 hover:bg-gray-300">
        <img className="h-48"
          alt=""
          src={
         IMG_URL +
            cloudinaryImageId
          }
        />
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{costForTwo}</h2>
        <h2>Rating : {avgRatingString}</h2>
      </div>
    );
  };

//higher order component...
//take input (Card) and return new component
  export const withPromotedLabel = (Card)=>{
    return (props)=>{
      return(
        <>
        <div className="bg-red-500 absolute rounded-l">Promoted</div>
        <Card {...props}/>
        </>
      )
    }
  }

  export default Card;