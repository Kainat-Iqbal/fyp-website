import * as React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  AccountCircle,
  AddCircle,
  Home,
  MenuOutlined,
  TableView,
  BorderColor,
  School,
  Insights,
  Grading,
  Notifications
} from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";

function SideBar() {
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div
        id="TopBar"
        style={{
          height: "9vh",
          width: "100vw",
          backgroundColor: "#00304B",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          position: "fixed" /* Fix the position */,
          top: "0" /* Position it at the top */,
          left: " 0" /* Position it at the left */,
          zIndex: "999",
        }}
      >
        <div
          id="topLeft"
          style={{
            width: "auto",
            height: "9vh",
            marginLeft: "2vw",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleToggleSidebar}
            style={{ border: "none", backgroundColor: "#00304B" }}
          >
            {<MenuOutlined style={{ fontSize: "2.2rem", color: "white" }} />}
          </button>

          <img
            src={require("./FYPLogo.png")}
            style={{
              width: "10vw",
              height: "17vh",
              marginTop: "2vh",
              marginLeft: "-2vw",
            }}
          />

          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              marginLeft: "-2vw",
              marginTop: "2vh",
            }}
          >
            Academic Accelerator
          </p>
        </div>

        <div id="topRight" style={{ width: "auto", marginRight: "2vw" }}>
          <Notifications
            style={{
              marginTop: "5px",
              fontSize: "2.6rem",
              color: "white",
              marginRight: "12px"
            }} />
          <AccountCircle
            style={{
              marginTop: "5px",
              fontSize: "2.8rem",
              color: "white",
            }}
          />
        </div>
      </div>
      <Sidebar
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#00304B",
          height: "91vh",
          marginTop: "9vh",
          position: "fixed" /* Fix the position */,
          top: "0" /* Position it at the top */,
          left: " 0" /* Position it at the left */,
          zIndex: "999",
        }}
        collapsed={collapsed}
      >
        <Menu>
          <MenuItem
            icon={<Home />}
            onClick={() => {
              nav("/teacher");
            }}
          >
            Home
          </MenuItem>


          <MenuItem icon={<School />}
            onClick={() => {
            nav("/courses");
          }}
          >
            View Courses</MenuItem>
            <MenuItem icon={<Grading />}>View Results</MenuItem>
          <MenuItem icon={<Insights />}>View Insights</MenuItem>
         
          <MenuItem icon={<Notifications />}>Notifications</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
export default SideBar;
