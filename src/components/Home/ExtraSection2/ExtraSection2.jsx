import React from 'react';
import './ExtraSection2.css'

const ExtraSection2 = () => {
     return (
          <div className=' container'>
               <h1 className='my-5 text-center pt-lg-3'>Read about our toys</h1>
               <div className="row">
                    <div className=" col-lg-6 mb-5">
                         <div className="row pe-lg-5">
                              <div className="shadow p-3 mb-lg-5 bg-white rounded col-lg-7">
                                   <p><b className="text-primary">World</b></p>
                                   <h2>Bubble Gun for Kids</h2>
                                   <p className="text-secondary">Nov 09</p>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta velit impedit, sequi officia eius incidunt aliquam. Necessitatibus, veniam in.</p>
                                   <p className="text-primary">Continue Reading......</p>

                              </div>
                              <div className="col-lg-5">
                                   <img className="img-fluid sec2Img w-100 rounded" src="https://static.ajkerdeal.com/images/deals/811882808195724/1_machine-glue-gun-assorted-random-color.webp" alt=""/>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-6">
                         <div className="row">
                              <div className="shadow p-3 mb-3 bg-white rounded col-lg-7 ">
                                   <p><b className="text-success">Design</b></p>
                                   <h2>Ice-Cream Van</h2>
                                   <p className="text-secondary">Nov 11</p>
                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto voluptates iure quia eaque, sint rerum. Libero minus aspernatur ab rerum obcaecati molestias nulla consequatur.</p>
                                   <p className="text-primary">Continue Reading...</p>

                              </div>
                              <div className="col-lg-5">
                                   <img className="img-fluid sec2Img w-100 rounded" src="https://static.ajkerdeal.com/images/deals/750092405125548/1_ice-cream-van-toy-ice-cream-monkey-vandhaka-shopping-zone.webp" alt=""/>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection2;