import React from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <div>
      <div className="flex h-screen items-center justify-center border ">
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
                type="name"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 mt-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className=" text-sm text-red-600">
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
                type="message"
                placeholder="Enter your message"
                className="w-80 px-3 py-1 mt-2 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              <br />
              {/* {errors.message && (
                <span classname="text-sm text-red-600">
                  This field is required
                </span>
              )} */}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Message
              </button>
              {/* <p>
                Have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
