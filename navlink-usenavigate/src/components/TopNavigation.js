import React from "react";
import { Link, NavLink } from "react-router-dom";

function TopNavigation() {
  return (
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/market-insights">Market Insights</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
      <NavLink to="/">Signout</NavLink>
    </nav>
  );
}

export default TopNavigation;
