
import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import './UserDetail.scss'
const UserDetail = () => {
    const [UserDetail, setUserDetail] = useState({})
    let history = useHistory()
    let { id } = useParams();
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                let data = (res && res.data) ? res.data : []
                console.log(data);
                if (data) {
                    setUserDetail(data);
                    console.log(UserDetail)
                }
            }
            fetchData();
        } catch (e) {
            console.log(e)
        }
    }, []);
    const handleGoBack = () => {
        history.push('/ListUser')
    }

    return (

        <div className="detail-container">
            <div className="detail-bg">
                <button onClick={handleGoBack}>Back</button>
                <h2 className="detail-content">Post Information</h2>
                <div className="detail-infor">
                    <p>Title : {UserDetail.title}</p>
                    <p>Content : {UserDetail.body}</p>

                </div>
            </div>
        </div>
    )
}
export default UserDetail