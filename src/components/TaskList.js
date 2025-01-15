import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  Checkbox,
  IconButton,
  Typography,
  TextField,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { Add, Star, StarBorder, Delete } from "@mui/icons-material";

function TaskList({ tasks, setTasks, onLogout }) {
  const [newTask, setNewTask] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          text: newTask,
          completed: false,
          important: false,
        },
      ]);
      setNewTask("");
      showAlert("Task added successfully!", "success");
    } else {
      showAlert("Task cannot be empty!", "warning");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    showAlert("Task deleted successfully!", "info");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    const task = tasks.find((task) => task.id === id);
    showAlert(
      `${task.text} marked as ${task.completed ? "pending" : "completed"}!`,
      "info"
    );
  };

  const toggleTaskImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const showAlert = (message, severity) => {
    setAlert({ open: true, message, severity });
  };

  const closeAlert = () => {
    setAlert({ ...alert, open: false });
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <Box
      sx={{
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5">Your Tasks</Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          sx={{
            marginBottom: { xs: "10px", sm: 0 },
            marginRight: { sm: "10px" },
          }}
        />
        <Button
          onClick={handleAddTask}
          variant="contained"
          sx={{
            backgroundColor: "#4caf50",
            color: "#000",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Add />
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Pending Tasks
      </Typography>
      <List>
        {pendingTasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 1,
              mb: 1,
              borderRadius: 1,
              backgroundColor: "background.paper",
            }}
          >
            <Box display="flex" alignItems="center">
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <Typography
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </Typography>
            </Box>
            <Box>
              <IconButton
                sx={{ color: "#4caf50" }}
                onClick={() => toggleTaskImportant(task.id)}
              >
                {task.important ? <Star /> : <StarBorder />}
              </IconButton>
              <IconButton
                sx={{ color: "red" }}
                onClick={() => handleDeleteTask(task.id)}
              >
                <Delete />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" gutterBottom>
        Completed Tasks
      </Typography>
      <List>
        {completedTasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 1,
              mb: 1,
              borderRadius: 1,
              backgroundColor: "background.paper",
            }}
          >
            <Box display="flex" alignItems="center">
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <Typography
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </Typography>
            </Box>
            <Box>
              <IconButton
                sx={{ color: "#4caf50" }}
                onClick={() => toggleTaskImportant(task.id)}
              >
                {task.important ? <Star /> : <StarBorder />}
              </IconButton>
              <IconButton
                sx={{ color: "red" }}
                onClick={() => handleDeleteTask(task.id)}
              >
                <Delete />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={closeAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={closeAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default TaskList;
