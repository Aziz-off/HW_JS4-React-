import React from 'react';
import classes from "./header.module.css";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <ul className={classes.menu}>
            <li><NavLink className={classes.link} to="/">Main Page</NavLink></li>
            <li><NavLink className={classes.link} to="/blog">Blog Page</NavLink></li>
            <li><NavLink className={classes.link} to="/about">About Page</NavLink></li>
        </ul>
    );
};

export default Header;