import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        let myHeaders = new Headers();
        myHeaders.append('Authorization', "Basic " + btoa(`${username}:${password}`))

        let res = await fetch(' http://localhost:5000/api/token', {
            method: 'POST',
            headers: myHeaders
        })
        let data = await res.json();
        let token = await data.token

        localStorage.setItem('token', token)
        this.props.logUserIn(token)
        this.setState({
            redirect: '/'
        })
    }
    
    render() {
        return (
            this.state.redirect ? <Navigate to={this.state.redirect} /> :
            <form onSubmit={this.handleSubmit}>
                <h3 className='text-center'>Login Here</h3>
                <div className='form-group'>
                    <fieldset>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' className='form-control' placeholder='Username' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' className='form-control' placeholder='Password' />
                    </fieldset>
                    <input type='submit' className='btn btn-outline-primary w-100 mt-3' value='Login' />
                </div>
            </form>
        );
    }
}