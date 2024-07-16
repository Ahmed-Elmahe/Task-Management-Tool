import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import eyeClose from '../eye-close.png';
import eyeOpen from '../eye-open.png';

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const history = useNavigate();

  var passwordShow1 = document.getElementById('passwordFild1');
  var passwordShow2 = document.getElementById('passwordFild2');

    function show1() {
        if(passwordShow1.type === "password") {
            passwordShow1.type = "text";
            document.getElementById('eyeClose1').src = eyeOpen;
        } else {
            passwordShow1.type = "password";
            document.getElementById('eyeClose1').src = eyeClose;
        }
    }

    function show2() {
      if(passwordShow2.type === "password") {
          passwordShow2.type = "text";
          document.getElementById('eyeClose2').src = eyeOpen;
      } else {
          passwordShow2.type = "password";
          document.getElementById('eyeClose2').src = eyeClose;
      }
  }

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/registration', {firstName, lastName, username, email, password, rePassword, address1, address2, dateOfBirth})
      .then(async (response) => {
        if(response.data.status === "SUCCESS") {
          history('/home');
          console.log("SUCCESS");
        }else {
          document.getElementById('ale').innerHTML = response.data.message;
          document.getElementById('ale').className = "alert alert-danger";
        }
      })
    } catch(error) {
      console.log(error);
    }
  }


  return (
    <section className="text-center">
      <div className="p-5 bg-image head"></div>
      <div className='container py-5 h-100'>
        <div className="card mx-4 mx-md-5 shadow-5-strong cardCSS">
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form method='POST'>
                  <div id='ale'></div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div  className="form-outline">
                        <label className="form-label" for="form3Example1">First name</label>
                        <input type="text" id="form3Example1" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div  className="form-outline">
                        <label className="form-label" for="form3Example2">Last name</label>
                        <input type="text" id="form3Example2" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div  className="form-outline">
                        <label className="form-label" for="form3Example1">Username</label>
                        <input type="text" id="form3Example1" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div  className="form-outline">
                        <label className="form-label" for="form3Example2">Email</label>
                        <input type="email" id="form3Example2" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>                     
                      </div>
                    </div>
                  </div> 
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div  className="form-outline">
                        <label className="form-label" for="passwordFild1">Password</label>
                        <div className='show-password'>
                          <input type="password" id="passwordFild1" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/><img id='eyeClose1' onClick={show1} src={eyeClose} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div  className="form-outline">
                        <label className="form-label" for="passwordFild2">Password Conf.</label>
                        <div className='show-password'>
                          <input type="password" id="passwordFild2" className="form-control" value={rePassword} onChange={e => setRePassword(e.target.value)}/><img id='eyeClose2' onClick={show2} src={eyeClose} />
                        </div>
                      </div>
                    </div>
                  </div>
                   <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">Address</label>
                        <input type="text" id="form3Example1" className="form-control" value={address1} onChange={e => setAddress1(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div  className="form-outline">
                        <label className="form-label" for="form3Example2">Second Address (Optinal)</label>
                        <input type="text" id="form3Example2" className="form-control" value={address2} onChange={e => setAddress2(e.target.value)}/>                     
                      </div>
                    </div>
                  </div>


                  <div className='row mb-3 ml-1 row d-flex justify-content-center align-items-center'>
                    <div className='col-md-5 '>
                      <label className="form-label " for="form3Example2">Date of birth</label>
                      <input type="date" id="form3Example2" className="form-control" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
                    </div>
                  </div>

                  
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault"> Default checkbox</label>
                  </div> 
                  <button type="submit" className="btn btn-primary mb-4" onClick={submit}>Sign up</button>
                </form>
                <div>
                  <p className="mb-0 text-dark">Already have an account <Link to="/signin" className="text-dark-50 fw-bold">Sign in</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}

export default SignUpForm;