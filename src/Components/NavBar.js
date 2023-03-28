import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

const NavBar = () => {
    
    const auth = useAuth();
    console.log(auth)
    return (
        
        <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
            <h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
            <Link style={{ padding: "0.5rem", textDecoration: "none", color: "red" }} to="/">Home</Link>
            <Link to="/registration">Registration Form</Link>
			<Link to="/login">Login Form</Link>
            <Link style={{ padding: "0.5rem", textDecoration: "none", color: "red" }} to="/blog-form">Blog Form</Link>
            <Link style={{ padding: "0.5rem", textDecoration: "none", color: "red" }} to="/search">Blog Search</Link>
            <button onClick={()=>{
				auth.logout()
			}}>Logout</button>
        </div>
    );
};

export default NavBar;
