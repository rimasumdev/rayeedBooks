import HeroImage from "/img/HeroBook1.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-green-50 py-10">
      <div className="container mx-auto h-full flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center lg:flex-row-reverse text-center lg:text-left lg:gap-20 gap-10 lg:py-10">
          <img src={HeroImage} className="md:max-w-lg max-w-sm px-10" />
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="md:text-5xl lg:text-6xl text-3xl font-semibold ">
                Dive into a World of <br />{" "}
                <span className="bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text font-bold uppercase leading-snug">
                  Knowledge
                </span>
              </h1>
              <p className="text-gray-500">
                Explore a carefully curated selection of books across genres,
                perfect for every reader.
              </p>
            </div>
            <Link
              to="/book-lists"
              className="btn bg-gradient-to-r from-green-500 to-green-700 text-white"
            >
              View Book Lists
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
