import React from 'react';
import { StyledItem } from '../theme';
import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Item = (props) => {
    const params = useParams();
    const {categoryLabel, shopby, viewby} = params;
    return(
        <div>
            <StyledItem>
            <Link to={`/products/${props.category}/${shopby}/${viewby}/${props.id}/${props.itemname}`} >
            <div className="item" >
                <div className="cover">
                    <LazyLoadImage loading="lazy" effect="blur" src={props.image} alt={props.itemname}/>
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