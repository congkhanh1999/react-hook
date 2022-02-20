
import React, { useState } from "react";


const AddUser = (props) => {
    const [state, setState] = useState({
        name: "",
        age: ""
    })
    const handleClickAdd = () => {
        if (state.name && state.age) {
            props.addUser({
                id: Math.random(),
                name: state.name,
                age: state.age,
                role: 'user'
            })
        } else {
            alert('vui long nhap')
        }
    }
    const handleChangeInput = (event) => {
        let value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
        console.log(state)
    }

    return (
        <div>
            <div className="addUser-container">
                <label>Name</label>
                <input type="text" name="name" value={state.name} onChange={(event) => { handleChangeInput(event) }} placeholder="Name" />
                <br />
                <label>Age</label>
                <input type="text" name="age" value={state.age} onChange={(event) => { handleChangeInput(event) }} placeholder="Age" />
                <button onClick={() => { handleClickAdd() }}>Add</button>
            </div>
        </div>
    )
}
export default AddUser