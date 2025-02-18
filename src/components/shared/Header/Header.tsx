'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';
import './Header.sass';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [cartItems, setCartItems] = useState(2);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header>
            <div className='main-header'>
                <div className="logo-container">
                    <Link href="/">
                        <Image
                            src="/images/logo.png" // Reemplaza con la ruta de tu imagen
                            alt="Dormi Luna Logo"
                            width={150} // Ajusta el tamaño según necesites
                            height={50}
                        />
                    </Link>
                </div>



                <div className="nav-menu">
                    {/* Usuario */}
                    <Link href="/profile" className="icon-button">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>

                    {/* Carrito de Compras */}
                    <Link href="/cart" className="icon-button">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
                    </Link>

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
