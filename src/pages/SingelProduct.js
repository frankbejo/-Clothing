import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { StyledSingleProduct } from "../theme";
import {FavoriteBorder, KeyboardArrowRight, ShoppingBagOutlined, Close} from '@mui/icons-material';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, cartSlice} from '../features/add-to-cart/addToCartSlice';

export const SingleProduct = (props) => {
const params  = useParams();    
const {itemid} = params;  
const {usedata} = props;
const [isDropDown, setIsDropDown] = useState(false)
const [useSelectText, setSelectText] = useState({})

// redux state
const cart = useSelector((state) => state.cart.cart)
const dispatch = useDispatch();

// added notif state
const [isAdded, setIsAdded] = useState(false);

// is already added notif state
const [isAlreadyAdded, setIsAlreadyAdded] = useState(false) ;

const AddToCart = (item) => {
    const toAdd = cart.find(items => items.sizes[0].size === item.sizes[0].size & items._id === item._id)
    if(toAdd === undefined || false){
        dispatch(addItem(item))
        setIsAdded(true)
        setTimeout(() => {
        setIsAdded(false)
        },[5000])
        
    }else{
        setIsAlreadyAdded(true)
    }
}

    const DropDownSelected = (text) => {
        setIsDropDown(false)
        setSelectText(text)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setSelectText({})
    }, [itemid])

    useEffect(() => {
        if(cart.length === 0){
            return
        }else{
            console.log(cart)
            window.localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])

return(
        <section className="single-item">
            {
                usedata.filter((items) => items._id === itemid)
                .map((item) => {
                return <StyledSingleProduct>
                <div className="item" key={item._id+"singleproduct"}>
                    <div className="cover">
                        {
                            item.product_image.map((image, index) => {
                                return(
                                    <div className="single-image" key={`${item._id}${index}`}>
                                        <img src={image} alt={item.itemname} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="info">
                        <div className="info-container">
                            <div className="info-top">
                                <div className="left">
                                <span className="itemname">{item.itemname}</span>
                                <span>{item.fit}</span>
                                <span>PHP{item.price}</span>
                                </div>
                                <div className="right">
                                    <div className="favorite">
                                        <a href="#!"><FavoriteBorder /></a>
                                    </div>
                                </div>
                            </div>
                            {
                                <div className="add-to-cart">
                                <div className="select">
                                    <div className={`select-container ${isDropDown ? "show" : ""}`} onClick={() => setIsDropDown(!isDropDown)}>
                                        <span>{useSelectText.size ? `${useSelectText.size} : ${useSelectText.dimension}in`:"Select Size"}</span>
                                        <KeyboardArrowRight />
                                    </div>
                                    <div className="option-container">
                                        <ul className={`optionlist ${isDropDown ? "show" : ""}`}>
                                            {
                                                item.sizes ? (
                                                    item.sizes.map(itemsize => {
                                                            return <li onClick={() => DropDownSelected(itemsize)}>
                                                            <span>{`${itemsize.size}`}</span> 
                                                            </li>
                                                    })
                                                ):
                                                ( 
                                                    <li onClick={() => DropDownSelected("Not available")}>
                                                    <span>Not available</span> 
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="cart-button" onClick={() => AddToCart({...item, sizes: [{size: useSelectText.size , dimension: useSelectText.dimension}]})}>
                                    <ShoppingBagOutlined />
                                    <span>Add</span>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="bottom-content">
                </div>
                    <div className={`isaddednotif ${isAdded ? "show":""}`}>
                        <div className="notif-message">
                            <div className="left">
                                <ShoppingBagOutlined />
                                <span>Added to the bag</span>
                            </div>
                            <div className="close" onClick={() => setIsAdded(false)}>
                                <Close /> 
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="image-container">
                                <img src={item.product_image[0]} alt="" />
                            </div>
                            <div className="added-item-info">
                                <span><b>{item.itemname}</b></span>
                                <span>{item.fit}</span>
                                <span>Size: {useSelectText.size}</span>
                                <span>PHP{item.price}</span>
                            </div>
                        </div>
                    </div>
                </StyledSingleProduct>
                })
            }
            
        </section>
    )
}