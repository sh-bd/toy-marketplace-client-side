import React from 'react';
import './Banner.css'

const Banner = () => {
     return (
          <div className=' container-lg'>
               <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner position-relative slidBorder">
                         <div className="carousel-item active">
                              <img src="https://cdn.filestackcontent.com/sV0LbKOMQiGTZqiDTSPS" className="d-block w-100" alt="..." />
                              <div className="carousel-caption d-md-block text-start bg-dark bg-opacity-50 h-100 w-100">
                                   <div className='p-lg-3 text-position text-center'>
                                        <div className=' ps-lg-5 ms-lg-3'>
                                             <div className=' col-lg-6 px-4 mb-3 mx-auto'>
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The best kits out there!</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere officiis voluptatibus aut vel mollitia eum qui, sint nulla odit?</p>
                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-warning mb-2">Toys for Kids</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="carousel-item">
                              <img src="https://cdn.filestackcontent.com/sO0YwYbMShuAOs2RDbG6" className="d-block w-100" alt="..." />
                              <div className="carousel-caption d-md-block text-start bg-dark bg-opacity-50 h-100 w-100">
                                   <div className='p-lg-3 text-position text-center'>
                                        <div className=' ps-lg-5 ms-lg-3'>
                                             <div className=' col-lg-6 px-4 mb-3 mx-auto'>
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The best kits out there!</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto ullam, facere aut est aliquam eveniet repellat nesciunt porro facilis!</p>

                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-warning  mb-2">Toys for Kids</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="carousel-item ">
                              <img src="https://cdn.filestackcontent.com/e0VwOT6BQvqzOgQEXTDH" className="d-block w-100" alt="..." />
                              <div className="carousel-caption d-md-block text-start bg-dark bg-opacity-50 h-100 w-100">
                                   <div className='p-lg-3 text-position text-center'>
                                        <div className=' ps-lg-5 ms-lg-3'>
                                             <div className=' col-lg-6 px-4 mb-3 mx-auto'>
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The best kits out there!</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolorem neque necessitatibus maxime placeat blanditiis animi repudiandae facilis tempore magnam?</p>

                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-warning  mb-2">Toys for Kids</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="carousel-item ">
                              <img src="https://momlovesbest.com/wp-content/uploads/2023/01/Lego-Mindstorms-EV3-Robot-Kit.jpg" className="d-block w-100" alt="..." />
                              <div className="carousel-caption d-md-block text-start bg-dark bg-opacity-50 h-100 w-100">
                                   <div className='p-lg-3 text-position text-center'>
                                        <div className=' ps-lg-5 ms-lg-3'>
                                             <div className=' col-lg-6 px-4 mb-3 mx-auto'>
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The best kits out there!</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eos commodi soluta recusandae quam, ut quos eum repellat laudantium ullam!</p>

                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-warning mb-2">Toys for Kids</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                    </button>
               </div>
          </div>
     );
};

export default Banner;