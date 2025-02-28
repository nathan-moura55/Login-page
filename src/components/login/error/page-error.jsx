import "./page-error.css"
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="container-error">
            <h1>Erro 404: Página não encontrada</h1>
            <Link to='/'>
                <button className="button-return">retornar</button>
            </Link>
        </div>
    );
};

export default Error