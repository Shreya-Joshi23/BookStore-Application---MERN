import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";


const SignUp = () => {

  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4000/user/register", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success(res.data.msg);
          navigate("/")
        }
        localStorage.setItem("Users", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.msg);
        }
      });
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center border dark:text-black">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>
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
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 mt-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <p>
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
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
