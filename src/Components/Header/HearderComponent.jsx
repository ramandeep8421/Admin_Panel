import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Notification from "./ActionTab/Notification";
import BlogPost from "../BodyComponent/BlogPost";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Profile from  "../BodyComponent/Profile";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("This is ramandeep");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    console.log("I am a developer");
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/blog' element={<BlogPost />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/notification'element={ <Notification />} />
        </Routes>
      </Box>
    </Fragment>
  );
}
