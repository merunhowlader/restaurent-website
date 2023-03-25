import React from "react";
// import components

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Manu } from "./modules/manu/Manu";
import { CoreStructure } from "./modules/core/CoreStructure";
import { Home } from "./modules/home/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CoreStructure />}>
        <Route index element={<Home />} />

        <Route path="manu" element={<Manu />} />
        <Route path="about" element={<Manu />} />
      </Route>
      <Route path="/admin" element={<CoreStructure />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>

    // <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
    //   <Hero />
    //   <About />
    //   <Menu />
    //   <Team />
    //   <Testimonial />
    //   <Reservation />
    //   <Footer />
    //   <div className='h-[380px] md:h-[370px]'></div>
    // </div>
  );
};

export default App;
