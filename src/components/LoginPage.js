import React, { useState } from "react";
import { Button, TextField, Box, Typography, Card, CardContent } from "@mui/material";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      onLogin();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        background: "linear-gradient(to right, #7d58a6, #6d81a3)", 
        padding: { xs: "20px", sm: "30px", md: "40px" },
        color: "#fff",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          padding: { xs: "20px", sm: "30px" },
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            align="center"
            sx={{
              marginBottom: "20px",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Welcome Back!
          </Typography>
          <Typography
            align="center"
            sx={{
              marginBottom: "20px",
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
              color: "#e0e0e0",
            }}
          >
            Login to continue exploring new opportunities with our platform. Let's make your journey seamless!
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              sx={{
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#90caf9",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#90caf9",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              sx={{
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#90caf9",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#90caf9",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
              }}
            />
            {error && (
              <Typography
                color="error"
                align="center"
                sx={{
                  marginBottom: "10px",
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: "20px",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                backgroundColor: "#2575fc",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#6a11cb",
                },
              }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginPage;
