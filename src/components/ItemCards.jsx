import { IMG_URL } from "../utils/constant";
const ItemCards = ({itemsList})=>{
 
    // console.log("items.data.itemsCard" , itemsList)
    return(
        <div>
            {itemsList.map((item)=>{
                return (
                  <div key={item?.card?.info?.id} className={"flex justify-between p-2.5 m-2 border-b-2 border-gray-400 bg-slate-100 rounded-lg"}>
                  <div >
                      <h2 className="font-bold text-base ">{item?.card?.info?.name}</h2>
                      <p>₹ {item?.card?.info?.price/100}</p>
                      <p className="text-gray-900 text-xs">{item?.card?.info?.description}</p>
                  </div>
                  <img  src={IMG_URL+item?.card?.info?.imageId} className="w-36 h-28 rounded-lg "/>
              </div>
                )
            })}
         
           
          
        </div>
    )
}

export default ItemCards