import React, { useState } from "react";

// Material UI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Paper } from "@material-ui/core";
import MainPage from "./containers/MainPage";
import Header from "./containers/Header";
import Footer from "./components/Footer";

const App = () => {
  // Handle theme
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#C9E265",
      },
      secondary: {
        main: "#a8dadc",
      },
      text: {
        primary: "#737373",
      },
    },
    typography: {
      fontFamily: "'Raleway', sans-serif",
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#C9E265",
      },

      background: {
        paper: "#737373",
      },
    },
    typography: {
      fontFamily: "'Raleway', sans-serif",
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };
  const configTheme = { darkMode, handleThemeToggle };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper elevation={0}>
        <Header {...configTheme} />
        <MainPage />
        <Footer />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
