import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import {MenuList} from './MenuList.js'

const Navbar = () => {

    const List = MenuList.map(({url, title}, index)=>{
        return(
            <li key={index}>
                <Link to={url}>{title}</Link>
            </li>
        )
    })
    return (
        <nav>
            <div className="logo">
                React Router Navigation Menu
            </div>
            <ul className='menu-list'>
            {List}
            </ul>
        </nav>
    )
}

export default Navbar
