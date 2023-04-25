import { useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType= darkMode ? "dark" : "light";
    const theme = createTheme({
      palette: {
        mode: paletteType,
        background: {
          default: paletteType==='light' ? "#eaeaea" : "#121212"
        }
      }
    }) 

    function handleThemeChanger () {
      setDarkMode(!darkMode);
    }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline/>
      <Header mode={darkMode} handleThemeChange={handleThemeChanger}/>
      <Container>
        <Outlet/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;



