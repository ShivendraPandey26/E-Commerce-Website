import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgCloseO } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

function Login() {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const { email, password } = loginValue;
    if (email === "" || password === "") {
      toast.error("Please fill out all fields");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be atleast 6 characters long");
      return;
    }
    // Perform login logic here (e.g., API call)
    console.log(loginValue);
    toast.success("Logged In Successfully");
    setLoginValue({
      email: "",
      password: "",
    });
  };

  const handleChangeLogin = (e, field) => {
    setLoginValue({ ...loginValue, [field]: e.target.value });
  };

  return (
    <>
      <div className="w-screen h-screen bg-slate-400">
        <div className="text-right p-10 text-white">
          <Link to="/">
            <button>
              <CgCloseO size={40} />
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full lg:w-4/12 h-auto bg-transparent rounded-lg shadow-md shadow-white">
            <div className="m-8 text-5xl text-blue-700 flex flex-col gap-5 items-center">
              <div>
                <h1 className="underline underline-offset-[20px] text-white">
                  Login
                </h1>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 mt-16">
              <div className="w-11/12 h-14 bg-transparent border text-centern rounded-md flex items-center">
                <span className="text-2xl m-5 lg:m-6 text-gray-50">
                  <IoMail size={30} />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0  text-white placeholder:text-gray-50"
                  value={loginValue.email}
                  onChange={(e) => handleChangeLogin(e, "email")}
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
                  value={loginValue.password}
                  onChange={(e) => handleChangeLogin(e, "password")}
                />
              </div>
            </div>

            <div className="m-5 mt-20">
              <button
                className="w-full h-14 bg-blue-600 p-2 rounded-3xl font-bold text-2xl text-white hover:bg-blue-700"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

            <div>
              <Link to="/signup">
                <button className="font-medium text-sm mb-5 mx-5 text-white">
                  Don't have an account? <span className="text-blue-500">Sign Up!</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
