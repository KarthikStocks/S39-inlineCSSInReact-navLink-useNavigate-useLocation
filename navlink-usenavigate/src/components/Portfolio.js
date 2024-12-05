import React from "react";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

function Portfolio() {
  return (
    <div className="info">
      <TopNavigation />
      <h1>My Portfolio</h1>
      <p>Track your investments and holdings!</p>
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;
