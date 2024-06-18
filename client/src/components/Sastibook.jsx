import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import { ShopContext } from '../context/ShopContext';


const Sastibook = () => {

  const {book,isLoading}=useContext(ShopContext);

  if (isLoading) {
    return <p>Loading books...</p>; 
  }


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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

    const filterdata = book.filter((data)=>data.price==="free");
    console.log(filterdata);
   
     return (
       <div className='mt-12 max-w-screen-2xlcontainer mx-auto md:px-20 px-4'>
         <h1 className=' font-semibold text-xl pb-2'>Free Offered Books</h1>
         <p>At BookStore, we believe in the power of reading and its ability to transform lives. To help spread the joy of reading, we offer a selection of books for free. Explore our curated collection of timeless classics and beloved novels, available for you at no cost. Dive into these literary treasures and discover new worlds and perspectives.</p>
         <Slider {...settings}>
        {
          filterdata.map((item)=>{
            return <Cards item={item} key={item.id}/>
          })
        }
      </Slider>
       </div>
     );
};

export default Sastibook;
