import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import eyeClose from '../eye-close.png';
import eyeOpen from '../eye-open.png';



function SignInForm() {
    const history = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var passwordShow = document.getElementById('passwordFild')

    function show() {
        if(passwordShow.type === "password") {
            passwordShow.type = "text";
            document.getElementById('eyeClose').src = eyeOpen;
        } else {
            passwordShow.type = "password";
            document.getElementById('eyeClose').src = eyeClose;
        }
    }
    



    async function configuration(event) {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/login', {email, password}).then((response)=>{
                if(response.data.status === "SUCCESS"){
                    history('/home');
                } else {
                    document.getElementById('alerts').innerHTML = response.data.message;
                    document.getElementById('alerts').className = "alert alert-danger";
                }
            });
        }catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="vh-100 gradient-custom" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 mb-4">
                        <div className="card bg-light text-white">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <form method='POST'>
                                        <h2 className="fw-bold mb-5 text-dark">Sign-in</h2>
                                        <div id='alerts'></div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label text-dark" for="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={event => setEmail(event.target.value)} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label text-dark" for="passwordFild">Password</label>
                                            <div className='show-password'>
                                                <input type="password" id="passwordFild" className="form-control form-control-lg" value={password} onChange={event => setPassword(event.target.value)} /><img id='eyeClose' onClick={show} src={eyeClose} />
                                            </div>
                                        </div>
                                        <p className="small mb-5 pb-lg-2 "><Link className="text-dark-50 " to="#">Forgot password?</Link></p>
                                        <button className="btn btn-outline-primary btn-lg px-5" type="submit" onClick={configuration}>Login</button>
                                    </form>                                   
                                </div>
                                <div>
                                    <p className="mb-0 text-dark">Don't have an account? <Link to="/registration" className="text-dark-50 fw-bold">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    );
}

export default SignInForm;