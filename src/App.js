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
import { ContactUs } from "./modules/contactUs/ContactUs";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CoreStructure />}>
        <Route index element={<Home />} />

        <Route path="menu" element={<Manu />} />
        <Route path="catering-menu" element={<Manu />} />
        <Route path="catering-menu" element={<cateringManu />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
      <Route path="/admin" element={<CoreStructure />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
