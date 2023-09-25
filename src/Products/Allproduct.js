import { useContext } from "react";
import { Mycontext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap'
// import Navbar from "../component/Navbar";




export const Allproduct=()=>{
    const {babypro,serchTerm} = useContext(Mycontext);
    const navigate=useNavigate();
    
return(
    <>
    {/* <Navbar/> */}
    
    {/* <h1 style={{textAlign:"center",color:"#000000	"}}>BABYPRODUCTS</h1> */}
      <section id="all" style={{backgroundColor:'black'}}>
        <div className="container py-5" >
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
            {babypro.filter((item)=> {
              return serchTerm.toLowerCase() === " " ? item : item.name.toLowerCase().includes(serchTerm);
            }).map((babypro, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100" style={{backgroundColor:'#DCDCDC	'}}>
                  <div className="d-flex justify-content-between p-3">
                    <div
                      id="animated-div"
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{
                        width: "80px",
                        height: "30px",
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                    >
                      {/* <p className="text-white mb-0 small">In Offer</p> */}
                    </div>
                  </div>
                  <img
                    src={babypro.src}
                    style={{ width: "200px", height: "150px" }}
                    className="card-img-top d-flex align-items-center justify-content-center"
                    alt={babypro.name}
                  />

                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <h2 style={{color:'	'}} className="small">{babypro.name}</h2>
                      <p style={{color:'red'}}>
                        <s >₹{babypro.price2}</s>
                      </p>
                    </div>

                    <div  className="mb-3">
                      <h5   className="text-dark mb-0" >₹{babypro.price}</h5>
                    </div>

                    <Button
                      variant="primary"
                      className="ms-1 card-container"
                      onClick={() => navigate(`/viewp/${babypro.id}`)}
                      type="submit"
                    >
                      Viewproduct
                       {/* <i className="fas fa-shopping-cart ms-1"></i> */}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

)
}