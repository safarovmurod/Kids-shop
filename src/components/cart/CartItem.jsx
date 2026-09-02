import { useContext } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  FavoriteBorder,
  Favorite,
  DeleteOutlined,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import { AppContext } from "../../context/AppContext";

export default function CartItem({ item }) {
  const { state, dispatch } = useContext(AppContext);

  const isFavorite = state.favorites.find((el) => el.id === item.id);

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "14px", lg: "20px" },
        paddingTop: "20px",
        paddingBottom: "20px",
        borderBottom: "1px solid #EAEAEA",
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: { xs: "90px", lg: "110px" },
          height: { xs: "90px", lg: "110px" },
          objectFit: "contain",
          flexShrink: 0,
        }}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: "#52A5E0",
              fontSize: { xs: "18px", lg: "20px" },
              fontWeight: 700,
            }}
          >
            {(item.price * item.count).toLocaleString("ru-RU")} ₽
          </Typography>

          <IconButton
            onClick={() =>
              dispatch({
                type: "favorite",
                payload: {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                },
              })
            }
            sx={{ padding: 0, color: "#7FC9F0" }}
          >
            {isFavorite ? (
              <Favorite sx={{ fontSize: "22px" }} />
            ) : (
              <FavoriteBorder sx={{ fontSize: "22px" }} />
            )}
          </IconButton>
        </Box>

        <Typography
          sx={{
            marginTop: "8px",
            color: "#708090",
            fontSize: { xs: "13px", lg: "13px" },
            lineHeight: "19px",
          }}
        >
          {item.name}
        </Typography>

        <Typography
          sx={{
            marginTop: "8px",
            color: "#52A5E0",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          В наличии
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "14px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "110px",
              height: "40px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "12px",
              border: "1px solid #B2CAD6",
            }}
          >
            <IconButton
              onClick={() => dispatch({ type: "decrement", payload: item.id })}
              sx={{ padding: 0, color: "#52A5E0" }}
            >
              <RemoveIcon sx={{ fontSize: "18px" }} />
            </IconButton>

            <Typography
              sx={{ color: "#2B5674", fontSize: "15px", fontWeight: 500 }}
            >
              {item.count}
            </Typography>

            <IconButton
              onClick={() => dispatch({ type: "increment", payload: item.id })}
              sx={{ padding: 0, color: "#52A5E0" }}
            >
              <AddIcon sx={{ fontSize: "18px" }} />
            </IconButton>
          </Box>

          <IconButton
            onClick={() => dispatch({ type: "remove", payload: item.id })}
            sx={{ padding: 0, color: "#B2CAD6" }}
          >
            <DeleteOutlined sx={{ fontSize: "24px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
