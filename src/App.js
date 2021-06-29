import './App.css';
import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import {getUsers} from "./services/api";



function App() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((value => {
            setUsers(value.data)
        }))
    }, [])




  return (
    <div className={'wrap'}>
      <Users users={users}/>
    </div>
  );
}

export default App;
