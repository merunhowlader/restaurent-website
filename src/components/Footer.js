import React from "react";
// import components
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Socials from "./Socials";
// import data
import { footerData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn, staggerContainer } from "../variants";

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative  z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer bg-cover lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        {/* newsletter & info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="h-full flex flex-col gap-y-4"
        >
          {/* newsletter */}
          {/* <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}>
            <Newsletter />
          </motion.div> */}
          {/* info */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12"
          >
            {/* contact */}
            <div className="flex-1 lg:max-w-[170px]">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                Contact Location
              </div>
              <div className="capitalize">
                {" "}
                41-47, Shepherds Drive, Cherrybrook Village Shopping Centre.
                Cherrybrook. NSW-2126
              </div>
              <div className="capitalize">0430481146</div>
              <div className="capitalize">0433563413</div>
              <div className="">cherrybrook.gourmetfood@gmail.com</div>
            </div>
            {/* program */}
            <div className="flex-1">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {hours.title}
              </div>
              <div className="flex gap-x-[46px]">
                <div className="capitalize">
                  <div>
                    <div>Saturday - Sunday</div>
                    <div className="text-[20px] text-accent">
                      08:30 AM - 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* social */}
            <div className="flex-1 lg:max-w-[280px] mb-12">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
          {/* copyright */}
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
