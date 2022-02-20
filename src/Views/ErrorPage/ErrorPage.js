import './ErrorPage.scss'
import { useHistory } from 'react-router-dom'
const ErrorPage = () => {
    const history = useHistory();
    const handleBackHome = () => {
        history.push('/')
    }
    return (
        <div className="error-container">
            <h4>Your Page Is Not Available</h4>
            <button className="btn btn-primary" onClick={handleBackHome}>Go to Homepage</button>
        </div>
    )
}
export default ErrorPage