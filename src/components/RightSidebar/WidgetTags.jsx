import React from "react";
import { useTheme } from "../../ThemeContext";

const WidgetTags = () => {
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';

  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className={`widget-tags ${themeClass} `}>
      <h4 className={`${themeClass}`}>Watched tags</h4>
      <div className={`widget-tags-div ${themeClass}`}>
        {tags.map((tag) => (
          <p className={`${themeClass}`} key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
