import './App.css';
import {useEffect, useState} from "react";
import {getPost, getPosts} from "./Services/api";
import Posts from "./Components/Posts/Posts";
import './App.css'
import PostDetails from "./Components/UserDetails/PostDetails";
import Post from "./Components/Post/Post";

function App() {

    let [posts, setPosts] = useState([]);

    let[postDetails, setPostDetails] = useState(null)
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
        })
    }, []);
    // console.log(postDetails);

    function selectPost(id) {
        // document.write('fuck you', id, title, body)
        getPost(id).then((data) => {
            setPostDetails(data.data)
            // console.log(data)
        });
    }

  return (
      <div>
        <Posts items={posts} selectPost = {selectPost}/>
          <hr/>
          {
              postDetails && <PostDetails item={postDetails}/>
          }

      </div>
  )


}

export default App;
