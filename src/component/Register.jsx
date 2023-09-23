// import React from 'react'
// import Navbar from './Navbar'

// function Register(){
//  return(
//   <>
  
//     <section class="vh-100" >
//   <div class="container h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-lg-12 col-xl-11">
//         <div class="card text-black" >
//           <div class="card-body p-md-5">
//             <div class="row justify-content-center">
//               <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

//                 <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//                 <form class="mx-1 mx-md-4">

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-user fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="text" id="form3Example1c" class="form-control" />
//                       <label class="form-label" for="form3Example1c">Your Name</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="email" id="form3Example3c" class="form-control" />
//                       <label class="form-label" for="form3Example3c">Your Email</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4c" class="form-control" />
//                       <label class="form-label" for="form3Example4c">Password</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-key fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4cd" class="form-control" />
//                       <label class="form-label" for="form3Example4cd">Repeat your password</label>
//                     </div>
//                   </div>

//                   <div class="form-check d-flex justify-content-center mb-5">
//                     <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                     <label class="form-check-label" for="form2Example3">
//                       I agree all statements in <a href="#!">Terms of service</a>
//                     </label>
//                   </div>

//                   <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                     <button type="button" class="btn btn-primary btn-lg">Register</button>
//                   </div>

//                 </form>

//               </div>
//               <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                   class="img-fluid" alt="Sample img"/>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </>
//  )

    
// }
// export default Register


import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
// import { Productcontext } from "../Context";
import { Mycontext } from "../Context/Context";

export default function Register() {
  const { ulogin,setUlogin} = useContext(Mycontext);
  const navigate = useNavigate();  
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const register = (e) => {
  
    e.preventDefault();
    setUlogin((use) => (use = [...ulogin,{name:name, email:email , password:password}]))
    console.log(setUlogin);
    alert("user Registration succesfully completed..... Plese login page")
    console.log(ulogin);


   
    navigate("/login");
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard
        className="mt-5"
        style={{ height: "500px", marginBottom: "8rem" }}
      >
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form action="" onSubmit={register}>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              id="form1"
              type="text"
              required
              onChange={(e) => {setName(e.target.value)}}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email" 
              required
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              required
              onChange={(e) => {setPassword(e.target.value)}}
              />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form4"
              type="password"
              required
              onChange={(e) => {setPassword(e.target.value)}}

            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>

            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
              Register
            </MDBBtn>
          </form>
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
