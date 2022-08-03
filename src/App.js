import './App.css';
import LeftForm from './components/LeftForm';
import Right from './components/Right';
import TopNav from './components/TopNav';
import DeliveryTruck from './assets/payment-logo/delivery-truck.svg'
import cart from './assets/payment-logo/cart.svg'
import Cart from './components/Cart';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TopNav />
            </header>
            <hr/>
            <div className="ship-pay">
                <h2>Shipping and Payment</h2>
                <div className="ship-delivery">
                    <div className="delivery-cart"><img src={cart} alt="cart"/></div>
                    <div className="delivery-truck"><img src={DeliveryTruck} alt="delivery-truck"/></div>
                </div>
            </div>
            <br/>
            <section className="left-right-section">
                <LeftForm />    
                <div className="right-div-section">
                    <Right />                
                    <Cart />
                </div>            
            </section><br/>
            <section class="purchase-option">
                <div>
                    <i class="fa-solid fa-arrow-left-long"></i> Back
                </div>
                <div className="purchase-option-btns">
                    <button type="button">CONTINUE SHOPPING</button>
                    <button type="button">PROCEED TO PAYMENT</button>
                </div>
            </section>
        </div>
    );
}

export default App;
