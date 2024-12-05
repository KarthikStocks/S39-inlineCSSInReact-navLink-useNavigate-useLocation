import React from "react";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Dashboard() {
  let loc = useLocation();

  return (
    <div className="info">
      <TopNavigation />
      <h1 style={{ padding: "2.3px" }}>Stock Market Dashboard</h1>
      <p style={{ padding: "5px" }}>
        Overview of market trends and stock performance!
      </p>
      {loc && loc.state && loc.state.pic ? (
        <img
          src={loc.state.pic}
          style={{
            width: "330px",
            display: "flex",
            padding: "10px",
          }}
        ></img>
      ) : null}

      {loc && loc.state && loc.state.para1 ? (
        <p style={{ display: "flex", padding: "8px" }}>{loc.state.para1}</p>
      ) : null}

      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
