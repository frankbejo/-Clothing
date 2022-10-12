import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { cartSlice } from './addToCartSlice';

const Cart = () => {
    const cart = useSelector((state) => state.addtocart.cart);
    
    return (
        <section className='cart'>
            
        </section>
        )
    }

export default Cart