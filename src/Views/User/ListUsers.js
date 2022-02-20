
import { useState, useEffect } from "react"
import axios from "axios";
import './ListUsers.scss'
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import AddNewUser from "./AddNewUser";
const ListUsers = () => {

    const [listUser, setListUser] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        try {
            async function fetchData() {
                // let res = await axios.get('https://reqres.in/api/users?page=2');
                let res = await axios.get('https://jsonplaceholder.typicode.com/posts');

                let data = (res && res.data) ? res.data : []
                console.log(data);
                if (data && data.length > 0) {
                    setListUser(res.data);

                }
            }
            fetchData();
        } catch (e) {
            console.log(e)
        }
    }, []);

    const addNewPost = (post) => {
        setShow(false);
        let newListPost = listUser;
        newListPost = [...listUser, post]
        setListUser(newListPost);
    }
    const handleDelete = (id) => {
        let newListPost = listUser;
        newListPost = newListPost.filter(item => item.id !== id)
        setListUser(newListPost);
    }
    return (

        <div className="listUsers">

            <br />
            <Button variant="primary" onClick={handleShow}>
                Add New Post
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewUser addNewPost={addNewPost} />
                </Modal.Body>

            </Modal>


            <table>
                <thead>

                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        listUser.map((item, index) => {
                            return (
                                <tr key={item.id} >
                                    <td>{index + 1}</td>
                                    <td><Link to={`/ListUser/${item.id}`}>{item.title}</Link></td>
                                    <td>{item.body}</td>
                                    <td><button onClick={() => { handleDelete(item.id) }}>X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListUsers;

