import React from "react";

const HeadLineCards = () => {
  return (
    <div className="container py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="bg-black/50 absolute w-full h-full text-white rounded-xl">
          <p className="font-bold text-3xl px-4 pt-5">Sun's Out, BOGO's Out</p>
          <p className="px-4 text-2xl">Through 8/26</p>
          <button className="border-white bg-white text-black mx-4 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="bg-black/50 absolute w-full h-full text-white rounded-xl">
          <p className="font-bold text-3xl px-4 pt-5">New Restaurants</p>
          <p className="px-4 text-2xl">Added Daily</p>
          <button className="border-white bg-white text-black mx-4 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="bg-black/50 absolute w-full h-full text-white rounded-xl">
          <p className="font-bold text-3xl px-4 pt-5">
            We Deliver Desserts Too
          </p>
          <p className="px-4 text-2xl">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-4 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/2173774/pexels-photo-2173774.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
