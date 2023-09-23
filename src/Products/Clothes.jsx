import React from 'react'
import { Mycontext } from '../Context/Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Navbar from '../component/Navbar'

const Clothes=()=> {
    const Navigate=useNavigate();
    const {babypro}=useContext(Mycontext);
    const filteredproducts=babypro.filter((p)=>p.type.toLowerCase()==='clothes');
  return (
    <>
    <Navbar/>
    <div>
      <header className='sticky-top'>
        
      </header>
      <br />
      <div className='container py-5'>
        <div className='row'>
          <div className='d-flex flex-wrap justify-content-center '>
            {filteredproducts.map((babypro) => (
              <Card
                key={babypro.id}
                style={{ width: '20%', marginBottom: '10px', marginRight: '10px' }}
                onClick={() => Navigate(`/viewp/${babypro.id}`)}
                className='card-container'
              >
                <Card.Img className='card-img-top' src={babypro.src} />
                <Card.Body style={{backgroundColor:'#708090'}}>
                  <Card.Title>{babypro.name}</Card.Title>
                  <Card.Text>₹{babypro.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Clothes