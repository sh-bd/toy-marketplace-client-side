import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Footer.css';

const Footer = () => {
     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth'
          });
     };

     return (
          <div className='mt-5'>
               <footer className="footer container-fluid sticky-lg-top">
                    <div className="container p-2">
                         <div className="row d-flex">
                              <div className="col-lg-4">
                                   <div className="skk mx-lg-3">
                                        <div className="sm">
                                             <h2 className="text-warning mt-4 text-center">Contact Us</h2>
                                        </div>
                                        <p className="text-justify mt-4 text-light ms-2">Thanks for visiting the best toys store in the country!</p>
                                        <ul className="list-unstyled ms-2">
                                             <li>
                                                  <p className='d-flex align-content-center'>
                                                       <HiOutlineLocationMarker className="icon text-light fs-4" />
                                                       <span className="text-light ms-2">Rajshahi,
                                                            Bangladesh</span></p>
                                             </li>
                                             <li>
                                                  <p className='d-flex align-content-center'>
                                                       <AiTwotoneMail className='icon text-light fs-4' />
                                                       <span className="text-light ms-2">
                                                            phtoys.store@gmail.com</span></p>
                                             </li>
                                             <li>
                                                  <p className='d-flex align-content-center'>
                                                       <BiPhoneCall className='icon text-light fs-4' />
                                                       <span className="text-light ms-2">
                                                            8801753492305</span>
                                                  </p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-4">
                                   <div className="mx-lg-3 ps-lg-5">
                                        <div className="sm">
                                             <h2 className="text-warning mt-4 text-center">Useful Links</h2>
                                        </div>
                                        <ul className="list-unstyled mt-4 linkStyle">
                                             <li>
                                                  <ActiveLink to="/">Home</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/blog">Blog</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/login">Login</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/register">Register</ActiveLink>
                                             </li>

                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-4">
                                   <div className="ps-lg-3">
                                        <div className="sm">
                                             <h2 className="text-warning mt-4 text-center">Social Links</h2>
                                        </div>
                                        <div className=" btn-group mt-4">
                                             <input type="text" className='rounded ps-3 ' placeholder=" Enter your email" />
                                             <input type="submit" value="Subscribe" className="btn btn-warning btn-lg" />
                                        </div>
                                        <h4 className=" text-warning mt-4">Follow us on</h4>
                                        <div className=" d-flex mt-4">
                                             <div className="sa">
                                                  <div className="followUs">
                                                       <a href="#" target='_blank'>
                                                            <FaFacebook />

                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa">
                                                  <div className="followUs">
                                                       <a href="#" target='_blank'>
                                                            <FaInstagram />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa">
                                                  <div className="followUs">
                                                       <a href="#" target='_blank'>
                                                            <FaYoutube />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa ">
                                                  <div className="followUs">
                                                       <a href="#">
                                                            <SiGmail />
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>


               <div className="container mt-3">
                    <p className="text-center font-bold ">
                         <Link className='xyz text-danger fw-semibold' to='/'>&copy; PH Toys Store</Link>
                    </p>
               </div>
          </div>
     );
};

export default Footer;