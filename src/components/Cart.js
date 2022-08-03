import React from 'react'
import menShirt from './../assets/items/men-shirt.jpeg'
import womenShirt from './../assets/items/women-dress.jpeg'
import deliveryTruck from './../assets/payment-logo/delivery-truck.svg'

export default function Cart() {
  return (
    <div>
        <h2>Your cart</h2>
        <div className="cart-items">
            <div className="item">
                <div><img src={menShirt} alt="Men Shirt" /></div>
                <div>
                    <h2>T-Shirt Summer Vibes</h2>
                    <h5>#261311</h5>
                </div>
                <div>
                    <h3>$89.99</h3>
                </div>
            </div>
            <div className="item">
                <div><img src={womenShirt} alt="Women Shirt" /></div>
                <div>
                    <h2>Basic Slim Fit T-Shirt</h2>
                    <h5>#212315</h5>
                </div>
                <div>
                    <h3>$69.99</h3>
                </div>
            </div>
        </div>
        <center>
            <button type="button" className="total-cost-btn">Total Cost <span>$159.99</span></button><br/>
            <div className="delivery-discount-div">
                <img src={deliveryTruck} alt="delivery-truck"/>
                <p>You are $30.02 away from free shipping!</p>
            </div>
        </center>
    </div>
  )
}
