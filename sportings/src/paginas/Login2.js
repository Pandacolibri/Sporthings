import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Login(){
    
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (event)=>{
      event.preventDefault();
      axios.post("http://localhost:8081/login",{
        correo:correo,
        contraseña:contraseña
      }).then(res => {
        if(res.data.Status === "Success") {
          navigate('/Tienda')
        } else {
          alert("Error");
        }
      })
      .then(err => console.log(err));
    }
    return (
        <form onSubmit={handleSubmit}>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            
                <MDBInput wrapperClass='mb-4' label='Ingresa el email' id='form1' type='email' value={correo} onChange={(event)=>{
                    setCorreo(event.target.value)
                }} required/>
                <MDBInput wrapperClass='mb-4' label='Ingresa tu contraseña' id='form2' type='password' value={contraseña} onChange={(event)=>{
                    setContraseña(event.target.value);
                }} required/>
            
                <button className='btn btn-warning'>Inicia Sesion</button>
                <div className="text-center">
                    <p>No eres miembro registrate? <a href="Login">Registrate</a></p>
                </div>
            
                </MDBContainer>
        </form>
      );
}