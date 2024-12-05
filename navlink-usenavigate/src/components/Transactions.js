import React from "react";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

function Transactions() {
  return (
    <div className="info">
      <TopNavigation />
      <h1>Transactions</h1>
      <p>Review your recent trades and transactions!</p>
      <Footer></Footer>
    </div>
  );
}

export default Transactions;
