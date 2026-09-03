import { Box, Typography, InputBase } from "@mui/material";

export default function PaymentCard({ state, dispatch }) {
  // Танҳо 16 рақамро қабул карда, ҳар 4 рақамро бо фосила ҷудо мекунад; ин танҳо формат аст.
  function handleNumber(e) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    dispatch({ type: "setNumber", payload: formatted });
  }

  // Танҳо 4 рақамро нигоҳ дошта, баъди ду рақам / мегузорад, мисол 1228 → 12/28.
  function handleExpiry(e) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);

    if (digits.length > 2) {
      dispatch({
        type: "setExpiry",
        payload: digits.slice(0, 2) + "/" + digits.slice(2),
      });
      return;
    }

    dispatch({ type: "setExpiry", payload: digits });
  }

  // Аз input танҳо 3 рақамро нигоҳ медорад; маълумот ба банк фиристода намешавад.
  function handleCvc(e) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 3);
    dispatch({ type: "setCvc", payload: digits });
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Тарафи пеши корт */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: { xs: "205px", md: "320px" },
          height: { xs: "135px", md: "195px" },
          padding: { xs: "12px", md: "18px 20px" },
          borderRadius: "12px",
          border: "1px solid #E0DED8",
          backgroundColor: "#F2F0EB",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#708090", fontSize: "10px" }}>
            Номер карты
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#EB001B",
              }}
            />

            <Box
              sx={{
                width: "16px",
                height: "16px",
                marginLeft: "-7px",
                borderRadius: "50%",
                backgroundColor: "#F79E1B",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #D0CECA",
            backgroundColor: "#FFFFFF",
          }}
        >
          <InputBase
            fullWidth
            placeholder="xxxx xxxx xxxx 7580"
            value={state.number}
            onChange={handleNumber}
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              color: "#446B80",
              letterSpacing: "1px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: "#708090",
              fontSize: "9px",
              fontWeight: 600,
              lineHeight: 1.1,
              textAlign: "right",
            }}
          >
            СРОК
            <br />
            ДЕЙСТВИЯ
          </Typography>

          <Box
            sx={{
              width: "70px",
              padding: "4px 6px",
              borderRadius: "4px",
              border: "1px solid #D0CECA",
              backgroundColor: "#FFFFFF",
            }}
          >
            <InputBase
              placeholder="мм/гг"
              value={state.expiry}
              onChange={handleExpiry}
              sx={{
                fontSize: "12px",
                color: "#446B80",
                input: { textAlign: "center" },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Тарафи пушти корт */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          width: { xs: "140px", md: "220px" },
          height: { xs: "135px", md: "195px" },
          marginLeft: { xs: "-36px", md: "-50px" },
          borderRadius: "12px",
          border: "1px solid #D8D6D0",
          backgroundColor: "#E8E6E0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "26px", md: "38px" },
            marginTop: { xs: "16px", md: "24px" },
            backgroundColor: "#2B2B2B",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginTop: { xs: "12px", md: "20px" },
            paddingRight: "16px",
          }}
        >
          <Typography
            sx={{
              marginBottom: "4px",
              color: "#708090",
              fontSize: "10px",
              fontWeight: 600,
            }}
          >
            CVC/CVV
          </Typography>

          <Box
            sx={{
              width: "60px",
              padding: "4px 6px",
              borderRadius: "4px",
              border: "1.5px solid #E5C26B",
              backgroundColor: "#FFFFFF",
            }}
          >
            <InputBase
              type="password"
              value={state.cvc}
              onChange={handleCvc}
              sx={{
                fontSize: "12px",
                color: "#446B80",
                input: { textAlign: "center" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
