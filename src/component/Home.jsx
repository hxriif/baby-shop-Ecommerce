import React, { useContext } from "react";
import Navbar from "./Navbar";
// import Productcategory from "../Products/Productcategory";

import { Allproduct } from "../Products/Allproduct";
import Carousel from "./Carousel";
import { Mycontext } from "../Context/Context";
import "./Home.css"
// import Navbar from "./Navbar";
function Home() {
  const { serchTerm } = useContext(Mycontext);
  return (
    <>
     <Navbar/>
    
      <div  style={{ backgroundColor: "black" }}>
        {!serchTerm ? (
          <>
           
          
            <Carousel />
            <Allproduct />
            <div className="ms-5">
  <img
    className="baby img-fluid"  // Added img-fluid class for responsiveness
    style={{maxHeight:'100vh',width:'100%' }}  // Changed height to maxHeight and set width to 100%
    src="https://media.istockphoto.com/id/450417281/photo/newborn-baby-lying-in-daddys-hand.jpg?s=612x612&w=0&k=20&c=jpmGM9_2sdobHN3LckoaqboCuE1t2qmrgPXd0-VySaw="
    alt=""
  />
</div>

            
          </>
        ) : (
          <>
            <Allproduct />
            
          </>
        )}
      
      {/* <Productcategory/> */}

      <div class="container">
  {/* <img
    decoding="async"
    class="img-fluid"
    alt=""
    loading="lazy"
    src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/333-2023_08_01-MC_WebBanner_AW23_1920x650_28.07.23_With_Logo_100.jpg"
  /> */}
</div>

            </div>

      
<       div style={{backgroundColor:'black	'}}>

        <h1 style={{color:'#2E8B57	',fontSize:'20px'}}>Bₐby ₚᵣₒdᵤcₜₛ ₒₙₗᵢₙₑ:</h1>
      <p style={{fontSize:'10px' ,color:'white'}}>
        Mothercare’s range of baby products are made specially to make your
        journey with your little one as joyful as can be. we understand that
        baby shopping online can be an overwhelming experience for all the new
        mothers and fathers looking for the best products for their bundles of
        joy. our website is designed keeping in mind all your needs, to help you
        find the best baby products!
      </p>
      <h1 style={{color:'#2E8B57	',fontSize:'20px'}}>Tₕₑ fₐᵥₒᵤᵣᵢₜₑ dₑₛₜᵢₙₐₜᵢₒₙ fₒᵣ Bₐby ₚᵣₒdᵤcₜₛ ₒₙₗᵢₙₑ:</h1>
      <p style={{fontSize:'10px', color:'white'}}>
        Mothercare has been a favourite destination of all moms and moms to be
        since years. holding your hand right from the beginning with the cosiest
        maternity clothing and postpartum care, all the way to making sure your
        tiny tot has the safest baby gear and is always rocking the latest baby
        clothing. Our best baby products make sure to unlock your little one’s
        full potential.
      </p>
      <h1 style={{color:'#2E8B57	',fontSize:'20px'}}>Pᵣₑₘᵢᵤₘ bₐby cₐᵣₑ ₚᵣₒdᵤcₜₛ fₒᵣ yₒᵤᵣ ₗᵢₜₜₗₑ ₐₙgₑₗ:</h1>
      <p style={{fontSize:'10px',color:'white'}}>
        We know how important these early years are for you. your baby’s care
        should be nothing short of excellent. so, we make sure to pack just the
        right amount of motherly love in our products.
      </p>
      <h1 style={{color:'#2E8B57	',fontSize:'20px'}}>Bₐby cₐᵣₑ:</h1>
      <p style={{fontSize:'10px',color:'white'}}>
        We at Mothercare want to ensure you have the best products to help you
        create that magical bond. our bathing products are sure to make your
        baby’s time in the water full of giggles with bubble baths and spa tubs.
        We select the safest and most reliable baby care products to keep you at
        ease. our line of skincare products, bath accessories, bottles, bibs,
        soothers and much more will cater to your baby’s every need. even our
        feeding and nursing products are super easy to use, so that you can
        focus on what is really important, your baby’s needs.
      </p>
      <h1 style={{color:'#2E8B57	',fontSize:'20px'}}>Bₐby fₐₛₕᵢₒₙ:</h1>
      <p style={{fontSize:'10px',color:'white'}}>
        Mothercare is home to all the baby essentials your tot needs, from cute
        bodysuits for daytime frolicking to comfortable nightwear for those lazy
        naps. from elegant baby blue rompers and t-shirts with vibrant stripes
        and prints to adorably frilly pink dresses for your little princess we
        have something suited to each little one’s unique personality. for those
        chilly days, our winterwear collection will keep your precious one’s
        little toes and fingers warm and happy. pair all of these up with cute
        and practical clothing accessories; mitts, hairbands, pom hats, shawls
        and much more.
      </p>
      <h1 style={{color:'#2E8B57	',fontSize:'20px'}}>Bₐby gₑₐᵣ:</h1>
      <p style={{fontSize:'10px',color:'white'}}>
        When you are all ready to take your little one on fun adventures, we
        have your back! From the sturdiest strollers to the most reliable car
        seats you can be rest assured that your baby is experiencing the world
        around in the safest way.
      </p>
      
      </div>
    </>
  );
}
export default Home;
