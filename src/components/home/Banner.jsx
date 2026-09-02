import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import banner from "../../assets/images/banner.png";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: { xs: "50px", lg: "70px" },
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "18px", lg: "20px" },
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: { xs: "16px", lg: "20px" },
          paddingRight: { xs: "16px", lg: "20px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "440px" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            sx={{
              color: "#446B80",
              fontSize: { xs: "30px", lg: "34px" },
              fontWeight: 400,
              lineHeight: { xs: "40px", lg: "46px" },
            }}
          >
            Все детские костюмы с акцией 10%
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", lg: "flex-end" },
            width: { xs: "100%", lg: "560px" },
            height: { xs: "300px", lg: "330px" },
          }}
        >
          <Box
            component="img"
            src={banner}
            alt="Детские костюмы"
            sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: { xs: "16px", lg: "20px" },
          paddingRight: { xs: "16px", lg: "20px" },
        }}
      >
        <Button
          onClick={() => navigate("/akcii")}
          sx={{
            width: { xs: "100%", lg: "148px" },
            height: { xs: "58px", lg: "32px" },
            marginTop: { xs: "20px", lg: "26px" },
            borderRadius: { xs: "12px", lg: "4px" },
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: { xs: "20px", lg: "10px" },
            textTransform: "none",
            "&:hover": { backgroundColor: "#68B7DE" },
          }}
        >
          Смотреть костюмы
        </Button>
      </Box>
    </Box>
  );
}
