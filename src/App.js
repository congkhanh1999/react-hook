import logo from './logo.svg';
import './App.css';
import Nav from './Views/Nav/Nav';
import { useState, useEffect } from 'react';
import ToDo from './Views/listTodo/Todo';
import AddUser from './Views/AddUser/AddUser';
import Login from './Views/Login/Login';
import ListUsers from './Views/User/ListUsers';
import UserDetail from './Views/User/UserDetail';
import AddNewUser from './Views/User/AddNewUser';
import ErrorPage from './Views/ErrorPage/ErrorPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListCovid from './Views/listCovid/ListCovid';
const orders = [100, 200, 300];
function App() {


  const [name, setName] = useState('Khanh');
  const [newUser, setNewUser] = useState('');
  const [title, setTitle] = useState('Todo List');
  const [titleAdmin, setTitleAdmin] = useState('Todo List Admin');
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Khanh", age: 16, role: "admin" },
    { id: 2, name: "Huy", age: 16, role: "admin" },
    { id: 3, name: "Minh", age: 16, role: "user" },
    { id: 4, name: "Hung", age: 16, role: "user" },
    { id: 5, name: "Hai", age: 16, role: "user" },
  ])


  let [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, current) => total + current);

    return total;
  })


  useEffect(() => {
    console.log('use effect')

  })
  const handleOnClick = (event) => {
    if (!newUser) {
      alert('vui long nhap')
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 1001),
      name: newUser,
      role: 'user'
    }
    setListUsers([...listUsers, newTodo])

  }
  const handleOnChange = (event) => {
    setNewUser(event.target.value);
  }

  const deleteTodo = (id) => {

    let newListUsers = listUsers.filter(item => item.id !== id);
    setListUsers(newListUsers);
  }

  const addCounter = () => {
    setCounter(counter++)
  }
  const addUser = (user) => {
    setListUsers([...listUsers, user])
  }
  return (
    <Router>
      <div className="App">

        <Nav />
        <Switch>
          <Route path="/" exact>
            <ListCovid />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/ListCovid">
            <ListCovid />
          </Route>
          <Route path="/ListUser" exact>
            <ListUsers />
          </Route>
          <Route path="/ListUser/:id">
            <UserDetail />
          </Route>
          <Route path="/Add-user">
            <AddNewUser />
          </Route>
          <Route path="/*">
            <ErrorPage />
          </Route>
        </Switch>
        {/* <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ListCovid" element={<ListCovid />} />
          </Routes> */}

        {/* <AddUser addUser={addUser} /> */}

        {/* <div>{counter}</div>
          <button onClick={() => { addCounter() }}>Add</button>
          <div className="todo-container">
            <ToDo
              listUsers={listUsers}
              title={title}
              deleteTodo={deleteTodo}
            />
            <ToDo
              listUsers={listUsers.filter(item => item.role === "admin")}
              title={title}
            />
          </div>
          <input type="text" value={newUser} onChange={(event) => { handleOnChange(event) }}></input>
          <button onClick={(event) => { handleOnClick(event) }}>Click</button> */}

        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div >

    </Router>

  );
}

export default App;
