import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const SERVICE_ID = import.meta.env.VITE_REACT_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_TEMPLATE_ID;
  const API_KEY = import.meta.env.VITE_REACT_API_KEY;

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Shreya Joshi",
          from_email: data.email,
          to_email: "joshi2003shreya@gmail.com",
          message: data.message,
        },
        API_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          reset();
          navigate("/");
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center border">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Contact Us</h3>
            <div>
              <br />
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 mt-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <br />
              <br />
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 mt-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <br />
              <br />
              <span>Message</span>
              <br />
              <textarea
                placeholder="Enter your message"
                className="w-80 px-3 py-1 mt-2 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <br />
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                disabled={loading}
              >
                {loading ? "Sending..." : "Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
