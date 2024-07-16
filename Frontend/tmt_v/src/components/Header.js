import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TMTLogo from '../TMTLogo.svg'

export default class Header extends Component {
  render() {
    return (
        <header className='py-1 mb-3 border-bottom'>
            <nav className="navbar navbar-expand-lg navbar-white bg-transparent">
                <div class="container">
                    <Link class="navbar-brand fs-4" href="/"><img src={TMTLogo} alt='TMT' width={100} height={50} /></Link>
                    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header border-bottom">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                <Link to='/'>
                                    <img src={TMTLogo} alt='TMT' width={100} height={50}/>
                                </Link>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                            <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                                <li class="nav-item mx-2">
                                    <Link class="nav-link" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li class="nav-item mx-2">
                                    <Link class="nav-link" to="/aboutus">About Us</Link>
                                </li>
                                <li class="nav-item mx-2">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row gap-3'>
                                <Link to='/signin' className='text-dark text'>Sign in</Link>
                                <Link to='/registration' className='text-white bg-dark text-decoration-none px-3 py-1 rounded-2'>Get Start</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
  }
}