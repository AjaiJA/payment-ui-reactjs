import React,{useState} from 'react'
import LoginPopup from './LoginPopup'

export default function LeftForm(props) {
    return (
        <div>
            <div className="select-btns">
                {props.isLoggedIn ?
                    <>
                        <button type="button" onClick={props.logout}>LOG OUT</button>
                    </>
                    :
                    <>
                        <button type="button" onClick={props.togglePopup}>LOG IN</button>
                        <button>SIGN UP</button>
                    </>
                }
                
            </div>
            <form>
                <h2 style={{lineHeight:"70px"}}>Shipping Information</h2>
                <div className="input-forms">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Postal Code / ZIP" />
                    <input type="text" placeholder="Phone Number" />
                    <select>
                        <option value="india">India</option>
                        <option value="india">Poland</option>
                        <option value="india">Russia</option>
                        <option value="india">United Kingdom</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
