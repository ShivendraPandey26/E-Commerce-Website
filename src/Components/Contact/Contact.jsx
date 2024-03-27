import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
    console.log({ name, email, message });
  };

  const mapCenter = { lat: 40.7128, lng: -74.006 };
  const mapZoom = 10;

  return (
    <>
      <Layout>
        <div className="bg-[#eaf5f5]">
          <div className="container h-full w-screen mx-auto p-8 text-center">
            <h2 className="text-5xl font-semibold mb-10 text-[#31587c] font-serif">
              Contact
            </h2>
            <p className="text-lg text-[#32597d] font-sans mb-4 leading-relaxed md:w-[50%] w-[80%] mx-auto">
              We value your feedback! Feel free to reach out with any questions
              or comments you have. Your message matters to us, and we'll make
              sure to reply to you at our earliest convenience.
            </p>
          </div>

          {/* second part of the page */}
          <div className="flex flex-col lg:flex-row md:flex-row mx-auto items-center justify-around">
            <div className="md:w-[40%] w-[80%]">
              <h2 className="text-left text-lg font-bold text-orange-600 mb-32">
                GET IN TOUCH
              </h2>
              <h2 className="text-3xl font-semibold mb-10 text-[#31587c]">
                Reach out for assistance or inquiries— <br /> we're here to help
                and eager to hear from you
              </h2>

              <div className="w-32 my-5 border-b-2 border-[#b7d0ea]"></div>

              <div>
                <div className="flex items-center text-[#32597d]">
                  <span>
                    {" "}
                    <FaLocationDot className="mx-2 text-orange-600" />{" "}
                  </span>{" "}
                  Gudhiyari Raipur chhattisgarh india
                </div>
                <div className="flex items-center text-[#32597d]">
                  <span>
                    {" "}
                    <FaPhone className="mx-2 text-orange-600" />{" "}
                  </span>{" "}
                  +91 9438470310 / +91 9999999999
                </div>
                <div className="flex items-center text-[#32597d]">
                  <span>
                    {" "}
                    <IoIosMail className="mx-2 text-orange-600" />{" "}
                  </span>{" "}
                  Contact@info.com
                </div>
              </div>
            </div>

            {/* contact section */}
            <section id="contact" className="lg:w-[40%] md:w-[80%] sm:w-[100%] py-10">
              <div className=" text-center rounded-lg bg-white w-auto py-5">
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap m-10">
                      <div className="p-2 w-full">
                        <div className="relative text-left">
                          <label
                            htmlFor="name"
                            className="leading-7 text-base text-gray-700 font-medium font-sans"
                          >
                            Name*
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative text-left">
                          <label
                            htmlFor="email"
                            className="leading-7 text-base text-gray-700 font-medium font-sans"
                          >
                            Email*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative text-left">
                          <label
                            htmlFor="message"
                            className="leading-7 text-base text-gray-700 font-medium font-sans"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="text-white bg-orange-600 border-0 py-2 px-6 ms-3 focus:outline-none hover:bg-orange-700 rounded text-lg font-medium"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>

          {/* map section  */}

          <div className="flex items-center justify-center px-2 mt-16 rounded-xl">
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=gudhiyari%20raipur%20chhattisghar+(SnapShop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
