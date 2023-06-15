import React from 'react';
import './Gallery.css';
import 'aos/dist/aos.css';
const Gallery = () => {
     return (
          <div className=' container'>
               <h1 className='my-5 pt-lg-4 text-center'>Our Collection</h1>
               <div className="row my-4  no-gutter">
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-right"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://static.ajkerdeal.com/images/deals/703981610225934/1_dancing-cactus-singing-plush-children-toy.webp" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom" >
                         <img src="https://static.ajkerdeal.com/images/deals/140253001185504/1_fashion-childrens-mini-electronic-organ-plastic-kids-educational-toy-early-instrument-gift-musical.webp" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-left"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://static.ajkerdeal.com/images/deals/750092105132610/1_kids-bathtub-toy-cartoon-crab-creative-wind-up-toy-water-toy-bathing-toycartoon-crab-children-swimming-beach-bath-toyscute-crab-toydhaka-shopping-z.webp" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
               </div>
               <div className="row  no-gutter">
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-right"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://static.ajkerdeal.com/images/deals/750092105134137/1_dance-robot-musical-smart-electric-walking-dancing-robot-toys-with-music-light-gift-for-kidsdanceing-robotrobot-cardhaka-shopping-zone.webp" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom">
                         <img src="https://static.ajkerdeal.com/images/deals/703980810222201/1_1200x-biological-microscope-educational-toys-for-kids.webp" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-left"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://static.ajkerdeal.com/images/deals/443802404222723/1.jpg" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>

               </div>
          </div>
     );
};

export default Gallery;