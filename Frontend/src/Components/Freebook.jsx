import React from 'react'

// slider for cards 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import list from "../../public/list.json"
import Cards from './Cards';
const Freebook = () => {
  //filter out the data with a category 
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-5'>
        <div>
          <h1 className='font-semibold text-xl'>
            <span className='text-orange-500 text-2xl '>Free books</span> Offered for You !!!
          </h1>
          <p className='pt-4'>Discover a world of knowledge and imagination with
            our exclusive free book offer! For a limited time,
            we're giving away captivating reads from a wide variety
            of genres, including fantasy, mystery, romance, self-help,
            and more.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id}/>
            )
            )}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook
