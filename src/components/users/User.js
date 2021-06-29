import React, {useState} from 'react';
import './User.css'
import Post from "../posts/Post";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";



const Openinfo = ({email}) => {
    return (<div>{email}</div>)
}

export default function User({item}) {

    let [toggle, setToggle] = useState(false)
    const onToggle = () => setToggle(!toggle)

    let [toggle2, setToggle2] = useState(false)
    const onToggle2 = () => setToggle2(!toggle2)

    let [toggle3, setToggle3] = useState(false)
    const onToggle3 = () => setToggle3(!toggle3)

  // let [user, setUser] = useState(null);
  //
  // const onGetUser = (userId) => {
  //     getUser(userId).then(value => setUser(value.data))
  // }




    return (
        <div className={'wrap'}>
            <div>{item.id} - {item.name}</div>
            {/*<div>*/}
            {/*    <button onClick={() => onGetUser(item.id)}>open</button>*/}
            {/*</div>*/}
            <div>
                <button onClick={onToggle}>open</button>
            </div>
            {
                toggle && <div className={'wrap'}>
                    <Openinfo email={item.email}/>
                    <button onClick={onToggle2}>open</button>
                    {
                        toggle2 && <div>
                            <Posts id={item.id}/>
                            <button onClick={onToggle3}>open</button>
                            {
                                toggle3 && <div>
                                    <Comments id={item.id}/>

                                </div>
                            }
                        </div>
                    }
                </div>




                // user && <div>
                //     {user.email}
                //     <button>suka bleat</button>
                // </div>
            }
        </div>
    );
}