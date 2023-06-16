import React from 'react';
import './ExtraSection2.css';

const ExtraSection2 = () => {
     return (
          <div className=' container'>
               <h1 className='my-5 text-center pt-lg-3'>Read about our kits</h1>
               <div className="row">
                    <div className=" col-lg-6 mb-5">
                         <div className="row pe-lg-5">
                              <div className="shadow p-3 mb-lg-5 bg-white rounded col-lg-7">
                                   <p><b className="text-primary">World</b></p>
                                   <h2>STEM Explorers™ Pixel Art</h2>
                                   <p className="text-secondary">Nov 09</p>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta velit impedit, sequi officia eius incidunt aliquam. Necessitatibus, veniam in.</p>
                                   <p className="text-primary">Continue Reading......</p>

                              </div>
                              <div className="col-lg-5">
                                   <img className="img-fluid sec2Img w-100 rounded" src="https://www.learningresources.com/media/catalog/product/9/4/9463-stem-pixel-art-challenge_heo_sh-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" alt=""/>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-6">
                         <div className="row">
                              <div className="shadow p-3 mb-3 bg-white rounded col-lg-7 ">
                                   <p><b className="text-success">Design</b></p>
                                   <h2>Personal computer Kit</h2>
                                   <p className="text-secondary">Nov 11</p>
                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto voluptates iure quia eaque, sint rerum. Libero minus aspernatur ab rerum obcaecati molestias nulla consequatur.</p>
                                   <p className="text-primary">Continue Reading...</p>

                              </div>
                              <div className="col-lg-5">
                                   <img className="img-fluid sec2Img w-100 rounded" src="https://cdn.filestackcontent.com/sV0LbKOMQiGTZqiDTSPS" alt=""/>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection2;