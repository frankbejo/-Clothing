import { useState } from "react";
import { useParams } from "react-router-dom"
import { StyledSingleProduct } from "../theme";
import {FavoriteBorder, KeyboardArrowRight, ShoppingBagOutlined} from '@mui/icons-material';

export const SingleProduct = (props) => {
const params  = useParams();    
const {itemid} = params;  
const {usedata} = props;
const [isDropDown, setIsDropDown] = useState(false)
const [useSelectText, setSelectText] = useState("Select Size")

const DropDownSelected = (text) => {
    setIsDropDown(false)
    setSelectText(text)
}

return(
        <section className="single-item">
            {
                usedata.filter((items) => items._id === itemid)
                .map((item, index) => {
                return <StyledSingleProduct>
                <div className="item">
                    <div className="cover">
                        {
                            item.product_image.map(image => {
                                return(
                                    <div className="single-image" key={item._id}>
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
                            <div className="add-to-cart">
                                <div className="select">
                                    <div className={`select-container ${isDropDown ? "show" : ""}`} onClick={() => setIsDropDown(!isDropDown)}>
                                        <span>{useSelectText}</span>
                                        <KeyboardArrowRight />
                                    </div>
                                    <div className="option-container">
                                        <ul className={`optionlist ${isDropDown ? "show" : ""}`}>
                                            <li onClick={() => DropDownSelected("S")}>
                                                <span>S</span> 
                                            </li>
                                            <li onClick={() => DropDownSelected("M")}>
                                                <span>M</span> 
                                            </li>
                                            <li onClick={() => DropDownSelected("L")}>
                                                <span>L</span> 
                                            </li>
                                            <li onClick={() => DropDownSelected("XL")}>
                                                <span>XL</span> 
                                            </li>
                                            <li onClick={() => DropDownSelected("XXL")}>
                                                <span>XXL</span> 
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="cart-button">
                                    <ShoppingBagOutlined />
                                    <span>Add</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bottom-content">
                </div>
                </StyledSingleProduct>
                })
            }
        </section>
    )
}