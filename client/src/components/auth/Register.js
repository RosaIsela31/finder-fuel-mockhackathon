import React, { Fragment, useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if( password !== password2){
      console.log('La contraseña no coincide');
    } else {
      const newUser = {
        name,
        email,
        password
      }
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const body = JSON.stringify(newUser);
        const res = await axios.post('/api/users', body, config);
        console.log(res.data);
        
      } catch (err) {
        console.error(err.response.data);
        
        
      }
    }
  }


  return (
    <Fragment>
      <h1 className='large text-primary'>Regístrate</h1>
        <p className='lead'>Crea Tu Cuenta</p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input 
              type='text' 
              placeholder='Name' 
              name='name' 
              value={name} 
              onChange={e => onChange(e)}
              required 
              />
          </div>
          <div className='form-group'>
            <input 
              type='email' 
              placeholder='Email address' 
              name='email'
              value={email} 
              onChange={e => onChange(e)}
              required
              />
            <small className='form-text'>
              Puedes usar tu foto de email 
            </small>
          </div>
          <div className='form-group'>
            <input 
              type='password'
              placeholder='password'
              name='password'
              value={password} 
              onChange={e => onChange(e)}
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input 
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2} 
              onChange={e => onChange(e)}
              minLength='6'
            />
          </div>
          <input type='submit' class='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
         ¿Ya tienes una cuenta? <a href='login.html'>Inicia Sesión</a>

        </p>

    </Fragment>
  )
}

export default Register;