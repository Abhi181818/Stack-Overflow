import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import { useTheme } from "../../ThemeContext";
const Home = ({ slideIn }) => {
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';

  return (
    <div className={`home-container-1 ${themeClass}`}>
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
