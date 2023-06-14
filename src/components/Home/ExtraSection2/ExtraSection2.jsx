import React from 'react';
import './ExtraSection2.css'

const ExtraSection2 = () => {
     return (
          <div className=' container'>
               <h1 className='my-5 text-center pt-lg-3'>Read more about our toys</h1>
               <div className="row">
                    <div className=" col-lg-6 mb-5">
                         <div className="row pe-lg-5">
                              <div className="shadow p-3 mb-lg-5 bg-white rounded col-lg-7">
                                   <p><b className="text-primary">World</b></p>
                                   <h2>Featured Post</h2>
                                   <p className="text-secondary">Nov 12</p>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta velit impedit, sequi officia eius incidunt aliquam. Necessitatibus, veniam in.</p>
                                   <p className="text-primary">Continue Reading......</p>

                              </div>
                              <div className="col-lg-5">
                                   <img className="img-fluid sec2Img w-100 rounded" src="https://img.freepik.com/free-photo/people-making-paper-flowers-craft-art-work-handicraft_53876-22956.jpg?w=996&t=st=1684488840~exp=1684489440~hmac=5ef222f04ae8097ff2a92331fba915b28b7eed06e02c0c3bcc412b1f8d8df3db" alt=""/>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-6">
                         <div className="row">
                              <div className="shadow p-3 mb-3 bg-white rounded col-lg-7 ">
                                   <p><b className="text-success">Design</b></p>
                                   <h2>More about Design</h2>
                                   <p className="text-secondary">Nov 11</p>
                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto voluptates iure quia eaque, sint rerum. Libero minus aspernatur ab rerum obcaecati molestias nulla consequatur.</p>
                                   <p className="text-primary">Continue Reading...</p>

                              </div>
                              <div className="col-lg-5">
                                   <img className="img-fluid sec2Img w-100 rounded" src="https://img.freepik.com/free-vector/flat-lay-arts-crafts-background_23-2149129572.jpg?w=996&t=st=1684488722~exp=1684489322~hmac=98e0e4ea36a6914f36b34fd22296cbb892930ad82d29c7f132e16243113e455e" alt=""/>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection2;