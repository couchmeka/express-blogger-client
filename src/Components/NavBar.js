import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
            <Link style={{ padding: "0.5rem", textDecoration: "none", color: "red" }} to="/">Home</Link>
            <Link style={{ padding: "0.5rem", textDecoration: "none", color: "red" }} to="/blog-form">Blog Form</Link>
            <Link style={{ padding: "0.5rem", textDecoration: "none", color: "red" }} to="/search">Blog Search</Link>
        </div>
    );
};

export default NavBar;
