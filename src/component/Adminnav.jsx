import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Adminnav() {
  const [showNav, setShowNav] = useState(false);
  const navigate=useNavigate()

  return (
    <MDBNavbar expand='lg' light bgColor='black'>
      <MDBContainer fluid>
        <MDBNavbarBrand style={{color:"white"}}  href='#'>🅰🅳🅼🅸🅽</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            {/* <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>navigate('/Admh')}>
                
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink style={{color:"white"}}  onClick={()=>navigate('/Adm')}>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>

              <MDBNavbarLink style={{color:"white"}} onClick={()=>navigate('/Admp')} >AddProduct</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{color:"white"}}  onClick={()=>navigate('/user')}>users</MDBNavbarLink>
            </MDBNavbarItem>
            

            {/* <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>navigate('/login')}>Logout</MDBNavbarLink>
            </MDBNavbarItem> */}
           < MDBBtn className='ms-5' onClick={()=>navigate('/login')}>Logout</MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}