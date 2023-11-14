import { useState } from 'react';
import Nav from '../styles/navbar.module.css'
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
   const [menuOpen,setMenuOpen]=useState(false)
   const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
   }

    return(
        <div className={Nav.box}>
            <button className={Nav.menuButton} onClick={toggleMenu}>&#9776;</button>
            <div className={Nav.logoContainer}>
            <i><b className={Nav.logo}>AmarShop</b></i>
            </div>
            
            <div className={`${Nav.options} ${menuOpen ? Nav.open : ''}`}>
               
                <ul>
                    <li >Electronics</li>
                    <li >Jewelery</li>
                    <li >Men's Clothing</li>
                    <li >Women's Clothing</li>
                    <li >About</li>
                    <li >Contacts</li>
                </ul>
            </div>
            <div className={Nav.cartcontainer}>
            <FontAwesomeIcon icon={faCartShopping} className={Nav.cart}/>
            <FontAwesomeIcon icon={faUser} className={Nav.userlogin}/>
            </div>
        </div>
    );
};