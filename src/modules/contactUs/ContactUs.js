import React, { useState } from "react";
// import data
import { reservationData } from "../../data";
// import datepicker
import DatePicker from "react-datepicker";
// import datepicker css
import "react-datepicker/dist/react-datepicker.css";
// import timepicker
import TimePicker from "react-time-picker";
// import timepicker css
import "../../timepicker.css";
// import icons
import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn, staggerContainer } from "../../variants";
import { useForm } from "react-hook-form";
import {
  AiFillPhone,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShop,
} from "react-icons/ai";

export const ContactUs = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  // date state
  const [startDate, setStartDate] = useState(new Date());
  // clock state
  const [value, setValue] = useState("10:00");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-pattern pt-30">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="text-center"
        >
          {/* title */}
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            className="h2 capitalize"
          >
            Enquiry
          </motion.h2>
          {/* subtitle */}

          {/* model */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex justify-center mb-8"
          >
            <img src={modelImg} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            class="max-w-screen-lg mx-auto p-5"
          >
            <div class="grid grid-cols-1  border">
              <div class="bg-gray-900 md:col-span-4 p-10 text-white">
                <p class="mt-4 text-sm leading-7 font-regular uppercase">
                  Contact
                </p>
                <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                  Get In <span class="text-indigo-600">Touch</span>
                </h3>

                <div class="flex items-center mt-5">
                  <span class="text-sm">
                    41-47, Shepherds Drive, Cherrybrook Village Shopping Centre.
                    Cherrybrook. NSW-2126
                  </span>
                </div>
                <div class="flex items-center space-x-2 mt-5">
                  <AiOutlineShop />
                  <span class="text-sm capitalize">Shop</span>
                </div>
                <div class="flex items-center space-x-2 mt-5">
                  <AiFillPhone />
                  <span class="text-sm">0294810238</span>
                </div>
                <div class="flex items-center space-x-2 mt-5">
                  <AiOutlineUser />
                  <span class="text-sm capitalize">Protul Dhar</span>
                </div>
                <div class="flex items-center space-x-2 mt-5">
                  <AiFillPhone />
                  <span class="text-sm">0430481146</span>
                </div>
                <div class="flex items-center space-x-2 mt-5">
                  <AiOutlineUser />
                  <span class="text-sm capitalize">Mostofa Yeasin</span>
                </div>
                <div class="flex items-center space-x-2 mt-5">
                  <AiFillPhone />
                  <span class="text-sm"> 0433563413</span>
                </div>

                {/* <div class="flex items-center space-x-2 mt-5"></div>

                <div class="flex items-center space-x-2 mt-5">
                  <AiFillPhone />
                  <span class="text-sm"> 0294810238</span>
                </div> */}
                <div class="flex items-center space-x-2 mt-5">
                  <AiOutlineMail />
                  <span class="text-sm">cherrybrook.gourmetfood@gmail.com</span>
                </div>
                <div class="flex items-center space-x-2 mt-5">
                  <AiOutlineMail />
                  <span class="text-sm">cherrychook@cherrybrook.com.au</span>
                </div>

                <div class="flex items-center mt-5">
                  <span class="text-sm">08:30 AM - 8:00 PM</span>
                </div>
              </div>
              {/* <form class="md:col-span-8 p-10">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="name"
                    >
                      Full Name
                    </label>
                    <input
                      class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                      type="text"
                      placeholder="jane Doe"
                      aria-label="name"
                    />
                    <p class="text-red-500 text-xs italic mt-1">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Phone number
                    </label>

                    <input
                      class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                      type="phone"
                      placeholder="98****99"
                      aria-label="Full name"
                    />
                  </div>
                  <p class="text-red-500 text-xs italic mt-1">
                    Please fill out this field.
                  </p>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                      type="email"
                      placeholder="jane@exp.com"
                      aria-label="Full name"
                    />
                  </div>
                  <p class="text-red-500 text-xs italic mt-1">
                    Please fill out this field.
                  </p>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="10"
                      class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
                      type="email"
                      placeholder="jane@exp.com"
                      aria-label="Full name"
                    ></textarea>
                  </div>
                  <div class="flex justify-between w-full px-3">
                    <button
                      class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form> */}
            </div>
          </motion.div>
        </motion.div>
        {/* form */}

        {/* t;his is new */}
      </div>
    </section>
  );
};
