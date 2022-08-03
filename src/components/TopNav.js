import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../logo.svg';
import search from './../assets/payment-logo/search.svg';
import cart from './../assets/payment-logo/cart.svg';
import user from './../assets/payment-logo/user.svg';

export default function TopNav() {
    return (
        <div>
            <div className="nav">
                <div className="left">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h4>E-Shop</h4>
                </div>
                <div className="center">
                    <ul>
                        <li><Link className="App-link" to="/">Men</Link></li>
                        <li><Link className="App-link" to="/">Women</Link></li>
                        <li><Link className="App-link" to="/">Kids</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <img src={search} alt="search" />
                    <img src={cart} alt="cart" />
                    <img src={user} alt="user" />
                </div>
            </div>
        </div>
    )
}
