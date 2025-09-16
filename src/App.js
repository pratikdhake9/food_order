import logo from './logo.svg';
import './App.css';
import {darkTheme} from "./theme/DarkTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./component/Navbar/NavBar";
import Home from "./component/Home/Home";
import RestaurantDetail from "./component/Restaurant/RestaurantDetail";
import Cart from "./component/Cart/Cart";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <NavBar/>
        {/* <Home/> */}
        {/*<RestaurantDetail/>*/}
        <Cart/>
    </ThemeProvider>
  );
}

export default App;
