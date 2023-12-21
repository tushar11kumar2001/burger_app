import Card from "./Card";

import { useState, useEffect } from "react";
import Shimmar from "./Fackcard";


var list;
const CardContainer = () => {
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
    list = json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    setcardData2(list);
    setcopyList(list);
    console.log(list);
  };
  
  //conditional rendering
//   if(cardData2.length===0){
//     return(
//  <Shimmar/>
//     )
    
//   }


  


  return cardData2.length===0? (<Shimmar/>) :(

  

    <div className="body">

<div className="btnspace">
  <div>
  <input type="text" className="searchfield" value={searchText} onChange={
    (e)=>{ setsearchText(e.target.value);
  }}/>
  <button className="bt12" onClick={()=>{
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
setcopyList(list);
}}>Back TO Home</button>

<button className="btn" onClick={()=>{
  btnName==="LOGIN"?setbtnName("LOGOUT") : setbtnName("LOGIN");
}}>{btnName}</button>
</div>



<div className="cardcontainer">
  {copyList.map((resturant) => (
    <Card key={resturant.info.id} restData={resturant} />
  ))}
</div>
</div>
  
   
  );
};

export default CardContainer;
