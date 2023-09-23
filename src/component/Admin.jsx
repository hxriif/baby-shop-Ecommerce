import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { Mycontext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import Adminnav from "./Adminnav";
export default function Admin() {
  const { babypro,setbabypro } = useContext(Mycontext);
  const navigate = useNavigate();
  const removeItem = (itemId)=>{
    const updatedCart = babypro.filter((item) => item.id !== itemId);
    // console.log(updatedCart)
    setbabypro(updatedCart);
  };

  return (
    <>
    <Adminnav/>
    <MDBTable align="middle">
      <MDBTableHead>
      {/* <button style={{color:'white',backgroundColor:'blue'}}>Add items</button> */}
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Product</th>
          <th scope="col">Offerprice</th>
          <th scope="col">Remove</th>
          <th scope="col">Actions</th>
          {/* <th scope="col">users</th> */}
        </tr>
      </MDBTableHead>
      {babypro.map((pro, i) => (
        <MDBTableBody>
          <tr>
            <td>
              <p>{pro.id}</p>

              <div className="d-flex align-items-center">
                <img
                  src={pro.src}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{pro.name}</p>
                  {/* <p className='text-muted mb-0'>john.doe@gmail.com</p> */}
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">{pro.type}</p>
              <p className="text-muted mb-0">₹{pro.price2}</p>
            </td>
            <td>
              <MDBBadge color="success" pill >
              ₹{pro.price}
              </MDBBadge>
            </td>
            <td>
              {/* <MDBIcon icon="trash" />ᵀʳᵃˢʰ ⁱᵗ */}
              <MDBBtn onClick={()=>removeItem(pro.id)}><i class="fa fa-trash" aria-hidden="true"></i>
</MDBBtn>

            </td>
            <td>
              <MDBBtn
                color="link"
                rounded
                size="sm"
                onClick={() => navigate(`/Edt/${pro.id}`)}
              >
                Edit
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      ))}
    </MDBTable>
    </>
  );
}
