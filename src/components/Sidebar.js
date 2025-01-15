import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  Avatar,
  Typography,
  Divider,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import {
  ListAlt,
  Today,
  Star,
  Event,
  AssignmentInd,
  Add,
} from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";

function Sidebar({ open, tasks, onClose }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completedPercentage = (completedTasks / totalTasks) * 100 || 0;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      anchor="left"
      open={open}
      variant="persistent"
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: isMobile ? "380px" : "280px",
          height: "calc(100vh - 64px)",
          marginTop: "64px",
          backgroundColor: "background.default",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Box>
        <Box textAlign="center" p={2}>
          <Avatar sx={{ width: 80, height: 80, margin: "0 auto" }}>
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/4/4/efb5105b-9768-4eff-86bf-e7233731d031.jpg"
              width={100}
              height={100}
              alt="men"
            />
          </Avatar>
          <Typography mt={2}>Hey, Anand</Typography>
        </Box>

        <List
          sx={{
            backgroundColor: "background.paper",
            marginLeft: "10px",
            marginRight: "12px",
            marginBottom: "10px",
          }}
        >
          {[
            { text: "All Tasks", icon: <ListAlt /> },
            { text: "Today", icon: <Today /> },
            { text: "Important", icon: <Star /> },
            { text: "Planned", icon: <Event /> },
            { text: "Assigned to me", icon: <AssignmentInd /> },
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                color: index === 1 ? "#4caf50" : "inherit",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {item.icon}
              <Typography>{item.text}</Typography>
            </ListItem>
          ))}
        </List>

        <List
          sx={{
            backgroundColor: "background.paper",
            marginLeft: "10px",
            marginRight: "12px",
            marginBottom: "10px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <Add />
            <Typography>Add List</Typography>
          </ListItem>
        </List>

        <Divider />

        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="h6">Today Tasks</Typography>

          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={8}
              sx={{
                color: "#8bc34a",
              }}
            />
            <CircularProgress
              variant="determinate"
              value={completedPercentage}
              size={90}
              thickness={8}
              sx={{
                color: "#4caf50",
                position: "absolute",
                left: 0,
              }}
            />
          </Box>

          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#4caf50",
                }}
              />
              <Typography variant="caption">
                Completed: {completedTasks}
              </Typography>
            </Box>

            {/* Dot for pending */}
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#8bc34a", // Light green
                }}
              />
              <Typography variant="caption">
                Pending: {totalTasks - completedTasks}
              </Typography>
            </Box>
          </Box>
        </ListItem>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
