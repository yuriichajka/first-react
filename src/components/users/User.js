import React from 'react';
import '../users/User.css'


export default function User({item}) {
    return (
        <div className="first">
            <div className="flex">
                <div key={item.id}>
                    <p>
                        <strong>{item.first_name}</strong>
                    </p>
                    <p>{item.email}</p>
                    <img key={item.avatar} src={item.avatar} alt={'avatar'}/>
                </div>
            </div>
        </div>
    )
}