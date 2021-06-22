import {useEffect, useState} from "react";
import Post from "./Post/Post";

export default function Posts() {

    // let [commList, setCommList] = useState( []);
    let state = useState([]);
    let commList = state[0];
    let setCommList = state[1];

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setCommList(value);
            });
    }, []);

    return (
        <div>
            {
                commList.map(value => <Post item = {value}/>)
            }
        </div>
    )
}