
import logo from './logo.svg';
import './App.css'

import {useEffect, useState} from "react";
import {getPosts, getPost, getUsers} from "./Services/api";
import Posts from "./Components/posts-hm-2/Posts";
import PostDetails from "./Components/posts-hm-2/details/Post-details";
import Users from "./Components/Users/Users";
import User from "./Components/Users/User";


function App() {
  let [posts, setPosts] = useState([])
  let [postDetails, setPostDetails] = useState(null)
  let [users, setUsers] = useState([])
  useEffect(() => {

    getPosts().then(response => {
      setPosts(response.data)

    })
    getUsers().then(value => setUsers(value.data))

  }, [])

  function selectPost(id, title, body) {
    getPost(id).then(value => setPostDetails(value.data))

  }

  function selectUser() {

  }

  return (
      <div>
        <Posts items={posts} selectPost={selectPost}/>
        <hr/>

        {
          postDetails && <PostDetails item={postDetails}/>
        }
        <Users items={users}/>
      </div>
  );
}

export default App;
