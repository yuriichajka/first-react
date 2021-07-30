import React from 'react';
import UserInfo from "../UserInfo/UserInfo";
import logo from './Logo.png'

export default function Header() {
    return (
        <div>
            <nav >
                <div className="container d-flex" style={{justifyContent: "space-between"}}>
                    <a href="/">
                        <img src={logo} alt="logo"/>
                    </a>
                    <UserInfo/>
                </div>
            </nav>
        </div>
    )
}