import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn }  from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';

import logoimg from '../../assets/logo.svg';
import heroesimg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setid] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err) {
                alert('Falha no login, tente novamente');
        }
    }

    return (
       <div className="logon-container">
        <section className="form">    
           <img src={logoimg} alt="Be The hero" />

            <form onSubmit={handleLogin}>
                <h1> Faça seu logon </h1>

                <input placeholder="sua id" 
                value={id}
                onChange={e => setid(e.target.value)}
                />
                <button className="button">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </form>
        </section>

        <img src={heroesimg} alt="Heroes" />
       </div>
    );
}