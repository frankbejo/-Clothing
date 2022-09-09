import { StyledItem } from '../theme';
import { Link, useParams } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Item = (props) => {
    const params = useParams();
    const {categoryLabel, shopby, viewby} = params;
    return(
        <div>
            <StyledItem key={props.id}>
                <Link to={`/products/${props.category}/${shopby}/${viewby}/${props.id}/${props.itemname}`} >
                <div className="item" >
                    <div className="cover">
                        <img src={props.image} alt={props.itemname} width="100%" height="100%"/>
                    </div>
                    <div className="lower-info">
                        <span>{props.itemname}</span><br />
                        <span>{props.fit}</span>
                        <br />
                        <span>{`PHP${props.price}`}</span>
                    </div>
                </div>
                </Link>
            </StyledItem>
        </div>
        
    )
}