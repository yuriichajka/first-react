import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


const SomeChildComponent = () => {
    const counter = useSelector((state) => state.counterValue);

    console.log(counter);

    const dispatch = useDispatch()

    let [formState, setFormState] = useState({newNum: ''});

    function onSubmit(e) {
        console.log(e.target.newNum.value);
        e.preventDefault()
        console.log(formState)
    }

    function onChange (e) {
        setFormState(e.target.value)
        console.log(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <header className="App-header">
                <h1>{counter}</h1>
                <div>
                    <button onClick={() => {
                        dispatch({type: 'INC'})
                    }
                    }>+
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'DEC'})
                    }
                    }>-
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'RESET'})
                    }
                    }>0
                    </button>
                </div>
                <div>
                    <input type="number" name={"newNum"} value={formState.newNum} onChange={onChange}/>
                    <button onClick={() => {
                        dispatch({
                            type: 'USER-CHOICE',
                            payload: formState
                        })
                    }}>Submit</button>

                </div>

            </header>
        </form>
    )
}



function App() {
    return (
        <div className="App">
            <SomeChildComponent/>

        </div>
    );
}

export default App;