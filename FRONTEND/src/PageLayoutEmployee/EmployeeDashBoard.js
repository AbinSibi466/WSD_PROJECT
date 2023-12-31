import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Header from "../component/Header/Header.js";
import { CssBaseline, makeStyles, MenuItem } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Outlet } from "react-router-dom";
const useStyles = makeStyles({
  appHeader: {
    paddingLeft: "320px",
    width: "100%",
  },
});
export default function EmployeeDashBoard() {
  const classes = useStyles();

  const menuItems = [
    {
      text: "Employee Dash Board",
      icon: <DashboardIcon color="#69F0AE" />,
      path: "/Employee-DashBoard",
    },
    {
      text: "View Profile",
      icon: <AccountCircleIcon color="#69F0AE" />,
      path: "Employee-Profile",
    },
    {
      text: "Apply Resignation",
      icon: <PersonAddIcon color="#69F0AE" />,
      path: "Apply-Resignation-Foam",
    },
    {
      text: "Apply Leave",
      icon: <AddCircleIcon color="#69F0AE" />,
      path: "Apply-Leave-Foam",
    },
  ];

  return (
    <>
      <Sidebar menuItems={menuItems} />
      <div className={classes.appHeader}>
        <Header />
        <Outlet />
      </div>
      <CssBaseline />
    </>
  );
}
