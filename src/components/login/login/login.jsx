import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import '../../../App.css'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'batatinha123') {
            navigate('/message');
        } else {
            alert('Usuário ou senha inválidos');
        };
    };
    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-field">
                    <input type="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#"> Esqueceu a senha?</a>
                </div>
                <button onClick={handleLogin}>Entrar</button>
                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login