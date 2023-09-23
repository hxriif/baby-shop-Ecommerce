import React, { useContext, useState } from "react";
import Navbar from "../component/Navbar";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Mycontext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Carts() {
  const { cart, addcart } = useContext(Mycontext);
  const [count, setCount] = useState(1);

  const navigat = useNavigate();

  const handleBackToShopping = () => {
    navigat("/");
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    addcart(updatedCart);
  };


  const increaseCount = (id) => {
    const updatedCart=cart.map((item)=>{
      if(item.id===id){
        return{...item,qty:item.qty+1};
      }
      return item;
    })
    addcart(updatedCart);
    console.log(updatedCart);

  };

  const decreaseCount = (id) => {
    const updatedCart=cart.map((item)=>{
      if(item.id === id && item.qty > 1){
        return{...item,qty:item.qty-1};
      }
      return item;
  });
  addcart(updatedCart);
}
  return (
    <>
         <Navbar/>

    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    {cart.map((item) => (
                      <div
                        className="d-flex align-items-center mb-5"
                        key={item.id}
                      >
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            src={item.src}
                            fluid
                            style={{ width: "150px" }}
                            alt={item.name}
                          />
                        </div>

                        <div className="flex-grow-1 ms-3">
                          <a
                            href="#!"
                            className="float-end text-black"
                            
                          >
                            <MDBIcon fas icon="times"  onClick={() => removeItem(item.id)}/>
                          </a>
                          <MDBTypography tag="h5" className="text-primary">
                            {item.name}
                          </MDBTypography>
                          <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                            {/* Color: {item.color} */}
                          </MDBTypography>

                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">
                            ₹{item.price}
                            </p>

                            <div className="def-number-input number-input safari_only">
                              <button
                                style={{ border: "1px" }}
                                className="minus mx-2 "
                                onClick={() => decreaseCount(item.id)}
                              >
                                {" "}
                                -
                              </button>
                              <span>{item.qty} </span>
                              <button
                                className="plus"
                                style={{ border: "1px" }}
                                onClick={() => increaseCount(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <MDBTypography tag="h5" className="fw-bold  mx-5">
                            Total:
                          </MDBTypography>
                          <MDBTypography
                            tag="h5"
                            style={{ width: "100px" }}
                            className="fw-bold mx-5 "
                          >
                            ₹{item.price * item.qty}
                          </MDBTypography>
                        </div>
                      </div>
                    ))}
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Card number"
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Cvv"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        
                        {/* <a href="#!"> obcaecati sapiente</a>. */}
                      </p>

                      <MDBBtn block size="lg">
                        Buy now
                      </MDBBtn>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a 
                        href="#!"           
                         onClick={handleBackToShopping}>
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to shopping
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </>
  );
                    }