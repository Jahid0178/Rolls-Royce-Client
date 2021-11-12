import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logOut, admin } = useAuth();
  const history = useHistory();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOut = () => {
    logOut();
    history.push("/");
  };

  const drawer = (
    <div style={{ position: "relative", height: "100vh" }}>
      <Toolbar />
      <Divider />
      {admin ? (
        <Box>
          <Link to="/addNewProduct" style={{ textDecoration: "none" }}>
            <Box sx={{ mt: 2, ml: 2 }}>
              <Button variant="contained">Add New Service</Button>
            </Box>
          </Link>
          <Link to="/makeAdmin" style={{ textDecoration: "none" }}>
            <Box sx={{ mt: 2, ml: 2 }}>
              <Button variant="contained">Make Admin</Button>
            </Box>
          </Link>
        </Box>
      ) : (
        ""
      )}
      <Link to={`${url}/myOrders`} style={{ textDecoration: "none" }}>
        <Box sx={{ mt: 2, ml: 2 }}>
          <Button variant="contained">My Orders</Button>
        </Box>
      </Link>
      <Link to={`${url}/payment`} style={{ textDecoration: "none" }}>
        <Box sx={{ mt: 2, ml: 2 }}>
          <Button variant="contained">Payment</Button>
        </Box>
      </Link>
      <Link to={`${url}/review`} style={{ textDecoration: "none" }}>
        <Box sx={{ mt: 2, ml: 2 }}>
          <Button variant="contained">Review</Button>
        </Box>
      </Link>
      <Link
        to="/"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "15px",
          textDecoration: "none",
        }}
      >
        <Button variant="contained">Back To Home</Button>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{user.displayName}</Typography>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          {user.email ? (
            <Button onClick={handleLogOut} variant="contained">
              Log Out
            </Button>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
