import ItemCards from "./ItemCards";
import { useState } from "react";
import NestedCategory from "./NestedCategory";

const RestaurantCategory = ({data}) => {
    // console.log("data" , data);
    const[show,setShow] = useState(false);
    const showItems = ()=>{
        setShow(!show);
        //  console.log("showitems");
         console.log(show);
    }
 
  return (

       <>
    
      <div className="p-5 shadow-lg bg-slate-300 mt-5">
           {/* header */}
           {
            data?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"? ( <h1 className="text-lg font-bold flex justify-between items-center p-2 cursor-pointer " onClick={showItems}>{data.title } {"("+data.itemCards.length+")"}  <i class="fa-solid fa-caret-down"></i></h1>):(<h1 className="text-lg font-bold  cursor-pointer " >{data.title }</h1>)
           }
       
       </div>
        {/**body */}
        
             {data?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"? (show &&  <ItemCards itemsList = {data?.itemCards}/>) : (<NestedCategory nestedCategories = {data?.categories}/>)}

    
             </>
      
    

   

  
  );
};

export default RestaurantCategory
