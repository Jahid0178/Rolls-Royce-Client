import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import MoreProducts from "./Pages/MoreProducts/MoreProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AddNewProduct from "./Pages/Dashboard/AddNewProduct/AddNewProduct";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";
import Payment from "./Pages/Dashboard/Payment/Payment";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Review from "./Pages/Dashboard/Review/Review";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#555",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/moreProducts">
              <MoreProducts></MoreProducts>
            </PrivateRoute>
            <Route path="/addNewProduct">
              <AddNewProduct></AddNewProduct>
            </Route>
            <Route path="/purchaseProduct/:id">
              <PurchaseProduct></PurchaseProduct>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
