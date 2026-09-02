import { useState } from "react";
import { Box, Button, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function SearchBar({ mobile }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/detskaya-mebel?search=${text}`);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  if (mobile) {
    return (
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          width: "100%",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            height: "48px",
            paddingLeft: "16px",
            paddingRight: "16px",
            borderRadius: "12px",
            backgroundColor: "#F4F4F4",
          }}
        >
          <Search
            onClick={handleSearch}
            sx={{ fontSize: "22px", color: "#446B80", cursor: "pointer" }}
          />

          <InputBase
            placeholder="Я хочу купить..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{ flexGrow: 1, fontSize: "15px", color: "#446B80" }}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        flexGrow: 1,
        height: "36px",
        paddingLeft: "12px",
        borderRadius: "18px",
        border: "1px solid #E5EEF3",
      }}
    >
      <Search sx={{ fontSize: "18px", color: "#A9C4D2" }} />

      <InputBase
        placeholder="Я хочу купить..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          flexGrow: 1,
          marginLeft: "8px",
          fontSize: "13px",
          color: "#446B80",
        }}
      />

      <Button
        onClick={handleSearch}
        sx={{
          height: "36px",
          paddingLeft: "22px",
          paddingRight: "22px",
          borderRadius: "18px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: "13px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        Найти
      </Button>
    </Box>
  );
}
