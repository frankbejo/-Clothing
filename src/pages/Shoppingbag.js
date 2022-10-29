import React from 'react'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import { StyledShoppingBag } from '../theme'
import { useSelector } from 'react-redux'

export const Shoppingbag = () => {
    const cartdata = useSelector(state => state.cart.cart)
    return(
        <>
        <StyledShoppingBag>
            <section className="myshoppingbag">
                <div className="breadcrumbs">
                    <span><NavLink to="/">Home</NavLink> / <b>ShoppingBag</b></span>
                </div>
                <div className="shoppingbag-content-container">
                    <div className="shoppingbag-container">
                        {
                            cartdata.length === 0 ? (
                                <>
                                    <span>No item to show</span>
                                    <span>Browse products</span>
                                </>
                            ):
                            (
                                <ul>
                                    {
                                        cartdata.map(item => {
                                            return <>
                                                <li><span>{item.itemname}</span></li>
                                            </>
                                        })
                                    }
                                </ul>
                                
                            )
                        }
                    </div>
                    <div className="payment-info-container">
                        <div className="payment-info">
                            
                        </div>
                    </div>
                </div>
            </section>
        </StyledShoppingBag>
        <Footer />
        </>
    )
}