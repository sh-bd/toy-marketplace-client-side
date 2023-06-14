import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import './TabCard.css';

const TabCard = ({ data }) => {
     const { _id, photoURL, name, price, rating } = data;
     const { user } = useContext(AuthContext)


     return (
          <div className='col-lg-4 mb-3'>
               <div className="card p-2">
                    <img src={photoURL} className="card-img-top tabImg" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title"><b>Name:</b> {name}</h5>
                         <div className=' d-flex justify-content-between'>
                              <p className="card-text"><b>Price:</b> {price} Tk</p>
                              <p className="card-text"><b>Rating:</b> {rating}</p>
                         </div>


                         <Link to={`/details/${_id}`}>
                              <button href="#"
                                   className="btn btn-primary">
                                   View Details
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default TabCard;