import React from 'react';
import './Gallery.css';
import 'aos/dist/aos.css';
const Gallery = () => {
     return (
          <div className=' container'>
               <h1 className='my-5 pt-lg-4 text-center'>Our Collections</h1>
               <div className="row my-4  no-gutter">
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-right"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://cdn11.bigcommerce.com/s-ufhcuzfxw9/images/stencil/1280x1280/products/14680/14011/CE-KIT01__96780.1599845733.jpg?c=2" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom" >
                         <img src="https://www.learningresources.com/media/catalog/product/9/4/9463-stem-pixel-art-challenge_heo_sh-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-left"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://www.learningresources.com/media/catalog/product/3/7/3799_ww_boards_sh-2_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
               </div>
               <div className="row  no-gutter">
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-right"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://cdn.filestackcontent.com/WLOdNCOSjiXwqHvdG8Kw" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom">
                         <img src="https://cdn.filestackcontent.com/CEdX87Sr6MmO3q87l8Jg" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-left"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://cdn.filestackcontent.com/QUS9sfsxQaO475Lf8u7U" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>

               </div>
          </div>
     );
};

export default Gallery;