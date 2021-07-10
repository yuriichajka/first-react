import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import {useEffect, useState} from "react";
import {addTodos, pushTodos, setLoadingFalse, setLoadingTrue} from "./redux/actionCreators";

const CreateTodosForm = ({onSubmit}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!title || !description || isLoading) return;

    try {
        setIsLoading(true)
        await onSubmit(title, description)

        setTitle('')
        setDescription('')
    } catch (e) {
        console.log(e)
    } finally {
        setIsLoading(false)
    }


  }

  return (
      <form onSubmit={handleSubmit}>
        <input type='text' value={title} onChange={({target: {value}}) => setTitle(value)} placeholder='todo title'/>
        <br/>
        <br/>
        <input type='text' value={description} onChange={({target: {value}}) => setDescription(value)} placeholder='todo description'/>
        <br/>
        <br/>
        <button type='submit' disabled={!title || !description || isLoading}>create todo</button>
      </form>
  )
}

const Todos = ({todos, isLoading}) => {

    if (isLoading) return <h1>LOADING....CHEKAY SUKA</h1>

    return (
        <div>
            {todos.map(todo =>  (
                <Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <button>DELETE</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}

function App() {

  const {todos, todosLoading} = useSelector(store => store.todosReducer)
  const dispatch = useDispatch()
  // console.log(store, 'store')

  const fetchTodos = async () => {
      try {
          dispatch(setLoadingTrue())
          const resp = await fetch('http://localhost:8888/get-todos');
          const data = await resp.json()
          // console.log(data, 'data')

          dispatch(addTodos(data))
      } catch (e) {
          console.log(e)
      } finally {
          dispatch(setLoadingFalse())
      }

  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const onTodoCreate = async (title, description) => {
    if(!title || !description) return;

    const resp = await fetch('http://localhost:8888/create-todo', {
      method: 'POST',
      body: JSON.stringify({title, description}),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    const data = await resp.json()

    dispatch(pushTodos(data))
  }

  return (
    <div>
      <CreateTodosForm onSubmit={onTodoCreate}/>
        <Todos todos={todos} isLoading={todosLoading}/>
    </div>
  );
}

export default App;
