import React, { useContext } from 'react';
import { Mycontext } from '../Context/Context';
import { useNavigate } from 'react-router';


const AddProduct = () => {
  const {babypro,setbabypro}=useContext(Mycontext)
 const handleInputChange = (product) => {
    product.preventDefault();
    const productname = product.target.name.value;
    // console.log(productname)
    const productimage = product.target.src.value;
    const productprice1 = product.target.price.value;
    const productprice2 = product.target.price2.value;
    const productdescription = product.target.description.value;
  
  setbabypro([...babypro,{ name:productname ,src:productimage,price:productprice1,price2:productprice2,description:productdescription,id:babypro.length}])
 product.target.reset()

  // console.log(pro);

 }  
 const nav=useNavigate()

  return (
    <>
    
    
    <div className="container" >
      <h1>Add Product</h1>
      <form onSubmit={handleInputChange}>

        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name"  required />
        </div>
      
        
        
    <br></br>


    
        <div className="mb-3">
          <label htmlFor="src" className="form-label">Image:</label>
          <input type="text" className="form-control" id="src"  required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="text" className="form-control" id="price"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="price2" className="form-label">Price 2:</label>
          <input type="text" className="form-control" id="price2"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description"   required />
        </div>
        <button  className="btn btn-primary" >Add Product</button>
        <br/>
        <br/>
        <button  className="btn btn-success"  onClick={()=>nav('/Adm')} >Back To All Product</button>
      </form>
    </div>
    </>
  );
};

export default AddProduct;