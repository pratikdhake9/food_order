import logo from './logo.svg';
import './App.css';
import {darkTheme} from "./theme/DarkTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./component/Navbar/NavBar";
import Home from "./component/Home/Home";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <NavBar/>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
