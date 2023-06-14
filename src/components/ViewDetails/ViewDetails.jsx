import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './ViewDetails.css';

const ViewDetails = () => {
     useTitle('Toy Details')
     const ViewData = useLoaderData();
     const { photoURL, name, displayName, email,
          category, description, price, rating, quantity } = ViewData;
          console.log(ViewData);
     return (
          <div className='mt-5 pt-5'>
               <h1 className=' text-center my-3 pb-3'>Toy Details</h1>
               <div className="card col-lg-5 mx-auto">
                    <img src={photoURL} className="card-img-top p-3 rounded viewImg" alt="..." />
                    <div className="card-body">
                         <h4 className="card-title"><b>{name}</b> </h4>
                         <h5 className="card-title"><b>Seller:</b> {displayName}</h5>
                         <h6><b>Email address:</b> {email}</h6>
                         <p><b>Category:</b> {category}</p>
                         <p className="card-text"><b>Description:</b> {description}</p>
                         <div className=' d-flex'>
                              <div>
                                   <p className="card-text"><small><b>Price: {price} Tk</b></small></p>
                              </div>
                              <div>
                                   <p className="card-text mx-4"><small><b>Rating: {rating}</b></small></p>
                              </div>
                              <div>
                                   <p className="card-text"><small><b>Quantity: {quantity}</b> </small></p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ViewDetails;