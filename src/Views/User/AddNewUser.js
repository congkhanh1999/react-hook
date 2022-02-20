import './AddNewUser.scss'
import react from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
const AddNewUser = (props) => {

    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [email, setEmail] = useState('');
    const [state, setState] = useState({
        title: "",
        body: "",

    })
    const changeInput = (event) => {
        const value = event.target.value;
        setState(
            {
                ...state,
                [event.target.name]: value
            }
        );

    }
    const handleClickAdd = async (event) => {
        event.preventDefault();
        if (!state.title) {
            toast.error('Vui lòng nhập title')
        } else if (!state.body) {
            toast.error('Vui lòng nhập body')
        } else {
            let data = {
                title: state.title,
                body: state.body,
                userId: 1
            }

            let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
            if (res && res.data) {
                let newBlog = res.data;
                toast.success('Thêm thành công')
                props.addNewPost(newBlog);
            }
        }

    }
    return (
        <form onSubmit={(event) => { handleClickAdd(event) }}>
            <div className="add-container">
                <div className="add-title">Add New Post</div>
                <div className="add-input">
                    <label>Title</label>
                    <input type="text"
                        value={state.title}
                        onChange={(event) => { changeInput(event) }}
                        name="title"
                    />
                </div>
                <div className="add-input">
                    <label>Body</label>
                    <input type="text"
                        value={state.body}
                        onChange={(event) => { changeInput(event) }}
                        name="body" />
                </div>

                <div className="add-input">
                    <button className="add-button" type='submit'>Add</button>
                </div>
            </div>
        </form>
    )
}
export default AddNewUser