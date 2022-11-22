import React from "react";
import SignupScreen from "pages/SignupScreen";
import Flow2Start from "pages/Flow2Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flow2Start />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signupscreen" element={<SignupScreen />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
