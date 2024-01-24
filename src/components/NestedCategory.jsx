import ItemCards from "./ItemCards";
import { useState } from "react";

const NestedCategory = ({nestedCategories }) => {
 
//   console.log("categories", nestedCategories);
  const [show, setShow] = useState(false);
  const showItems = () => {
    setShow(!show);
    //  console.log("showitems");
    // console.log(show);
  };

  return (
    <div className="  bg-slate-300 p-5 shadow-lg  ">
      {/* header */}
     
       { nestedCategories.map((cat)=>{ return(<div key = {cat?.title}>
      
         <h1
         className="flex justify-between items-center text-lg p-2    font-semibold   cursor-pointer "
         onClick={showItems}
       >
        {cat?.title} {"("+cat.itemCards.length+")"}
        <i class="fa-solid fa-caret-down"></i>
         </h1>
     
      
      {show &&  <ItemCards itemsList={cat?.itemCards}/> }
      </div>
       )

        })}
   
      {/**body */}
    
    </div>
  );
};

export default NestedCategory;


