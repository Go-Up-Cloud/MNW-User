import React, { useState } from 'react';
import axios from 'axios';
import './StyleLogin.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function LoginAdmin() {
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', formData);
      console.log(response.data);
      const { usuario, token } = response.data;
      localStorage.setItem('tokenUser', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(usuario));
      navigate(-2)
    } catch (error) {
        showError(error.response.data.error);
    }
  };

    const showError = (message) => {
    Swal.fire({
    title: message,
    icon: 'error',
    confirmButtonText: 'OK',
    background: '#242424',
    color: 'white',
    backdrop: 'rgba(0,0,000,0.4)',
    });
    };

    
  return (
    <div className="cont-login-ad">
      <form className="form-login-ad" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input className="input-login-ad" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" />
        <input className="input-login-ad" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" />
        <button className="input-login-ad" type="submit">Iniciar Sesión</button>
      </form>
            <p className="signin-registro">¿Ya tienes una cuenta? <a href="/singin">Inicia sesión</a></p>
    </div>
  );
}
