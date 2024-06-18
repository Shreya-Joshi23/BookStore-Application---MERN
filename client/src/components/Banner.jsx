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
            Welcome to BookStore, your ultimate destination for a wide variety of books that cater to every reader’s taste. Our mission is to create a heaven for book lovers where they can explore and discover amazing books, indulge in their passion for reading, and connect with a community that shares their love for literature.
            </p>
          </div>
        </div>

        <div className="right w-full mt-16 md:mt-32 md:w-1/2 space-y-12 order-1 md:order-2 flex justify-center items-center">
          <img src={books} className="h-96 w-96" alt="books" />
        </div>

      </div>
    </>
  );
};

export default Banner;
