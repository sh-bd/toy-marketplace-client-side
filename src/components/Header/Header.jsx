import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
     const { user, logOut } = useContext(AuthContext)
     const navigate = useNavigate();

     // logOut part start
     const handelLogOut = () => {
          logOut()
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               });
     }
     // logOut part end

     return (
          <div className='fixed-top'>
               <Navbar bg="light" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4 d-flex align-items-center'>
                             <Link className='linkStyle' to={'/'}> 
                              <h2 className='ms-3 none'>PH Toys Store</h2></Link>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>

                                   <ActiveLink to="/all-toys">All Toys</ActiveLink>
                                   {
                                        (user?.email) &&
                                        <ActiveLink to="/my-toys">My Toys</ActiveLink>
                                   }
                                   {
                                        (user?.email) &&
                                        <ActiveLink to="/add-toy">Add New</ActiveLink>
                                   }
                                   <ActiveLink to="/blog">Blog</ActiveLink>

                              </Nav>
                              <Form className=' d-flex '>
                                   {
                                        user ? <div>
                                             <img title={user.displayName} className='imgStyle me-3' src={user.photoURL} alt="" />
                                             <Button onClick={handelLogOut} variant="warning" className='py-2'>Log Out</Button>
                                        </div> : <ActiveLink to="/login">Login</ActiveLink>
                                   }
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;