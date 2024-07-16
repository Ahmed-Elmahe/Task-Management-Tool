import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';


export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/aboutus' element={<AboutUs />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/registration' element={<Registration />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}