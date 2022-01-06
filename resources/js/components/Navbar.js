import React from "react"
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <nav className="navbar navbarBg">
            <Link className="navbar-brand" to="/">
                <img
                    src=""
                    className="d-inline-block align-top Logo"
                    alt=""
                    loading="lazy"
                />
            </Link>
        </nav>
    );
}

export default navbar