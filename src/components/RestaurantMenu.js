import { useEffect } from "react";
const RestaurantMenu = ()=>{
    useEffect(()=>{fetchUrl()},[]);

    const fetchUrl = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.705882&lng=77.2785876&restaurantId=440860&catalog_qa=undefined&submitAction=ENTER")
        const response  = await data.json();
        console.log("menu response ",response);
    }
    return(
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>COCA COLA</li>
                <li>BRIYANI</li>
                <li>GOL GAPPE</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;