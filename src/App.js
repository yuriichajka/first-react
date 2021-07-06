import {useSelector, useDispatch} from "react-redux";

const SomeNestedChildComponent = () => {

    const counter = useSelector(({counterValue}) => counterValue);
    console.log(counter)


    return (
        <div>
            <h1>{counter}</h1>

        </div>
    )
}


const SomeChildComponent = () => {

    return (
       <div>
           <SomeNestedChildComponent/>
       </div>
    )
}

function App() {
    const dispatch = useDispatch()


    return (
        <div>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>inc</button>

            <SomeChildComponent/>

            <button onClick={() => {
                dispatch({type: 'DEC'})
            }}>dec</button>

            <button onClick={() => {
                dispatch({type: 'RES'})
            }}>reset</button>

            <button onClick={() => {
                dispatch({type: 'X2'})
            }}>x2</button>
        </div>
    )
}



export default App;
