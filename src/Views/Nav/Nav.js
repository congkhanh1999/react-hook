import React from 'react';
import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink activeClassName="active" to="/" exact>Home</NavLink>
                <NavLink activeClassName="active" to="/ListCovid">List Covid</NavLink>
                <NavLink activeClassName="active" to="/ListUser">Users</NavLink>

                <div className="topnav-right">
                    <NavLink activeClassName="active" to="/Register">Register</NavLink>
                    <NavLink activeClassName="active" to="/Login">Login</NavLink>
                </div>
            </div>
        </>
    )

}
export default Nav;