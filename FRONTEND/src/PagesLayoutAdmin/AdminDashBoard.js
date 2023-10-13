import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom"
import Header from "../component/Header/Header.js";
import { CssBaseline, makeStyles, MenuItem } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PersonIcon from "@material-ui/icons/Person";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useStyles = makeStyles({
  appHeader: {
    paddingLeft: "320px",
    width: "100%",
  },
});
export default function AdminDashBoard() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.accessToken) {
        navigate("/");
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);
  const classes = useStyles();

  const menuItems = [
    {
      text: "Admin Dash Board",
      icon: <DashboardIcon color="#fff" />,
      path: "/Admin-DashBoard",
    },
    {
      text: "View Profile",
      icon: <AccountCircleIcon color="white" />,
      path: "Admin-Profile",
    },
    {
      text: "Manage Designation",
      icon: <AddCircleIcon color="white" />,
      path: "Admin-Designation-Table",
    },
    {
      text: "Manage HR",
      icon: <AddCircleIcon color="white" />,
      path: "Admin-HR-Table",
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
