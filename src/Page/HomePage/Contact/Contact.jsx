import React from "react";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 items-center text-white mt-32 h-full ">
      <div className="bg-[#2d2a3c] h-96">
        <div className="w-8/12 flex flex-col justify-center   mx-auto">
          <h2 className=" mt-20 text-3xl font-semibold ">Get in touch</h2>
          <p className="mb-10">
            Contact with us for any query and support.
          </p>
          <p className="mb-10">tebesports@gmail.com</p>
        </div>
      </div>
      <div >
        <form className="card-body w-10/12 mx-auto">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered bg-transparent border border-white"
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered bg-transparent border border-white"
            />
          </div>
          <div className="form-control mt-9">
            <textarea className="bg-transparent border border-white p-4 " name="" id="" cols="10" rows="5" placeholder="Message"></textarea>
          </div>
          <div className=" mt-6">
            <button className=" bg-[#d31c3e] hover:bg-white font-semibold duration-300 px-12 py-3 text-white hover:text-black rounded rounded-ss-xl uppercase rounded-ee-xl">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
