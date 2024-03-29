import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

function SignUp() {
  const [showAnswer, setShowAnswer] = useState("");
  const [signUpValue, setSignUpValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    const { name, email, password } = signUpValue;
    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields!");
      return;
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    // API call to add user here
    console.log(signUpValue);
    setShowAnswer("Successfully signed up!");
    setTimeout(() => setShowAnswer(""), 1000);
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
      {showAnswer === "" ? (
        <div className="w-screen h-screen bg-gradient-to-tr from-cyan-300 to-black">
          <div className="text-right p-10 text-white">
            <Link to="/">
              <button>
                <CgCloseO size={50} />
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full lg:w-4/12 h-full bg-white rounded-lg">
              <div className="m-8 text-5xl text-blue-700 flex flex-col gap-5 items-center">
                <div>
                  <h1 className="underline underline-offset-[20px]">Sign Up</h1>
                </div>
                <div className="under-line"></div>
              </div>

              <div className="flex flex-col items-center gap-8 mt-16">
                <div className="w-11/12 h-14 bg-gray-300 text-centern rounded-md flex items-center">
                  <span className="text-2xl m-5 lg:m-6 text-gray-400">
                    <FaUserAlt />
                  </span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0"
                    value={signUpValue.name}
                    onChange={(e) => handleChangeSignUp(e, "name")}
                  />
                </div>

                <div className="w-11/12 h-14 bg-gray-300 text-centern rounded-md flex items-center">
                  <span className="text-2xl m-5 lg:m-6 text-gray-400">
                    <IoMail size={30} />
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0"
                    value={signUpValue.email}
                    onChange={(e) => handleChangeSignUp(e, "email")}
                  />
                </div>

                <div className="w-11/12 h-14 bg-gray-300 text-centern rounded-md flex items-center">
                  <span className="text-2xl m-5 lg:m-6 text-gray-400">
                    <FaLock size={30} />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0"
                    value={signUpValue.password}
                    onChange={(e) => handleChangeSignUp(e, "password")}
                  />
                </div>
              </div>

              <div className="text-center m-8 flex justify-around">
                <button
                  className="w-36 h-16 bg-blue-600 p-2 rounded-3xl font-bold text-2xl text-white hover:bg-blue-700"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <Link to="/login">
                  <button className="w-36 h-16 bg-gray-300 p-2 rounded-3xl font-bold text-2xl text-black hover:bg-gray-400">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen bg-gradient-to-tr from-cyan-300 to-black text-white text-6xl flex items-center justify-center">
          {showAnswer}
        </div>
      )}
    </>
  );
}

export default SignUp;
