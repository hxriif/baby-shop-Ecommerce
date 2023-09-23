import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Mycontext } from "../Context/Context";
import Navbar from "../component/Navbar";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function View() {
  const { id } = useParams();
  const { babypro, cart, addcart } = useContext(Mycontext);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  // Filter the product that matches the 'id' parameter
  const viewProduct = babypro.filter((product) => product.id === parseInt(id));
  // console.log(viewProduct)

  if (!viewProduct) {
    // Handle the product is not found
    return <h1 style={{ textAlign: "center" }}>Product not found</h1>;
  }

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

//   const total = viewProduct.price * count;

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    if (cart.includes(viewProduct[0])) {
      alert("Product is already added to the cart");
    } else {
      // Add the selected product to the cart
      addcart(()=>[...cart, ...viewProduct]);
      console.log(cart);
      alert("Product successfully added to the cart");
    }
    navigate("/cart")
  };

  const handleBuyNow = () => {
    navigate('/cart');
  };

  return (
    <>
    <Navbar/>

    <div className="container mt-5">
           {viewProduct.map((item) => (
            
      <MDBRow key={item.id}>
        <MDBCol md="6">
            <MDBCard>
            <MDBCardImage src={item.src
            } alt={viewProduct.name} />
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardText>{item.description}</MDBCardText>
              <MDBCardText>
                <strong>Price:</strong> ₹{item.price}
              </MDBCardText>
              <div className="d-flex align-items-center">
                <MDBBtn color="primary" className="me-2" onClick={decreaseCount}>
                  -
                </MDBBtn>
                <span className="me-2">{count}</span>
                <MDBBtn color="primary" onClick={increaseCount}>
                  +
                </MDBBtn>
              </div>
              <p className="mt-3">
                <strong>Total:</strong> ₹{item.price*count}
              </p>

              <MDBBtn className="mx-2" color="primary" onClick={handleAddToCart}>
                Add to Cart
              </MDBBtn>
              <MDBBtn color="success" onClick={handleBuyNow}>
                Buy Now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          
        </MDBCol>
      </MDBRow>
           ))}
    </div>
    </>
  );
}