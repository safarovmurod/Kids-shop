import { useContext } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { AppContext } from "../../context/AppContext";

export default function DeletedItems() {
  const { state, dispatch } = useContext(AppContext);

  // «Отменить» restore мекунад; крестик танҳо хабарро hideDeleted мекунад. Агар deleted холӣ бошад, блок намоён нест.
  if (state.deleted.length === 0) {
    return null;
  }

  return (
    <Box>
      {state.deleted.map((el) => (
        <Box
          key={el.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            paddingTop: "16px",
            paddingBottom: "16px",
            borderBottom: "1px solid #EAEAEA",
          }}
        >
          <Typography
            sx={{
              color: "#708090",
              fontSize: { xs: "13px", lg: "13px" },
              lineHeight: 1.5,
            }}
          >
            Вы удалили {el.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexShrink: 0,
            }}
          >
            <Typography
              onClick={() => dispatch({ type: "restore", payload: el })}
              sx={{
                color: "#7FC9F0",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Отменить
            </Typography>

            <IconButton
              onClick={() => dispatch({ type: "hideDeleted", payload: el.id })}
              sx={{ padding: 0, color: "#708090" }}
            >
              <CloseIcon sx={{ fontSize: "18px" }} />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
