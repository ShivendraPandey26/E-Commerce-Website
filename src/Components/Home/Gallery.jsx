import React from "react";

function Gallery() {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="w-full mb-10 text-center ">
            <h2 className="text-4xl font-semibold mb-10 text-[#31587c] font-serif text-center underline underline-offset-8">
              Gallery
            </h2>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.pinimg.com/originals/29/74/f9/2974f98a92a72b9afffa4e1275beef96.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="./src/assets/product-1.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 ">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://www.masala.com/wp-content/uploads/cloud/2023/09/11/376709334_18392326903004827_7163568537882060522_n-820x1024.jpg"
                  style={{ maxHeight: "500px", maxWidth: "600px", marginBottom: "-250px" }}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f73b8188-1f64-4a5e-b996-1f71d8e50ac0.__CR0,0,463,625_PT0_SX463_V1___.jpg"

                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://kiarabeautym.files.wordpress.com/2020/05/photo-1512496015851-a90fb38ba796.jpg?w=750"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
