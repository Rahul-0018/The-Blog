import { useHistory } from "react-router-dom";
const NotFound = () => {
    const history = useHistory();
    setTimeout(() => {
        history.push('/')
    }, 10000)   
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The requested page cannot be found</p>
            <p>Returning to home page....</p>
        </div>
     );
}
export default NotFound;