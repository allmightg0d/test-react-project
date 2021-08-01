import React, { useContext } from 'react'
import './CartShop.css'
import { Link } from 'react-router-dom'

import { CartContext } from '../../Context/Context'
function CartShop() {
    // traemos el contexto
    const [cart, setCart] = useContext(CartContext)


    // declaramos dos funciones para poder manejar la cantidad de cada item
    
    const add = (product) =>{
        // Swal.fire("Estamos en preventa, no podemos ofrecerte mas de un producto a la vez.");
        const exist = cart.find((x) => x.id === product.id); // exist hace referencia a un item que coindida con la condicion de id
        if (exist) {
            setCart(cart.map(item => item.id === product.id ? {...exist, quantity: exist.quantity +1 } : item ))
            // {/* si el item coincide le vajamos la cantidad en 1 */}
        }
    }
                                        // CAMBIAR LOS .TITLE POR .ID PRIEMRO CAMBIAR EN FIREBASE
    const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.quantity === 1) {
            setCart(cart.filter((x) => x.id !== product.id));
        } else {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
                )
            )
        }
    }


    return (
        <div className='CartShop_container'>
            <h1>Hola CartShop</h1>
            {cart.map((item, index) =>
                <div key={index} className='CartShop_Card'>
                    <div className="CartShop_head">
                        <img className='CS_img' src={`${item.img}`} alt={item.title} />
                        <p className='CS_title'>{item.title}</p>
                    </div>
                    <div className="CS_body">
                        <p className='CS_quantity'>Cantidad: <b>{item.quantity}</b></p>
                        <p className='CS_price'>$:{item.price * item.quantity}</p>
                    </div>
                    
                 
                    
                    <div className="CS_buttons">

                        <button onClick={()=> add(item)}>sumar</button>
                        <button onClick={() => onRemove(item)}>{item.quantity > 1 ? 'restar': 'borrar' }</button>
                    </div>
                </div>
            )}
            <button className='CS_clear' onClick={()=>{setCart([])}}>Vaciar carrito</button>
            <Link to='CheckOut'>
                <button className='CS_clear'>Ir a comprar</button>
            </Link>
        </div>
    )
}

export default CartShop