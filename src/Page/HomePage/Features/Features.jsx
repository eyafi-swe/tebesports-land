import React, { useEffect, useState } from "react";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("Features.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
      });
  }, []);
  return (
    <div className="text-white mt-32 text-center w-10/12 mx-auto ">
      <div className="mb-16">
        <small className="uppercase text-center  bg-[#d31c3e] py-1 font-bold rounded-ss-lg rounded-ee-xl rounded px-4">
          FEATURES
        </small>
        <h2 className="font-semibold text-3xl py-5">Why Users Trust Us</h2>
        <p className="leading-10 text-lg">
          We are the strongest community and the most famous Guild of Free Fire. Lots of famous youtubers are active player of our Guild. We provide 100% security to your deposited cash and withdraw.
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:my-0 my-10">
        {features.map((feature) => (
          <div
            key={feature?.id}
            className="shadow-2xl duration-500  mx-2 py-20 px-10 text-center rounded-md hover:bg-[#2d2a3c]"
          >
            <div>
              <img
                className="bg-transparent mx-auto w-20 h-20 rounded-md"
                src={feature?.image}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold pt-8 mb-5">
                {feature?.title}
              </h2>
              <p className="text-lg mb-7">{feature?.subTitle}</p>
              <button class="relative text-center text-md group overflow-hidden uppercase ">
                view more
                <span class="absolute inset-x-0 bottom-0 h-1 bg-[#d31c3e] transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
