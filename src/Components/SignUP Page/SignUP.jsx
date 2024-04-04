import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgCloseO } from "react-icons/cg";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

function SignUp() {
  const [signUpValue, setSignUpValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    const { name, email, password } = signUpValue;
    if (name === "" || email === "" || password === "") {
      toast.error("Please fill out all fields.");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    // API call to add user here
    console.log(signUpValue);
    toast.success("Successfully signed up!");
    setSignUpValue({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChangeSignUp = (e, field) => {
    setSignUpValue({ ...signUpValue, [field]: e.target.value });
  };

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-tr from-cyan-300 to-gray-600">
        <div className="text-right p-10 text-gray-100">
          <Link to="/">
            <button>
              <CgCloseO size={40} />
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full lg:w-4/12 h-full bg-transparent rounded-lg shadow-lg shadow-current">
            <div className="m-8 text-5xl text-blue-700 flex flex-col gap-5 items-center">
              <div>
                <h1 className="underline underline-offset-[20px] text-white">
                  Sign Up
                </h1>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 mt-16">
              <div className="w-11/12 h-14 bg-transparent border text-centern rounded-md flex items-center">
                <span className="text-2xl m-5 lg:m-6 text-gray-50">
                  <FaUserAlt />
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0 text-white placeholder:text-gray-50"
                  value={signUpValue.name}
                  onChange={(e) => handleChangeSignUp(e, "name")}
                />
              </div>

              <div className="w-11/12 h-14 bg-transparent border text-centern rounded-md flex items-center">
                <span className="text-2xl m-5 lg:m-6 text-gray-50 ">
                  <IoMail size={30} />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0 text-white placeholder:text-gray-50"
                  value={signUpValue.email}
                  onChange={(e) => handleChangeSignUp(e, "email")}
                />
              </div>

              <div className="w-11/12 h-14 bg-transparent border text-centern rounded-md flex items-center">
                <span className="text-2xl m-5 lg:m-6 text-gray-50">
                  <FaLock size={30} />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0  text-white placeholder:text-gray-50"
                  value={signUpValue.password}
                  onChange={(e) => handleChangeSignUp(e, "password")}
                />
              </div>
            </div>

            <center className="m-5">
              <button
                className="w-full h-14 bg-blue-600 p-2 rounded-3xl font-bold text-2xl text-white hover:bg-blue-700"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </center>

            <div>
              <Link to="/login">
                <button className="font-medium text-sm mb-5 mx-5 text-white">
                  Do you have an account? Log in here!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
