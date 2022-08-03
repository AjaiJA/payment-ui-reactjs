import React from 'react'

export default function LeftForm() {
    return (
        <div>
            <div className="select-btns">
                <button>LOG IN</button>
                <button>SIGN UP</button>
            </div>
            <form>
                <h2>Shipping Information</h2>
                <div className="input-forms">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Postal Code / ZIP" />
                    <input type="text" placeholder="Phone Number" />
                    <select>
                        <option value="india">India</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
