import React from "react";
// import data
import { aboutData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { plateVariants, staggerContainer, fadeIn } from "../variants";
import { NavLink } from "react-router-dom";
import AboutImg from "../assets/img/about/newPlate.png";
const About = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className="min-h-[620px]">
      <div className="container mx-auto min-h-[620px]">
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            {/* <div className="pretitle">about us</div> */}
            <h2 className="h2 capitalize">about us</h2>
            <p className="mb-8 max-w-[560px]">
              Our restaurant is proud to offer a wide variety of delicious and
              convenient food options for our customers. From savory burgers to
              fresh salads, we have something to satisfy everyone's taste buds.
              All of our dishes are carefully prepared using only the freshest
              ingredients, ensuring that each meal is both flavorful and
              nutritious. Whether you're in a rush or simply looking for a quick
              and easy meal, our take-away service makes it easy to enjoy a
              delicious meal on-the-go. So why not stop by and try out our menu
              today? We promise you won't be disappointed!
            </p>
            <button className="btn capitalize mx-auto lg:mx-0">
              <NavLink to="/menu">View Full menu</NavLink>
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <img src={AboutImg} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
