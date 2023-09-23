import React from 'react';
import { useContext,useState } from 'react';
import Navbar from './Navbar';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { Mycontext } from '../Context/Context';

export default function Loginform() {
  const {ulogin}=useContext(Mycontext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigat=useNavigate();
  const handlLogin = (a) => {
    a.preventDefault();

    const Email=a.target.fformControlLg.value;
    const Password=a.target.formControlLg.value;


    
const userDetails = ulogin.find((data)=> (data.password===password && data.email===email))

    console.log(ulogin);
    
    if(userDetails){
     alert("login succesfull");
      navigat('/');
      
    }
    else if
       ( Email=="adminlogin123@gmail.com" && Password==1100){
        navigat("/Adm");
    }
    else {
      alert("invalid user");
    }
     
  }

  return (
    <>
    <Navbar/>
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://i.pinimg.com/474x/dd/bc/fa/ddbcfa9286a78e092e91eaaf94640eb3.jpg' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              <form action=""onSubmit={handlLogin}>
                <MDBInput wrapperClass='mb-4' label='Email address' id='fformControlLg' type='email' size="lg"
                 required onChange={(a)=>{setEmail(a.target.value)}}
                />
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
               required onChange={(a)=>setPassword(a.target.value)}
                />

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' >Login</MDBBtn>
              </form>

              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}><Link to='/Register'>Register here</Link></a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </>
  );
  }
