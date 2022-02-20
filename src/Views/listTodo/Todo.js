

const ToDo = (props) => {
    const handleClickDelete = (id) => {
        props.deleteTodo(id);
    }
    const listUsers = props.listUsers
    return (
        <div>
            <p>{props.title}</p>
            {listUsers.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{index + 1}-{item.name}-{item.age}
                            &nbsp;
                            <span onClick={() => handleClickDelete(item.id)}>X</span>
                        </div>

                    </div>
                )
            })
            }
        </div >
    )
}
export default ToDo