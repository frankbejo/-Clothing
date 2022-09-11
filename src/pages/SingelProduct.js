import { useParams } from "react-router-dom"
import { StyledSingleProduct } from "../theme";
import {FavoriteBorder} from '@mui/icons-material';

export const SingleProduct = ({usedata}) => {
const params  = useParams();
const {itemid} = params;  

return(
        <section className="single-item">
            {
                usedata.filter((items) => items.id  == itemid)
                .map((item) => {
                    return <StyledSingleProduct>
                    <div className="item" key={item.itemid}>
                        <div className="cover">
                            {
                                item.image.map((image) => {
                                    return <div className="single-image">
                                        <img src={image} alt={item.itemname} />
                                    </div>
                                    
                                })    
                            }
                        </div>
                        <div className="info">
                            <div className="info-container">
                                <div className="left">
                                <span>{item.itemname} / {item.fit}</span>
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