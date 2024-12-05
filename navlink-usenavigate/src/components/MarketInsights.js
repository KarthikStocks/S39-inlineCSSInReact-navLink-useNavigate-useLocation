import React from "react";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

function MarketInsights() {
  return (
    <div className="info">
      <TopNavigation />
      <h1>Market Insights</h1>
      <p>Get the latest stock market news and analysis!</p>
      <Footer></Footer>
    </div>
  );
}

export default MarketInsights;
