import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from "axios"

const Sastibook = () => {

  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook=async ()=>{
      try{
       const res=await axios.get("http://localhost:4000/book");
       console.log(res.data.data);
       setbook(res.data.data);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[]);

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
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione ullam earum exercitationem repellat at voluptatem deleniti mollitia illo, tempora obcaecati, fuga quis totam ut quod dolores debitis voluptates voluptatibus?</p>
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
