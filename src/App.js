import './App.css';
import {useEffect, useState} from "react";
import {getAllUsers} from "./services/users_api";
import Users from "./components/users/Users";

function App() {

  let [users, setUsers] = useState([]);

  let [user, setUser] = useState({})

  useEffect(() => {
    getAllUsers().then(value => setUsers([...value]))
  },[])

  const fromApp = (id) => {
    // console.log
    // let choosenUserOnClick = users.find(value => value.id ===id)
    // console.log(choosenUserOnClick)
    setUser({...users.find(value => value.id ===id)})
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <Users usersList={users} fromApp={fromApp}/>
    </div>
  );
}

export default App;
