import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nome || !email || !senha || !confirmarSenha) {
            setErro('Todos os campos são obrigatórios!');
            return;
        }

        if (senha !== confirmarSenha) {
            setErro('As senhas não são parecidas!');
            return;
        }

        setErro('');
        alert('Usuário registrado com sucesso!');
    };

    return (
        <div className="container-register">
            <h2>Registro de Usuário</h2>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder='Seu nome'
                        required
                    />
                </div>

                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Seu e-mail'
                        required
                    />
                </div>

                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder='Digite sua senha'
                        required
                    />
                </div>

                <div>
                    <label>Confirmar senha:</label>
                    <input
                        type="password"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        placeholder='Digite sua senha'
                        required
                    />
                </div>

                <button type='submit' className='button'>Registrar</button>
                <Link to="/">
                <button type='submit' className='button-return'>Retornar</button>
                </Link>
            </form>
        </div>
    );
};

export default Register;