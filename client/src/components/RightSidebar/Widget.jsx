import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";
import { useTheme } from "../../ThemeContext";
const Widget = () => {
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';

  return (
    <div className={`widget ${themeClass}`}>
      <h4 className={`${themeClass}`}>The Overflow Blog</h4>
      <div className={`right-sidebar-div-1 ${themeClass}`}>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <img src={pen} alt="pen" width="18" />
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <img src={pen} alt="pen" width="18" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4 className={`${themeClass}`}>Featured on Meta</h4>
      <div className={`right-sidebar-div-1 ${themeClass}`}>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <img src={comment} alt="pen" width="18" />
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <img src={comment} alt="pen" width="18" />
          <p>
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <img src={blackLogo} alt="pen" width="18" />
          <p>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>
      <h4 className={`${themeClass}`}>Hot Meta Posts</h4>
      <div className={`right-sidebar-div-1 ${themeClass}`}>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className={`right-sidebar-div-2 ${themeClass}`}>
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
