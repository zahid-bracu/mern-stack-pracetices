import React from 'react';
import cart from './resources/cart.jpg';
import phone from './resources/phone.jpg';
import './style.css';
export default function Home() {
    return (
        <>
        <h1>Home Components</h1>
        <div className="container">

            

            <div className="box">
                <img className="item-img-size" src={phone} />
                <div>
                <button>Add</button>
                <h5>Price : 500$</h5>
                </div>
            </div>

            <div>
                <img className="cart-item-img" src={cart} />
            </div>
        </div>

        </>
    )
}
