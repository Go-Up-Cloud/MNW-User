import React, { useState } from 'react';
import axios from 'axios';
import './StyleLogin.css'; // Asegúrate de importar tu archivo de estilos
import { registroUsuario } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Registro() {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    img: ''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
    try {
      console.log(formData);
      try {
        const response = await axios.post('/users/create', formData);
        console.log(response);
        if (response.status === 200 && response.data && !response.data.error) {
          const {token, usuario} = response.data;
          localStorage.setItem('tokenUser', JSON.stringify(token));
          localStorage.setItem('user', JSON.stringify(usuario));
          Swal.fire({
            title: "Usuario Registrado",
            icon: 'success',
            confirmButtonText: 'OK',
            background: '#242424',
            color: 'white',
            backdrop: 'rgba(0,0,000,0.4)',
          }).then(()=>{navigate(-1)});
        } else {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#242424',
            color: 'white',
            backdrop: 'rgba(0,0,000,0.4)',
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: error.response?.data?.error,
          icon: 'error',
          confirmButtonText: 'OK',
          background: '#242424',
          color: 'white',
          backdrop: 'rgba(0,0,000,0.4)',
        });
        
      }
    //  navigate(-1);
    } catch (error) {
      console.error('Error al registrar usuario', error);
    }
  };
    
  return (
    <div className="cont-registro">
      <form className="form-registro" onSubmit={handleSubmit}>
        <h2>Regístrate</h2>
        <input className="input-registro" type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nombre" />
        <input className="input-registro" type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apellido" />
        <input className="input-registro" type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Nombre de usuario" />
        <input className="input-registro" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" />
        <input className="input-registro" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" />

        <button  type="submit">Registrarse</button>
      </form>
      <p className="signin-registro">¿Ya tienes una cuenta? <a href="/singin">Inicia sesión</a></p>
    </div>
  );
}
