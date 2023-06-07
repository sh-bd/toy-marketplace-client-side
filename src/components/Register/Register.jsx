import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Register = () => {
     useTitle('Register')

     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')
     const [email, setEmail] = useState("")
     const [emailError, setEmailError] = useState('')
     const [passwordShown, setPasswordShown] = useState(false);

     const { createUser } = useContext(AuthContext)
     const navigate = useNavigate()

     // passwordShown function start 
     const [passwordIcon, setPasswordIcon] = useState(false)
     const [conformPasswordIcon, setConformPasswordIcon] = useState(false)

     const [conformPasswordShown, setConformPasswordShown] = useState(false);

     const togglePassword = () => {
          setPasswordShown(!passwordShown);
          setPasswordIcon(!passwordIcon)
     };
     const toggleConformPassword = () => {
          setConformPasswordShown(!conformPasswordShown);
          setConformPasswordIcon(!conformPasswordIcon)
     }
     // passwordShown function end

     // main form part start 
     const handelRegister = (event) => {
          event.preventDefault();
          setError('')
          setSuccess('')
          const form = event.target;
          const name = form.name.value;
          const photoUrl = form.photoUrl.value;
          const email = form.email.value;
          const password = form.password.value;
          const conformPassword = form.conformPassword.value;

          if (password !== conformPassword) {
               setError("Don't mach this password")
               return
          }
          else if (password.length < 6) {
               setError('Please The password is less than 6 characters')
               return
          }

          // Signed up part start
          createUser(email, password)
               .then((userCredential) => {
                    const currentUser = userCredential.user;
                    setSuccess('Create user account successFull')

                    // user information post data page start 
                    const saveUser = {name: name, email: email, password: password}
                    fetch('https://assignment11-server-site-delta.vercel.app/users',{
                         method: 'POST',
                         headers: {
                              'content-type':'application/json'
                         },
                         body: JSON.stringify(saveUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                         if (data.insertedId) {
                              if (currentUser) {
                                   Swal.fire({
                                        title: 'Success!',
                                        text: 'Register Success !!',
                                        icon: 'success',
                                        confirmButtonText: 'Ok'
                                   })
                              }
                              form.reset()
                              // Verification(currentUser)
                              navigate('/')
                              setEmail('') 
                              upDataUser(currentUser, name, photoUrl)
                         }
                    })
                    // user information post data page end
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });
          // Signed up part end
     }
     // main form part end

     // valid email function start 
     const handelEmail = (event) => {
          const emailInput = event.target.value
          if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
               setEmailError('Please provide a valid email')
          }
          else {
               setEmailError('')
          }
          setEmail(emailInput)
     }
     // valid email function end

     //   // emailVerification part start 
     //   const Verification = (currentUser) => {
     //      sendEmailVerification(currentUser)
     //           .then(() => {
     //                alert('Verification your email')
     //           });
     // }
     // // emailVerification part end

     const upDataUser = (user, name, photoUrl) => {
          updateProfile(user, {
               displayName: name,
               photoURL: photoUrl
          })
               .then(() => {
                    // Profile updated!
                    // ...
               }).catch((error) => {
                    setError(error.message)
               });
     }

     return (
          <div className=' row mx-lg-5 px-lg-5 align-items-center'>
               <div className=' col-lg-6 my-lg-5'>
                    <img className=' img-fluid w-100 imgHeight' src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?w=740&t=st=1684338884~exp=1684339484~hmac=29bb2f06c8bc57224e5cdbbbfb70e230a9791b942d420cc8f97b06ff27106d20' alt="" />
               </div>
               <div className=' col-lg-6 '>
                    <div className=' my-lg-5'>
                         <Form onSubmit={handelRegister}>
                              <div className='border rounded px-5 py-4 shadow-lg '>
                                   <h1 className='text-center my-3'>Register </h1>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name='name' placeholder="Name" required />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Photo URL</Form.Label>
                                        <Form.Control type="text" name='photoUrl' placeholder="Photo URL" />
                                   </Form.Group>

                                   <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email'
                                             defaultValue={email}
                                             onChange={handelEmail}
                                             placeholder="Email" required
                                        />
                                   </Form.Group>
                                   {
                                        emailError && <span className=' text-danger pb-5'>{emailError}</span>
                                   }

                                   <Form.Group className="my-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <div className='parentPasswordShow position-relative'>
                                             <div>
                                                  <Form.Control type={passwordShown ? "text" : "password"} name='password' placeholder="Password"
                                                       required />
                                             </div>
                                             <div className='passwordShow position-absolute'>
                                                  <p className=' fs-5' onClick={togglePassword} >{
                                                       passwordIcon ? <AiFillEye /> : <AiFillEyeInvisible />
                                                  }</p>
                                             </div>
                                        </div>
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Conform Password</Form.Label>
                                        <div className='parentPasswordShow position-relative'>
                                             <div>
                                                  <Form.Control type={conformPasswordShown ? "text" : "password"} name='conformPassword' placeholder="Conform Password" required />
                                             </div>
                                             <div className='passwordShow position-absolute'>
                                                  <p className=' fs-5' onClick={toggleConformPassword}>{
                                                       conformPasswordIcon ? <AiFillEye /> : <AiFillEyeInvisible />
                                                  }</p>
                                             </div>
                                        </div>
                                   </Form.Group>
                                   <p className=' text-danger'>{error}</p>
                                   <p className=' text-success'>{success}</p>
                                   <div className="d-grid gap-2 mt-4">
                                        <Button variant="danger" type="submit">
                                             <b>Sign Up</b>
                                        </Button>
                                        <div className=' my-3 text-center'>
                                             <small className='me-1 fs-6'>Have an account? </small>
                                             <Link to='/login' className=' text-decoration-none text-danger fw-semibold'>Login</Link>
                                        </div>
                                   </div>
                              </div>
                         </Form>
                    </div>
               </div>
          </div>
     );
};

export default Register;