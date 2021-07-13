import React from 'react';
import userLogo from './Layer2.png'

export default function UserInfo() {
    return (
        <div className='d-flex'>
            <div style={ {height: '20px', marginRight: '10px'}}>
                <img src={userLogo} alt="user"/>
            </div>
            <div>Welcome John</div>
        </div>
    )
}