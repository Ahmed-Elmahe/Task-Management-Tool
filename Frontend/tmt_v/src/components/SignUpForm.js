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
  const [agree, setAgree] = useState(true);

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

  function closeTermsBtnF() {
    document.getElementById("termsList").style.display = "none";
  }

  function learnTermsLink() {
    document.getElementById("termsList").style.display = "block";
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
    <section style={{position: "relative"}}>
      <div className="p-5 bg-image head main "></div>
      <div className='container text-center py-5 h-100'>
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
                    <input class="form-check-input me-1" type="checkbox" value={agree} id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault"> Do you agree to the terms <span className='learn' onClick={learnTermsLink}><b>Learn more</b></span></label>
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
      <div className='terms card container' id='termsList'>
           <div className='titleTerms'>
            <h3>Terms</h3>
            <i class="fa-solid fa-circle-xmark" onClick={closeTermsBtnF} style={{cursor: "pointer"}}></i>
           </div>
           <div className='contantTerms'>
            <ol className='ruleList mt-5'>
              <li>
                <h5>Introduction</h5>
                <p>Welcome to TMT. By signing up, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
              </li>
              <li>
                <h5>Eligibility</h5>
                <ul>
                  <li>You must be at least 12 years old to use our services.</li>
                  <li>By using our services, you represent and warrant that you have the right, authority, and capacity to enter into this agreement and abide by all the terms and conditions.</li>
                </ul>
              </li>
              <li>
                <h5>Account Registration</h5>
                <ul>
                  <li>You must provide accurate and complete information during the registration process.</li>
                  <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                  <li>Notify us immediately of any unauthorized use of your account.</li>
                </ul>
              </li>
              <li>
                <h5>User Conduct</h5>
                <ul>
                  <li>You agree to use the service only for lawful purposes.</li>
                  <li>You must not use the service to transmit any content that is illegal, harmful, or infringes on the rights of others.</li>
                </ul>
              </li>
              <li>
                <h5>Privacy Policy</h5>
                <p>Your registration and use of our services are governed by our Privacy Policy, which is incorporated into these terms by reference.</p>
              </li>
              <li>
                <h5>Subscription and Fees</h5>
                <ul>
                  <li>Certain features of the service may require payment of fees. You agree to pay all applicable fees as described on our website.</li>
                  <li>We reserve the right to change our fees at any time.</li>
                </ul>
              </li>
              <li>
                <h5>Cancellation and Termination</h5>
                <ul>
                  <li>You can cancel your account at any time. Upon cancellation, you will no longer have access to the service.</li>
                  <li>We reserve the right to suspend or terminate your account if you violate these terms.</li>
                </ul>
              </li>
              <li>
                <h5>Intellectual Property</h5>
                <ul>
                  <li>All content and materials provided through the service are the intellectual property of TMT or its licensors.</li>
                  <li>You may not use any of our intellectual property without our prior written consent.</li>
                </ul>
              </li>
              <li>
                <h5>Limitation of Liability</h5>
                <p>TMT will not be liable for any indirect, incidental, or consequential damages arising out of your use of the service.</p>
              </li>
              <li>
                <h5>Changes to Terms</h5>
                <ul>
                  <li>We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on our website.</li>
                  <li>Your continued use of the service after such changes will constitute your acceptance of the new terms.</li>
                </ul>
              </li>
              <li>
                <h5>Governing Law</h5>
                <p>These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
              </li>
              <li>
                <h5>Contact Information</h5>
                <p>If you have any questions about these terms, please contact us at <Link to={'/contact'}>Conduct</Link></p>
              </li>
            </ol>
           </div>
      </div>   
    </section>
  );
}

export default SignUpForm;