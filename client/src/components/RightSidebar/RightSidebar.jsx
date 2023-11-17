import React from "react";
import "./RightSidebar.css";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
import { useTheme } from "../../ThemeContext";
const RightSidebar = () => {
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';
  return (
    <aside className={`right-sidebar  ${themeClass}`}>
      <Widget />
      <WidgetTags />
    </aside>
  );
};

export default RightSidebar;
