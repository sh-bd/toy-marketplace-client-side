import React, { useContext } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SubAllToys = ({ data }) => {
     const { _id, displayName, photoURL, name, category, price, quantity } = data;
     const { user } = useContext(AuthContext)

     const handelToast = () => {
          (user?.email) || Swal.fire('You must login first!');
     }

     return (
          <tr>
               <td><img className='myImg' src={photoURL} alt={name} /></td>
               <td><span>{name}</span></td>
               <td scope="row"><span>{displayName}</span></td>
               <td><span>{category}</span></td>
               <td><span>{price} Tk</span></td>
               <td className='ms-5'><span>{quantity}</span></td>
               <td>
                    <Link onClick={handelToast} to={`/toy/${_id}`} className='text-decoration-none fs-2 text-danger'>
                         <BsFillArrowRightCircleFill />
                    </Link>
               </td>
          </tr>
     );
};

export default SubAllToys;