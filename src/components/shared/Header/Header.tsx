'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Header.sass';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header>
            <div className='main-header'>
                <div className="logo-container">
                    <Link href="/">
                        <h1>Dormi Luna</h1>
                    </Link>
                </div>
                
                <div className="nav-menu">
                    <div className="dropdown-nav">
                        <button className='btn-primary' onClick={handleMenuToggle}>
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </button>
                    </div>

                    <nav className={`${showMenu && 'show'}`}>
                        <ul>
                            <li className='nav-item'>
                            <Link href="/store" onClick={handleMenuToggle}>Catálogo</Link>
                            </li>
                            <li className='nav-item'>
                            <Link href="/contact">Contáctanos</Link>
                            </li>
                            <li className='nav-item'>
                            <Link href="/contact">Nosotros</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
