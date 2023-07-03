import React from "react";
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";


function CheckoutProduct({image, id, title, price, rating}){
    const[ {basket},dispatch] = useStateValue();
   const removeFromBasket = () =>{
       dispatch({
           type:"REMOVE_FROM_BASKET",
           id: id,
       })
   }

    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src = {image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>
                        {price}
                    </strong>
                </p>
                <button onClick={removeFromBasket} className="checkoutProduct__button">Remove From Basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct;