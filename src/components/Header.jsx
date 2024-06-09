import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Header.css';
const Header = () =>{
    return (
        <div className='navbar'>
            <div className="logo">
                <h1>Profit Street</h1>
                <AiOutlineStock color=" green" size={"35"}/>
            </div>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/coins'>Coins</Link> </li>
            </ul>
        </div>
    )
}
export default Header;