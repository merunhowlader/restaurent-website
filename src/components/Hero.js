import React from "react";
// import data
import { heroData } from "../data";
// import components
import Header from "./Header";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn, staggerContainer } from "../variants";
import { Link } from "react-router-dom";

const Hero = () => {
  // destructure hero data
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className="min-h-[700px] lg:min-h-[980px] bg-hero bg-cover bg-right">
      {/* header */}

      <div className="container mx-auto min-h-[700px] lg:min-h-[980px] flex justify-center items-center">
        {/* text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center flex flex-col items-center"
        >
          {/* pretitle */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1"
          >
            The place of gourmet food
          </motion.div>
          {/* title */}
          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="h1 mb-5"
          >
            CherryChook
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="text-white max-w-[540px] mb-8"
          >
            CherryChook serving established recipe with love & care
          </motion.p>
          {/* button */}
          <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
            <Link
              onClick={() =>
                window.open(
                  "https://app.byto.com.au/venue-section/67445eff-7540-44aa-b5ec-f794f9cc7446",
                  "_blank"
                )
              }
              className="btn btn-primary"
            >
              Order Online
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
