import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length ===0){
        message=<p>Please add some products</p>
    }else{
        message =<p>Boroloxx</p>
        
    }
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
            {message}

            {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira tor ki taka nai ?</span>}

            {
                cart.map(tshirt =><p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }

            {
                cart.length ===2 && <p>sabbas 2 ta kenar jonno</p>
            }

            {
                cart.length === 3 ||<p>kire mama 3 ta to hoilo na</p>
            }
        </div>
    );
};

export default Cart;