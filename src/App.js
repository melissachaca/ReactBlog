import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/NavBar';
import Posts from './views/Posts';
import Register from './views/Register';
import Login from './Login';
import PostUpdate from './components/PostUpdate';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        name: 'Melissa',
        loggedIn: localStorage.getItem('token')
    }
}

  logIn = (token) => {
    this.setState({
        loggedIn: token
    })
  }

  logOut = () =>{
    localStorage.removeItem('token');
    this.setState({
        loggedIn: null
    })
  }


  render() {
    return (
        <>
            <Navbar loggedIn={this.state.loggedIn}/>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="register" element={<Register /> } />
                    <Route path="login" element={<Login  logUserIn={this.logIn}/> } />
                    <Route path="posts" element={<Posts /> } />
                    <Route path="posts/:postId" element={<PostUpdate token={this.state.loggedIn}/> } />
          
                    
                </Routes>
                
            </div>
        </>

    );
  }
}

