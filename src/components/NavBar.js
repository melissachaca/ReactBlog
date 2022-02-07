import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Blog API</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {this.props.loggedIn ? (
                            <>
                            <li className="nav-item">
                              <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                            </>
                        ) : null}
                        
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Login/ Register
                            
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"> 
                            {this.props.loggedIn ? (
                            <>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.logUserOut}>Logout</Link></li> 
                            </>
                            ) : (
                            <>
                            <li><Link className="dropdown-item" to="/login">Login</Link></li>
                            <li><Link className="dropdown-item" to="/register">Register</Link></li>
                            </>
                            )}
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}