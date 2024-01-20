import Card from "./Card";
import useRestaurantList from "../utils/useRestaurantList";
import { useState, useEffect } from "react";
import Shimmar from "./Fackcard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const CardContainer = () => {
  // console.log("List " ,   useRestaurantList());

  const [cardData2, setcardData2] = useState([]);
  const [searchText , setsearchText] =useState("");
  const [btnName,setbtnName] = useState("LOGIN");
  const[copyList,setcopyList] = useState([]);

  useEffect(() => {url();}, []);
  const url = async () => {
  
    const api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.705882&lng=77.2785876&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const  json = await api.json();
    console.log("json = ",json);
    
    setcardData2(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setcopyList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(list);
  };
  
  //conditional rendering
//   if(cardData2.length===0){
//     return(
//  <Shimmar/>
//     )
    
//   }


  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>You're offline please check your internet connection</h1>


  return cardData2.length===0? (<Shimmar/>) :(

  

    <div className="body">

<div className="btnspace">
  <div className="searchfield">
  <input type="text" className="inputfield" value={searchText} onChange={
    (e)=>{ setsearchText(e.target.value);
  }}/>
  <button className="searchbtn" onClick={()=>{
   console.log(searchText);
   const filtersearch = cardData2.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setcopyList(filtersearch);
    console.log("after filtersearch = ",cardData2);
  }}>SEARCH</button>
  </div>
 
<button
  className="btn"
  onClick={() => {
    const filterlist = cardData2.filter((rest) => rest.info.avgRatingString > 4.0);
    setcopyList(filterlist);
  }}
>TOP RESTURANT</button>

<button className="btn bt2" onClick={()=>{
setcopyList(cardData2);
}}>Back TO Home</button>

<button className="btn" onClick={()=>{
  btnName==="LOGIN"?setbtnName("LOGOUT") : setbtnName("LOGIN");
}}>{btnName}</button>
</div>



<div className="cardcontainer">
  {copyList.map((resturant) => (
   <Link to={"/restaurants/"+resturant.info.id} key={resturant.info.id} > <Card restData={resturant} /> </Link>
  ))}
</div>
</div>
  
   
  );
};

export default CardContainer;
