import React from 'react';
import Navbar from '../component/Navbar';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import './Product.css'


export default function Productcategory() {
  const Nav=useNavigate()
  return (
    <>
         <Navbar/>

    <h1 style={{textAlign:"center" ,color:"#000000	",backgroundColor:'#E0FFFF	'}}>Shop By Category</h1>
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
    <MDBCol>
      <MDBCard className='mx-auto w-50 my-3'   onClick={()=>Nav('/food')}>
        <MDBCardImage 
          src='https://m.media-amazon.com/images/I/614KLwnKJaL._AC_SL1500_.jpg'
          alt='...'
          position='top'
          height="250"
        />
        <MDBCardBody>
          <MDBCardTitle>BABY FOODS</MDBCardTitle>
          <MDBCardText>
            Here you can get all the babay food products
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard className='mx-auto w-50 my-3'  onClick={()=>Nav('/Toy')}>
        <MDBCardImage
          src='https://m.media-amazon.com/images/I/71jwx0Q31AL._AC_SL1500_.jpg'
          alt='...'
          position='top'
          height="250"
        
        />
        <MDBCardBody>
          <MDBCardTitle>BABY TOYS</MDBCardTitle>
          <MDBCardText>
          Here you can get all the babay Toys products
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard  className='mx-auto w-50 my-3' onClick={()=>Nav('/Clothe')}>
        <MDBCardImage
          src='https://m.media-amazon.com/images/I/81mG3i7CRqL._AC_UX679_.jpg'
          alt='...'
          position='top'
          height="250"
        />
        <MDBCardBody>
          <MDBCardTitle>BABY CLOTHES</MDBCardTitle>
          <MDBCardText>
          Here you can get all the babay Clothes
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard className='mx-auto w-50 my-3' onClick={()=>Nav('/care')}>
        <MDBCardImage
          src='https://m.media-amazon.com/images/I/81MJhRednWL._AC_SL1500_.jpg'
          alt='...'
          position='top'
          height="250"
        />
        <MDBCardBody>
          <MDBCardTitle>BABY CARE</MDBCardTitle>
          <MDBCardText>
          Here you can get all the baby care products
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  </>
  );
}

