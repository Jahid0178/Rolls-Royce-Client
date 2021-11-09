import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import MoreProducts from "./Pages/MoreProducts/MoreProducts";

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/moreProducts">
            <MoreProducts></MoreProducts>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
