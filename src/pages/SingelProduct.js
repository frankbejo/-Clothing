import { useParams } from "react-router-dom"
import { StyledSingleProduct } from "../theme";
import {FavoriteBorder} from '@mui/icons-material';

export const SingleProduct = (props) => {
const params  = useParams();    
const {itemid} = params;  
const {usedata} = props;

return(
        <section className="single-item">
            {
                usedata.filter((items) => items._id === itemid)
                .map((item) => {
                    console.log(item._id)
                return <StyledSingleProduct>
                <div className="item">
                    <div className="cover">
                        {
                            item.product_image.map(image => {
                                return(
                                    <div className="single-image" key={item._id + "a"}>
                                        <img src={image} alt={item.itemname} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="info">
                        <div className="info-container">
                            <div className="left">
                            <span className="itemname">{item.itemname}</span>
                            <span>{item.fit}</span>
                            <span>PHP{item.price}</span>
                            </div>
                            <div className="favorite">
                                <a href="#!"><FavoriteBorder /></a>
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