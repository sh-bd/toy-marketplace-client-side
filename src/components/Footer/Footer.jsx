import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { SiGmail } from 'react-icons/si';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Footer.css';

const Footer = () => {
     return (
          <div className='mt-5'>
               <footer className="footer container-fluid sticky-lg-top">
                    <div className="container p-2">
                         <div className="row d-flex">
                              <div className="col-lg-4">
                                   <div className="skk mx-lg-3">
                                        <div className="sm">
                                             <h2 className="text-info mt-4 text-center">Contact Us</h2>
                                        </div>
                                        <p className="text-justify mt-4 text-light ms-2">Thanks for visiting the best toy store in the country!</p>
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
                                                            8801753492305</span></p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-4">
                                   <div className="mx-lg-3 ps-lg-5">
                                        <div className="sm">
                                             <h2 className="text-info mt-4 text-center">Useful Links</h2>
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
                                             <h2 className="text-info mt-4 text-center">Social Links</h2>
                                        </div>
                                        <div className=" btn-group mt-4">
                                             <input type="text" className='rounded ps-3 ' placeholder=" Enter your email" />
                                             <input type="submit" value="Subscribe" className="btn btn-info btn-lg" />
                                        </div>
                                        <h4 className=" text-info mt-4">Follow us</h4>
                                        <div className=" d-flex mt-4">
                                             <div className="sa">
                                                  <div className="followUs">
                                                       <a href="https://www.facebook.com/smsarzil.muntaha" target='_blank'>
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
                                                       <a href="https://www.youtube.com/channel/UCJOmN86g6tWuxer1_J5wuaQ" target='_blank'>
                                                            <FaYoutube />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa ">
                                                  <div className="followUs">
                                                       <a href="https://mail.google.com/mail/u/0/#inbox">
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
                    <p className="text-left font-bold text-info">
                         &copy; PH Toys Store
                         <span className="text-info float-end">
                              Back to top
                         </span>
                    </p>
               </div>
          </div>
     );
};

export default Footer;