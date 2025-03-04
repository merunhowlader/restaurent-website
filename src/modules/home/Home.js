import React from "react";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Reservation from "../../components/Reservation";
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";

export const Home = () => {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[2400px]  mx-auto overflow-hidden">
      <Hero />
      <About />
      <Menu />
      {/* <Team /> */}
      <Testimonial />
      {/* <Reservation /> */}

      <div className="h-[380px] md:h-[370px]"></div>
    </div>
  );
};
