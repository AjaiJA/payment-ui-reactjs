import {useEffect,useState,React} from 'react';
import LeftForm from './components/LeftForm';
import Right from './components/Right';
import TopNav from './components/TopNav';
import DeliveryTruck from './assets/payment-logo/delivery-truck.svg'
import cart from './assets/payment-logo/cart.svg'
import Cart from './components/Cart';
import LoginPopup from './components/LoginPopup';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [userData,setUserData]=useState({
        username:"",
        email:"",
        mobile:""
    })
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    },[])
 
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    let login=(e)=>{
        e.preventDefault()
        togglePopup()
    }
    let openPaymentModal=(amt)=>{
        var amount = amt * 100;
        var options = {
            "key": "rzp_test_OVyyUIZk4uYtWE",
            "amount": amount,
            "name": userData.username,
			"image": "https://png.pngtree.com/png-clipart/20210530/original/pngtree-cash-on-delivery-truck-icon-png-image_6344227.jpg",
            "description": "Let's Purchase the Items through Payment",
            'order_id':"",
            "handler": function(response) {
                console.log(response);
                var values ={
                    razorpay_signature : response.razorpay_signature,
                    razorpay_order_id : response.razorpay_order_id,
                    transactionid : response.razorpay_payment_id,
                    transactionamount : amount,
                }
                alert("Payment Done Successfully")
            },
            "prefill":{
                "name":userData.username,
                "email":userData.email,
                "contact":userData.mobile,
            },
            "notes": {
                "address": "00-000/0, Somewhere, Anywhere"
            },
            "theme": {
                "color": "#14C38E"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();	
    }
    return (
        <div className="App">
            <header className="App-header">
                <TopNav />
            </header>
            <hr/><br/>
            <div className="ship-pay">
                <h2>Shipping and Payment</h2>
                <div className="ship-delivery">
                    <div className="delivery-cart"><img src={cart} alt="cart"/></div>
                    <div className="delivery-truck"><img src={DeliveryTruck} alt="delivery-truck"/></div>
                </div>
            </div>
            <br/>
            <section className="left-right-section">
                <LeftForm togglePopup={togglePopup} />    
                <div className="right-div-section">
                    <Right />                
                    <Cart />
                </div>            
            </section><br/>
            <section class="purchase-option">
                <div className="back-btn">
                    <i class="fa-solid fa-arrow-left-long"></i> <span>Back</span>
                </div>
                <div className="purchase-option-btns">
                    <button type="button">CONTINUE SHOPPING</button>
                    <button type="button" onClick={()=>openPaymentModal(400)}>PROCEED TO PAYMENT</button>
                </div>
            </section>
            {isOpen && <LoginPopup login={login} userData={userData} setUserData={setUserData} isOpen={isOpen} setIsOpen={setIsOpen} closePopup={togglePopup} />}
        </div>
    );
}

export default App;
