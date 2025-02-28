import './message.css'
import '../../../App.css'
import { Link } from 'react-router-dom';
const Message = () => {
    return (
        <div className="container-message">
            <h1>Parabéns, você está no sistema!</h1>
            <Link to="/">
                <button className="button">retornar</button>
            </Link>
        </div>
    );
};

export default Message