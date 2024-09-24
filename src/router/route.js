import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home"; 
import Constact from "../pages/constact";
import Header from "../comp/navbar";

import From from "../pages/From";
import MyForm from "../pages/Movie";
import Check3 from "../comp/series";

function AppRoute(props) {
  return (
    <Router {...props}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/navbar" element={<Header />} />
        <Route exact path="/constact" element={< Constact />} />
        <Route exact path="/From" element={< From />} />
        <Route exact path="From2" element={< MyForm/>}/>
        <Route exact path="From3"element={<Check3/>}/>


      </Routes>
      
    </Router>
  );

}
export default AppRoute;