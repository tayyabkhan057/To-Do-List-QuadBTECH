import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  Typography,
  Divider,
  TextField,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  Notifications,
  CalendarToday,
  Loop,
  StarBorder,
  Close,
  DeleteOutline,
  CheckBoxOutlineBlank,
} from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { useTheme } from "@mui/material/styles";

function Rightbar({ open, onClose }) {
  const [activeCalendar, setActiveCalendar] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggleCalendar = (calendarType) => {
    setActiveCalendar((prev) => (prev === calendarType ? null : calendarType));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Drawer
        anchor="right"
        open={open}
        variant="persistent"
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: isMobile ? "380px" : "330px",
            height: "calc(100vh - 64px)",
            marginTop: "64px",
            backgroundColor: "background.default",
            color: "text.primary",
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        <Box>
          <List>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
            >
              <CheckBoxOutlineBlank />
              <Typography>Buy groceries</Typography>
              <StarBorder sx={{ marginLeft: "auto" }} />
            </ListItem>
            <Divider sx={{ borderColor: "#333" }} />

            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => handleToggleCalendar("reminder")}
            >
              <Notifications />
              <Typography>Set Reminder</Typography>
            </ListItem>
            {activeCalendar === "reminder" && (
              <Box>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "#1d1d1d",
                          color: "text.primary",
                        },
                        "& .MuiInputLabel-root": { color: "#aaa" },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#444",
                        },
                      }}
                    />
                  )}
                  sx={{
                    "& .MuiCalendarPicker-root": {
                      backgroundColor: "#1d1d1d",
                      color: "black",
                      borderRadius: "8px",
                    },
                    "& .MuiPickersDay-dayWithMargin": {
                      color: "text.primary",
                      "&:hover": {
                        backgroundColor: "#1e90ff",
                      },
                    },
                  }}
                />
              </Box>
            )}

            <Divider sx={{ borderColor: "#333" }} />

            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => handleToggleCalendar("dueDate")}
            >
              <CalendarToday />
              <Typography>Add Due Date</Typography>
            </ListItem>
            {activeCalendar === "dueDate" && (
              <Box>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "#1d1d1d",
                          color: "text.primary",
                        },
                        "& .MuiInputLabel-root": { color: "#aaa" },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#444",
                        },
                      }}
                    />
                  )}
                  sx={{
                    "& .MuiCalendarPicker-root": {
                      backgroundColor: "#1d1d1d",
                      color: "text.primary",
                      borderRadius: "8px",
                    },
                    "& .MuiPickersDay-dayWithMargin": {
                      color: "text.primary",
                      "&:hover": {
                        backgroundColor: "#1e90ff",
                      },
                    },
                  }}
                />
              </Box>
            )}

            <Divider sx={{ borderColor: "#333" }} />
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
            >
              <Loop />
              <Typography>Repeat</Typography>
            </ListItem>
            <Divider sx={{ borderColor: "#333" }} />
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
            >
              <StarBorder />
              <Typography>Buy</Typography>
            </ListItem>
          </List>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #333",
            }}
          >
            <IconButton sx={{ color: "text.primary" }}>
              <Close />
            </IconButton>
            <Typography sx={{ color: "text.primary", textAlign: "center" }}>
              Created Today
            </Typography>
            <IconButton sx={{ color: "text.primary" }}>
              <DeleteOutline />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </LocalizationProvider>
  );
}

export default Rightbar;
