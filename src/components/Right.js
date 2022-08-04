import React from 'react'
import paypal from './../assets/payment-logo/paypal.png';
import visa from './../assets/payment-logo/visa.png';
import mastercard from './../assets/payment-logo/mastercard.png';
import maestro from './../assets/payment-logo/maestro.svg';
import discover from './../assets/payment-logo/discover.png';
import deal from './../assets/payment-logo/deal.png';
import inpost from './../assets/payment-logo/inpost.svg';
import dhl from './../assets/payment-logo/dhl.png';
import dpd from './../assets/payment-logo/dpd.png';
import fedex from './../assets/payment-logo/fedex.png';

export default function Right() {
    return (
        <div className="right-section">
            <h2>Payment Method</h2>
            <div className="payment-option" style={{margin:"25px auto"}}>
                <div><img src={paypal} alt="Paypal" /></div>
                <div><img src={visa} alt="Visa" /></div>
                <div><img src={mastercard} alt="MasterCard" /></div>
                <div><img src={maestro} alt="Maestro" /></div>
                <div><img src={discover} alt="Discover" /></div>
                <div><img src={deal} alt="Deal" /></div>
            </div>
            <h2>Delivery Method</h2>
            <div className="payment-method" style={{margin:"15px auto"}}>
                <div><img src={inpost} alt="Paypal" /><span>$20.00</span></div>
                <div><img src={dpd} alt="Visa" /><span>$12.00</span></div>
                <div><img src={dhl} alt="MasterCard" /><span>$15.00</span></div>
                <div><img src={fedex} alt="Maestro" /><span>$10.00</span></div>
            </div>
        </div>
    )
}
