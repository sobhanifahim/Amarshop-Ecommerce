import { useState } from 'react';
import Nav from '../styles/navbar.module.css'
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Navbar() {
   const [menuOpen,setMenuOpen]=useState(false)
   const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
   }

    return(
        <div className={Nav.box}>
            <button className={Nav.menuButton} onClick={toggleMenu}>&#9776;</button>
            <div className={Nav.logoContainer}>
            <Link to='/' style={{textDecoration:'none'}}><i><b className={Nav.logo}>AmarShop</b></i></Link>
            </div>
            
            <div className={`${Nav.options} ${menuOpen ? Nav.open : ''}`}>
               
                <ul>
                <Link to='/electronics' style={{textDecoration:'none'}}> <li >Electronics</li></Link>
                <Link to='/jewelery' style={{textDecoration:'none'}}><li >Jewelery</li></Link>
                <Link to='/mens' style={{textDecoration:'none'}}><li >Men's Clothing</li></Link>
                <Link to='/womens' style={{textDecoration:'none'}}><li >Women's Clothing</li></Link>
                <Link to='/about' style={{textDecoration:'none'}}><li >About</li></Link>
                <Link to='/contracts' style={{textDecoration:'none'}}><li >Contacts</li></Link>
                </ul>
            </div>
            <div className={Nav.cartcontainer}>
            <FontAwesomeIcon icon={faCartShopping} className={Nav.cart}/>
            <Link to='/login'><FontAwesomeIcon icon={faUser} className={Nav.userlogin}/></Link>
            </div>
        </div>
    );
};