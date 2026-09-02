import { useContext, useState } from "react";
import { Box, Typography, IconButton, Drawer, Avatar, Divider } from "@mui/material";
import {
  Close as CloseIcon,
  PersonOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";
import { menuLinks, userMenuLinks } from "../data/data";
import MobileCatalog from "./MobileCatalog";

export default function MobileMenu({ open, onClose }) {
  const { state, logout } = useContext(AppContext);
  const [openCatalog, setOpenCatalog] = useState(false);
  const navigate = useNavigate();

  const user = state.user;

  function handleClick(path) {
    onClose();
    navigate(path);
  }

  function handleCatalog() {
    onClose();
    setOpenCatalog(true);
  }

  function handleLogout() {
    logout();
    onClose();
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            sx: {
              width: "80%",
              maxWidth: "320px",
              paddingTop: "16px",
              paddingBottom: "24px",
              paddingLeft: "20px",
              paddingRight: "20px",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose} sx={{ padding: 0, color: "#446B80" }}>
            <CloseIcon sx={{ fontSize: "22px" }} />
          </IconButton>
        </Box>

        {user ? (
          <Box sx={{ marginTop: "16px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: "#EBF6FC",
                  color: "#7FC9F0",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {user.fullName ? user.fullName[0].toUpperCase() : "А"}
              </Avatar>

              <Box sx={{ overflow: "hidden" }}>
                <Typography
                  sx={{ color: "#2B5674", fontSize: "14px", fontWeight: 600 }}
                >
                  {user.fullName}
                </Typography>

                <Typography
                  sx={{
                    color: "#A9C4D2",
                    fontSize: "11px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {user.email}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "18px",
              }}
            >
              {userMenuLinks.map((el) => (
                <Typography
                  key={el.id}
                  onClick={() => handleClick(el.path)}
                  sx={{ color: "#446B80", fontSize: "14px", cursor: "pointer" }}
                >
                  {el.name}
                </Typography>
              ))}

              <Typography
                onClick={handleLogout}
                sx={{ color: "#446B80", fontSize: "14px", cursor: "pointer" }}
              >
                Выйти
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            onClick={() => handleClick("/register")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            <PersonOutlined sx={{ fontSize: "18px", color: "#7FC9F0" }} />

            <Typography sx={{ color: "#446B80", fontSize: "14px" }}>
              Войти в личный кабинет
            </Typography>
          </Box>
        )}

        <Divider sx={{ borderColor: "#F0F4F7", marginTop: "18px" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "18px",
          }}
        >
          <Typography
            onClick={handleCatalog}
            sx={{
              color: "#446B80",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Каталог товаров
          </Typography>

          {menuLinks.map((el) => (
            <Typography
              key={el.id}
              onClick={() => handleClick(el.path)}
              sx={{ color: "#446B80", fontSize: "14px", cursor: "pointer" }}
            >
              {el.name}
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "24px",
          }}
        >
          <LocationOnOutlined sx={{ fontSize: "16px", color: "#A9C4D2" }} />

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>
            Город:
          </Typography>

          <Typography sx={{ color: "#7FC9F0", fontSize: "13px" }}>
            Москва
          </Typography>
        </Box>
      </Drawer>

      <MobileCatalog
        open={openCatalog}
        onClose={() => setOpenCatalog(false)}
      />
    </>
  );
}
