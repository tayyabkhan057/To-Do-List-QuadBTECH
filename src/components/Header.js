import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Menu, Search, WbSunny, Nightlight } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import logo from "../assests/logo.png";

function Header({
  onToggleSidebar,
  onToggleRightbar,
  isDarkMode,
  onToggleTheme,
  onLogout,
}) {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onToggleSidebar}
        >
          <Menu />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "32px", marginRight: "10px" }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: { xs: "18px", sm: "23px" }, 
            fontWeight: "bold",
            color: "#4caf50",
          }}
        >
          DoIT
        </Typography>

        <Box
          sx={{
            alignItems: "center",
            marginRight: "20px",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Search sx={{ color: "inherit" }} />
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          onClick={onToggleRightbar}
          sx={{
            mr: 1,
          }}
        >
          <GridViewIcon />
        </IconButton>

        <IconButton
          color="inherit"
          onClick={onToggleTheme}
          sx={{
            display: { xs: "block", sm: "block" }, 
          }}
        >
          {isDarkMode ? <WbSunny /> : <Nightlight />}
        </IconButton>

        <Button
          variant="contained"
          color="secondary"
          onClick={onLogout}
          sx={{
            display: { xs: "block", sm: "block" }, 
            fontSize: { xs: "0.775rem", sm: "1rem" }, 
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
