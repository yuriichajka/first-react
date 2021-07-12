import React from 'react';
import UserInfo from "../UserInfo/UserInfo";

export default function Header() {
    return (
        <div>
            <nav>
                <div className='d-flex container'>
                    <a href="#" className='brand-logo'><img src="Logo.png" alt="logo"/></a>
                    <section className="col s4 offset-4">
                        <form action="">
                            <div className="input-field">
                                <input placeholder="search movie" type="text"/>
                            </div>
                        </form>
                    </section>
                    <UserInfo/>
                </div>
            </nav>
        </div>
    )
}