import React from "react";
import books from '../assets/books.jpg'

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  px-4 flex flex-col md:px-20 md:flex-row">
        <div className="left order-2 w-full md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to bookstore enjoy reading{" "}
              <span className="text-pink-500">amazing books</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              omnis assumenda quasi iure dignissimos a veritatis voluptates qui.
              Aliquid sed debitis ex sequi quibusdam temporibus ipsa repellat,
              harum sunt illo!
            </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow dark:text-black" placeholder="Email" />
          </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>

        <div className="right w-full mt-16 md:mt-32 md:w-1/2 space-y-12 order-1 md:order-2 flex justify-center items-center">
          <img src={books} className="h-96 w-96" alt="books" />
        </div>

      </div>
    </>
  );
};

export default Banner;
