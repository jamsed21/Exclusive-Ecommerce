import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
        const state = useSelector((state) => state.handleCart)
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light py-1 shadow-sm">
                <div className ="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/" style={{color:" #b62607 "}}> EXCLUSIVE </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/" style={{color:"black"}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" style={{color:"black"}}> Products </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{color:"black"}}>About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" style={{color:"black"}}>Contact</NavLink>
                            </li>
                            </ul>

                            
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                               <i className="fa fa-sign-in me-1"></i> Login
                            </NavLink>

                            <NavLink to="/register" className="btn btn-outline-dark ms-2" >
                               <i className="fa fa-user-plus me-1"></i> Register
                            </NavLink>

                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                               <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
