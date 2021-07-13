import React from 'react';
import UserInfo from "../UserInfo/UserInfo";
import logo from './Logo.png'
import DarkMode from "../DarkMode/DarkMode";

export default function Header() {
    return (
        <div>
            <nav >
                <div className="container d-flex" style={{justifyContent: "space-between"}}>
                    <a href="/movies">
                        <img src={logo} alt="logo"/>
                    </a>
                    <UserInfo/>
                </div>
            </nav>
        </div>
    )
}