import logo from './logo.svg';
import './App.css';
import {darkTheme} from "./theme/DarkTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {NavBar} from "./Component/navbar/NavBar";
import {Home} from "./Component/home/Home"
import {RestaurantDetails} from "./Component/restaurant/RestaurantDetails";
import Cart from "./Component/cart/Cart";
import Profile from "./Component/profile/Profile";
import CustomerRoute from "./routers/CustomerRoute";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        {/*}  <NavBar/>  */}
        {/*    <Home/>    */}
        {/*    <RestaurantDetails/>    */}
        {/*     <Cart/>    */}
        {/*    <Profile/>    */}
        <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
