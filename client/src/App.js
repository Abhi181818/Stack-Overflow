import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { ThemeProvider } from "./ThemeContext";
import { useTheme } from "./ThemeContext";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
    // 
  }, [dispatch]);
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';
  
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <ThemeProvider>
      <div className={`App ${themeClass}`}>
        <Router>
          <Navbar handleSlideIn={handleSlideIn} />
          <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
