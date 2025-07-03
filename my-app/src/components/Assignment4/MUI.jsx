"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/assignment-3/question-3/pages/About" },
    { label: "Dashboard", path: "/assignment-3/question-5/dashboard" },
    { label: "Profile", path: "/assignment-3/question-5/dashboard/profile" },
    { label: "Settings", path: "/assignment-3/question-5/dashboard/settings" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <List>
          {navItems.map(({ label, path }) => (
            <ListItem button key={label} onClick={toggleDrawer}>
              {console.log(path)}

              <Link href={path}>
                <ListItemText primary={label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
