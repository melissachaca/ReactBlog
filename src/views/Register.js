import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(props){
    
    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();



        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
        if (password !== confirmPass){
            navigate('/register')
        } else {


            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
    
            let data = JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: password
            })
    
            fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: myHeaders,
                body: data
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    navigate('/')
                })
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Register Here</h3>
            <div className='form-group'>
                <fieldset>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' className='form-control' placeholder='Username' />
                </fieldset>
                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' className='form-control' placeholder='Email' />
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' className='form-control' placeholder='Password' />
                </fieldset>
                <fieldset>
                    <label htmlFor='confirmPass'>Confirm Password</label>
                    <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
                </fieldset>
                <input type='submit' className='btn btn-outline-primary w-100 mt-3' value='Register' />
            </div>
        </form>
    );
}