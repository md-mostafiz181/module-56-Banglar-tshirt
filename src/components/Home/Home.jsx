import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../T-shirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css"

import toast from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart,setCart]=useState([])

  const handleAddToCart=tshirt=>{
    const exist=cart.find(ts=>ts._id === tshirt._id)
    if(exist){
        toast("This tshirt is already addeded")
    }
    else{

        const newCart= [...cart, tshirt];
        setCart(newCart)

    }


  }

  const handleRemoveFromCart=id=>{
    const remaining=cart.filter(ts=>ts._id !== id)
    setCart(remaining)

  }
  return (
    <div>
      <h3>this is home: {tshirts.length}</h3>
      <div className="home-container">
                <div className="t-shirt-container">
                {tshirts.map((tshirt) => (
                    <Tshirt 
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                    ></Tshirt>
                ))}
                </div>

                <div className="cart-container">
                  <Cart 
                  cart={cart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  ></Cart>
                </div>
      </div>
    </div>
  );
};

export default Home;
