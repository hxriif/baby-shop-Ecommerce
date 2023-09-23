import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/333-2023_08_02-MC_WebBanner_AW23_1920x650_28.07.23_30__Revised_100.jpg"
        alt="..."
      >
        {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/318-2023_08_28-MC_WebBanner_AW23_1920x650_28.07.23_With_Logo_copy_3_1.25x_100.jpg"
        alt="..."
      >
        {/* <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="        https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/333-2023_08_01-MC_WebBanner_AW23_1920x650_28.07.23_With_Logo_100.jpg
        "
        alt="..."
      >
        {/* <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
