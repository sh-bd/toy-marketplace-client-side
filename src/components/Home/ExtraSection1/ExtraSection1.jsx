import 'aos/dist/aos.css';
import React from 'react';
import './ExtraSection1.css';

const ExtraSection1 = () => {
     return (
          <div>
               <h1 className=' text-center my-5'>Top Selling Kits</h1>
               <div className=' container'>
                    <div className="row align-items-center no-gutter">
                         <div className="col-lg-6">
                              <div className='aos-init aos-animate' data-aos="fade-right"
                                   data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img src="https://cdn11.bigcommerce.com/s-ufhcuzfxw9/images/stencil/1280x1280/products/14680/14011/CE-KIT01__96780.1599845733.jpg?c=2" alt="" className="img-fluid" />
                              </div>
                         </div>
                         <div className="col-lg-6 my-3">
                              <h2>Basic Chemistry Equipment Set</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit cumque fuga quis, maxime reprehenderit tempora! Porro nulla rem ex ullam saepe esse laboriosam voluptates a deserunt aliquam dolorum ad ipsum, eveniet eum temporibus animi! Maxime cupiditate accusantium praesentium laboriosam? Earum eos impedit cum obcaecati, quia quasi tenetur provident maiores.
                              </p>
                         </div>
                    </div>
               </div>
               <div className=' container'>
                    <div className="row align-items-center no-gutter">
                         <div className="col-lg-6 my-5">
                              <h2>Powerful STEAM BOT kit</h2>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum hic commodi mollitia quod? Minus eos sequi eaque rem aut. Recusandae totam molestias eos illo nihil quasi, aut mollitia adipisci quidem qui perspiciatis corrupti illum modi amet commodi. Itaque ratione magni consectetur perferendis autem deleniti at cumque! Molestias, temporibus. Quam, praesentium.</p>
                         </div>
                         <div className="col-lg-6">
                              <div className='aos-init aos-animate' data-aos="fade-left"
                                   data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img className='sec1Img w-100 img-fluid' src="https://cdn.filestackcontent.com/WLOdNCOSjiXwqHvdG8Kw" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection1;