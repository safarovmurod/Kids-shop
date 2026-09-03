import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            minHeight: "60vh",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Typography
            sx={{
              color: "#446B80",
              fontSize: { xs: "20px", lg: "22px" },
              textAlign: "center",
            }}
          >
            Что-то пошло не так
          </Typography>

          <Button
            onClick={() => window.location.reload()}
            sx={{
              width: { xs: "100%", lg: "220px" },
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "15px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Обновить страницу
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
