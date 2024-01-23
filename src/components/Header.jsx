
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
     const onlineStatus = useOnlineStatus();

    return(
        <div  className="flex h-28  justify-between border-2 border-black items-center pr-5 bg-[#AE763E]">
            <div className="h-full  overflow-hidden"> <img className="h-full hover:scale-110 cursor-pointer" src="https://dynamic.brandcrowd.com/asset/logo/6cc0fdef-3fe7-4d1d-900d-e7f884b7bb8d/logo-search-grid-1x?logoTemplateVersion=1&v=637936305229930000"/> 
           </div>
            <h1 className="text-5xl font-bold font-Comforter text-orange-900">Food Company</h1>
            <ul className="flex gap-5 text-red-950 font-medium text-xl">
                <li className="cursor-pointer text-black"><h3>ONLINE STATUS {onlineStatus? "❤" : "😝"}</h3></li>
                <li className=""><h3><Link to="/">Home</Link></h3></li>
                <li><h3><Link to="/about">About</Link></h3></li>
                <li><h3><Link to="/contact">contact us</Link></h3> </li>
                <li><h3><Link to="/grocery">Our Grocery</Link></h3> </li>

            </ul>

            
            
            
   
           
        </div>
    )
}

export default Header;