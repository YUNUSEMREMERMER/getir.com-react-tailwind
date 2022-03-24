import React,{ useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banners from  "api/banners.json"


function Campaigs() {
  
const[banners, setBanners] = useState([]);

useEffect(() => {
  setBanners(Banners);
},[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          
        }
      }
    ]

  };

  return (
    <div className='container mx-auto max-w-7xl py-8'>
      <h3 className='text-sm font-semibold mb-3'> Kampanyalar </h3>
      <Slider className='-mx-2' {...settings}>
          {
              banners.length && banners.map((banner) => (
                <div key={banner.id}>
                  <picture className='block px-2'>
                    <img src={banner.image} className="rounded-lg"/>
                  </picture>
                  
                </div>
              ))
          }
      </Slider>
    </div>
  )
}

export default Campaigs