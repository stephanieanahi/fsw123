import {Link} from "react-router-dom";


function NavBar(){
    return(<nav>
        <Link to= "/Favorites">Favorites       </Link> 
     
        <Link to = "/">    Movie Search  </Link>
    
        <Link to="/History">      History</Link>
    </nav>)
}

export default NavBar