import React from 'react';
import "./Tshirt.css"

const Tshirt = ({tshirt,handleAddToCart}) => {

    const {_id,picture,name,price}=tshirt;
    return (
        <div className='tshirt-container'>

            <h5>Id: {_id}</h5>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;