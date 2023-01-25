import HeroFood from "../../images/heroFood.webp";

const Hero = () => {
  return (
    <div className="container">
      <div className="max-h-[600px] relative">
        <div className="absolute w-full h-full text-grey  bg-black/40 flex flex-col justify-center">
          <h2 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h2>
          <h3 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods <span className="text-orange-500">Delivered</span>
          </h3>
        </div>
        <img
          src={HeroFood}
          alt="foods"
          className="w-full max-h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
