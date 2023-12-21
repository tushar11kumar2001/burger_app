import "./Header.css";
import {Link} from "react-router-dom";
const Header = ()=>{
    return(
        <div id="header1">
            <h1>Header</h1>
            <h3><Link to="/">home</Link></h3>
            <h3><Link to="/about">about</Link></h3>
   
           <h3><Link to="/contact">contact us</Link></h3> 
        </div>
    )
}

export default Header;