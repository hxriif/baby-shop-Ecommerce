import React, { useContext } from 'react';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Adminnav from './Adminnav';
import { Mycontext } from '../Context/Context';


export default function ViewUsers() {
    const navigate = useNavigate()
    const {userdetail,setuserdetail} = useContext(Mycontext)
    // console.log(list);
    const handlClick = (userId) => {
        navigate(`/more/${userId}`)

    }
  return (
    <>
    <Adminnav/>
    <MDBContainer>
    <MDBTable align='middle' className='mt-5'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Id</th>
          
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {userdetail.map((user) => (

            <tr key={user.id} onClick={()=> handlClick(user.id)}>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{user.username} </p>
                <p className='text-muted mb-0'> </p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{user.email} </p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              {user.id}
            </MDBBadge>
          </td>
         
         
        </tr>
        
            ))}
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
    </>
  );
}