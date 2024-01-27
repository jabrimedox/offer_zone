import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    // Mobile nav

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
// close menu on click

    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" onClick={closeMenu}>IPTV</Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to="/instagram" onClick={closeMenu}>Our Packs</Link>
                        
                        
                    </li>
                    <li className='nav-item'>
                        <Link to="/test_iptv" onClick={closeMenu}>Test IPTV 24H</Link>

                    </li>
                    <li className='nav-item'>
                        <Link to="/Contact" onClick={closeMenu}>Contact</Link>

                    </li>
                    
                    {/* <li className='nav-item'>
                        <a href='#phone' className="phone-item" onClick={closeMenu}>+212623272947</a>
                    </li> */}
                    <li className='nav-item cart'>
                        <a href='/'>
                            <AiOutlineShoppingCart />
                            <span className='item-count'>0</span>
                            <span className='item-amount'>$0.00</span>
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar