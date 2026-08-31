import { useReducer } from "react";
import { Box, Button, Typography } from "@mui/material";

// reducer — ҲАМА logic ин ҷо ҷамъ мешавад
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", py: "40px" }}>
      <Typography sx={{ fontSize: "32px", color: "white" }}>
        {state.count}
      </Typography>

      <Box sx={{ display: "flex", gap: "12px" }}>
        <Button onClick={() => dispatch({ type: "decrement" })} sx={{ textTransform: "none" }}>
          -
        </Button>
        <Button onClick={() => dispatch({ type: "reset" })} sx={{ textTransform: "none" }}>
          Reset
        </Button>
        <Button onClick={() => dispatch({ type: "increment" })} sx={{ textTransform: "none" }}>
          +
        </Button>
      </Box>
    </Box>
  );
}