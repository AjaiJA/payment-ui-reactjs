import React from 'react'

export default function LoginPopup(props) {
    let handleInput=(e)=>{
        props.setUserData({
            ...props.userData,[e.target.name]:e.target.value
        });
    }
    return (
        <div className="login-popup">
            <div className="login-popup-inner">
                <span className="close-btn" onClick={props.closePopup}>x</span>
                <form onSubmit={props.login}>
                    <h2 style={{textAlign:"center",color:"#14C38E"}}>LOG IN</h2>
                    <div className="login-inputs">
                        <input type="text" onChange={handleInput} name="username" placeholder="Username" />
                        <input type="text" onChange={handleInput} name="email" placeholder="Email" />
                        <input type="text" onChange={handleInput} name="mobile" placeholder="Phone Number" />
                    </div>
                    <div className="login-popup-btns">
                        <button type="button" onClick={props.closePopup}>Close</button>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
