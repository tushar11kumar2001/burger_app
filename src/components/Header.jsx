
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
     const onlineStatus = useOnlineStatus();

    return(
        <div id="header1">
            <div className="imgdiv"> <img className="img1" src="https://dynamic.brandcrowd.com/asset/logo/6cc0fdef-3fe7-4d1d-900d-e7f884b7bb8d/logo-search-grid-1x?logoTemplateVersion=1&v=637936305229930000"/> 
           </div>
           
            <ul>
                <li><h3>ONLINE STATUS {onlineStatus? "❤" : "😝"}</h3></li>
                <li><h3><Link to="/">home</Link></h3></li>
                <li><h3><Link to="/about">about</Link></h3></li>
                <li><h3><Link to="/contact">contact us</Link></h3> </li>
            </ul>

            
            
            
   
           
        </div>
    )
}

export default Header;