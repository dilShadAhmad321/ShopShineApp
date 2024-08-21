import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import Traditional from "../page/Traditional";
import Western from "../page/Western";
import Winter from "../page/Winter";
import Beauty from "../page/Beauty";
import Jewellry from "../page/Jewellry";
import PersonalAppliances from "../page/PersonalAppliances";
import InternationalBrand from "../page/InternationalBrand";
import Footwear from "../page/Footwear";
import Watches from "../page/Watches";
import Accessories from "../page/Accessories";
import Mens from "../page/Mens";
import Womens from "../page/Womens";
import Kids from "../page/Kids";
import Electronics from "../page/Electronics";
import Furniture from "../page/Furniture";
import Games from "../page/Games";
import Books from "../page/Books";
import Gifts from "../page/Gifts";
import Login from "../page/Login";
import Register from "../page/Register";
import Contact from "./Contact";


function Router() {
  return (
    <>
      
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>

          <Route exact path="Mens" element={<Mens />}></Route>
          <Route exact path="Womens" element={<Womens />}></Route>
          <Route exact path="Kids" element={<Kids />}></Route>
          <Route exact path="Electronics" element={<Electronics />}></Route>
          <Route exact path="Furniture" element={<Furniture />}></Route>
          <Route exact path="Games" element={<Games />}></Route>
          <Route exact path="Books" element={<Books />}></Route>
          <Route exact path="Gifts" element={<Gifts />}></Route>

          <Route exact path="Traditional" element={<Traditional />}></Route>
          <Route exact path="Western" element={<Western />}></Route>
          <Route exact path="Winter" element={<Winter />}></Route>
          <Route exact path="Beauty" element={<Beauty />}></Route>

          <Route exact path="Jewellry" element={<Jewellry />}></Route>
          <Route
            exact
            path="PersonalAppliances"
            element={<PersonalAppliances />}
          ></Route>
          <Route
            exact
            path="InternationalBrand"
            element={<InternationalBrand />}
          ></Route>
          <Route exact path="Footwear" element={<Footwear />}></Route>
          <Route exact path="Watches" element={<Watches />}></Route>
          <Route exact path="Accessories" element={<Accessories />}></Route>
          <Route exact path="Contact" element={<Contact/>}></Route>
        </Routes>
    </>
  );
}

export default Router
