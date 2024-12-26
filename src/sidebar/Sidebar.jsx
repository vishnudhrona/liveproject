import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const drawerWidth = 240;

const Sidebar = () => {
  const menuItems = [
    { text: "Products", icon: <InventoryIcon /> },
    { text: "Weather", icon: <WbSunnyIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
