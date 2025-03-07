import { FaUser, FaLock } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import "./login.css";
import { useNavigate, Link } from 'react-router-dom';
import '../../../App.css'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogin = () => {

        console.log('Tentando login...');
        console.log('Usuário:', username);
        console.log('Senha:', password);

        if (username === 'admin' && password === 'batatinha123') {
            console.log('Login bem-sucedido!');

            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('rememberMe', 'true');
            } else {
                localStorage.removeItem('username');
                localStorage.setItem('rememberMe', 'true');
            }

            navigate('/message');
        } else {
            alert('Usuário ou senha inválidos');
            console.log('Credenciais inválidas');
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
                        <input type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)} />
                        Lembre de mim
                    </label>
                    <a href="#"> Esqueceu a senha?</a>

                </div>
                <button
                    onClick={handleLogin}
                >Entrar
                </button>

                <div
                    className="signup-link">
                <Link to="/register">
                    <p>
                        Não tem uma conta? <a href="/register">Registrar</a>
                    </p>
                </Link>
                </div>
            </form>
        </div>
    );
};

export default Login