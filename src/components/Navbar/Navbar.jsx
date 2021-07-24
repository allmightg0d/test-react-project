import React, {useContext} from 'react';
import './Navbar.css';
// Traemos las rutas
import { Link } from 'react-router-dom';
// Import context
import { CartContext } from '../../Context/Context';


export default function Navbar() {

    const [cart ] = useContext(CartContext)

    return (
        <div className='navbar-container'>
            
            <Link className='links' to='/'>home</Link>
            <Link className='links' to='/Categories'>categories</Link>
            <Link className='links' to='/ShoppingCart'>cart {cart.length}</Link>
            <Link className='links' to='/CheckOut'>checkout</Link>
        </div>
    )
}