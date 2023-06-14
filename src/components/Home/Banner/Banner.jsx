import React from 'react';
import './Banner.css'

const Banner = () => {
     return (
          <div className=' container-lg'>
               <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner position-relative slidBorder">
                         <div className="carousel-item active">
                              <img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--jhT5IFJD--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1622837747000/WaterBlasters_Group-258.jpg" className="d-block w-100" alt="..." />
                              <div className="carousel-caption d-md-block text-start bg-dark bg-opacity-50 h-100 w-100">
                                   <div className='p-lg-3 text-position text-center'>
                                        <div className=' ps-lg-5 ms-lg-3'>
                                             <div className=' col-lg-6 px-4 mb-3 mx-auto'>
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The World of Arts Crafts Toys</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Arts and crafts toys are playthings designed to foster creativity, imagination, and hands-on artistic expression in children.</p>
                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-info mb-2">Crafts Project</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="carousel-item">
                              <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1724003/41ot0psw0al-sl500--60affc1059f3f.jpg" className="d-block w-100" alt="..." />
                              <div className="carousel-caption d-md-block text-start bg-dark bg-opacity-50 h-100 w-100">
                                   <div className='p-lg-3 text-position text-center'>
                                        <div className=' ps-lg-5 ms-lg-3'>
                                             <div className=' col-lg-6 px-4 mb-3 mx-auto'>
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The World of Arts Crafts Toys</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Arts and crafts toys are playthings designed to foster creativity, imagination, and hands-on artistic expression in children.</p>

                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-info  mb-2">Crafts Project</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="carousel-item ">
                              <img src="https://i.ytimg.com/vi/Rb6RpmKCQl0/maxresdefault.jpg" className="d-block w-100" alt="..." />
                              <div className="carousel-caption d-md-block text-start bg-dark bg-opacity-50 h-100 w-100">
                                   <div className='p-lg-3 text-position text-center'>
                                        <div className=' ps-lg-5 ms-lg-3'>
                                             <div className=' col-lg-6 px-4 mb-3 mx-auto'>
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The World of Arts Crafts Toys</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Arts and crafts toys are playthings designed to foster creativity, imagination, and hands-on artistic expression in children.</p>

                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-info  mb-2">Crafts Project</button>
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
                                                  <h2 className=' display-4 fw-semibold mb-3 pt-5'>The World of Arts Crafts Toys</h2>
                                             </div>
                                             <p className=' fs-6 col-lg-8 fw-semibold mx-auto px-5'>Arts and crafts toys are playthings designed to foster creativity, imagination, and hands-on artistic expression in children.</p>

                                             <div className='mt-3'>
                                                  <button type="button" className="btn btn-danger me-3 mb-2">Arts More</button>
                                                  <button type="button" className="btn text-light btn-info mb-2">Crafts Project</button>
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