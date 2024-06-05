import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import {Link} from "react-router-dom"
import axios from "axios";

const Course = () => {

  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook=async ()=>{
      try{
       const res=await axios.get("http://localhost:4000/book");
       console.log(res.data.data);
       setbook(res.data.data);
      //  console.log(book);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[]);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-[4.2rem] items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold mb-5 md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here :)</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi quia eum aperiam illum nam, minus commodi repellendus voluptate alias provident nisi corrupti ducimus numquam quasi quidem eligendi dolores sed exercitationem culpa? Deleniti, molestias ipsa veritatis, tempora minima facere eligendi odio molestiae praesentium magnam labore eaque quaerat velit saepe voluptatibus hic vero! Maxime veniam ducimus itaque aperiam error eos ipsa id incidunt, nihil doloremque voluptatem voluptate facere? Ex, nobis saepe! Cupiditate, sequi. Assumenda quia aspernatur quaerat, neque perspiciatis illo? Itaque ullam distinctio, dignissimos vel iusto iure nulla nisi nostrum perspiciatis placeat quo exercitationem hic ducimus asperiores sapiente id quod quia quasi voluptatum magnam pariatur harum dolor libero? Facilis, quidem atque. Dolore iure modi ipsam mollitia sint vero, cupiditate sunt veniam totam earum distinctio, corporis aliquid recusandae.</p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 mt-6 hover:bg-pink-700 rounded-md duration-300' >Back</button>
        </Link>
      </div>

      <div className='mt-12 text-center grid grid-cols-1 md:grid-cols-3 '>
        {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
      </div>
    </div>
  )
}

export default Course;
