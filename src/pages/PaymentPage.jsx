import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  InputBase,
  Radio,
  FormControlLabel,
  Checkbox,
  Dialog,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NavLink, useNavigate } from "react-router";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 2000);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Хлебные крошки */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "28px",
          fontSize: "12px",
          color: "#8FA6B3",
        }}
      >
        <Box
          component={NavLink}
          to="/cart"
          sx={{
            color: "#8FA6B3",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Корзина
        </Box>
        <Typography sx={{ fontSize: "12px", color: "#8FA6B3" }}>›</Typography>
        <Box
          component={NavLink}
          to="/checkout"
          sx={{
            color: "#8FA6B3",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Оформление заказа
        </Box>
        <Typography sx={{ fontSize: "12px", color: "#8FA6B3" }}>›</Typography>
        <Typography sx={{ fontSize: "12px", color: "#446B80", fontWeight: 500 }}>
          Оплата
        </Typography>
      </Box>

      {/* Номер заказа */}
      <Typography sx={{ fontSize: "13px", color: "#8FA6B3", marginBottom: "8px" }}>
        Заказ №123214155AAS
      </Typography>

      {/* Итого к оплате */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "4px",
        }}
      >
        Итого к оплате
      </Typography>
      <Typography
        sx={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "28px",
        }}
      >
        456 000 ₽
      </Typography>

      {/* Выбор способа */}
      <FormControlLabel
        control={
          <Radio
            checked
            sx={{
              color: "#7FC9F0",
              "&.Mui-checked": { color: "#7FC9F0" },
              paddingLeft: 0,
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: "14px", color: "#446B80", fontWeight: 500 }}>
            Новая карта
          </Typography>
        }
        sx={{ marginBottom: "20px" }}
      />

      {/* Блок банковских карт и подсказок */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: "40px",
          marginBottom: "24px",
        }}
      >
        {/* Карты (Передняя и Задняя) */}
        <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
          {/* Лицевая сторона карты */}
          <Box
            sx={{
              width: "320px",
              height: "195px",
              backgroundColor: "#F2F0EB",
              borderRadius: "12px",
              border: "1px solid #E0DED8",
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 2,
              boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Верхний ряд: Заголовок и Логотип Mastercard */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "11px", color: "#708090" }}>
                Номер карты
              </Typography>

              {/* Логотип MasterCard */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "#EB001B",
                    opacity: 0.9,
                  }}
                />
                <Box
                  sx={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "#F79E1B",
                    marginLeft: "-8px",
                    opacity: 0.9,
                  }}
                />
              </Box>
            </Box>

            {/* Ввод номера карты */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #D0CECA",
                borderRadius: "4px",
                padding: "6px 10px",
              }}
            >
              <InputBase
                fullWidth
                placeholder="xxxx xxxx xxxx 7580"
                value={cardNumber}
                inputProps={{ maxLength: 19 }}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
                  const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
                  setCardNumber(formatted);
                }}
                sx={{ fontSize: "14px", color: "#446B80", letterSpacing: "1px" }}
              />
            </Box>

            {/* Нижний ряд: Срок действия */}
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
                  fontSize: "9px",
                  color: "#708090",
                  textAlign: "right",
                  lineHeight: 1.1,
                  fontWeight: 600,
                }}
              >
                СРОК
                <br />
                ДЕЙСТВИЯ
              </Typography>

              <Box
                sx={{
                  width: "70px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D0CECA",
                  borderRadius: "4px",
                  padding: "4px 6px",
                  textAlign: "center",
                }}
              >
                <InputBase
                  placeholder="мм/гг"
                  value={cardExpiry}
                  inputProps={{ maxLength: 5 }}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                    const formatted = digits.length > 2
                      ? digits.slice(0, 2) + "/" + digits.slice(2)
                      : digits;
                    setCardExpiry(formatted);
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "#446B80",
                    input: { textAlign: "center" },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Задняя сторона карты */}
          <Box
            sx={{
              width: "220px",
              height: "195px",
              backgroundColor: "#E8E6E0",
              borderRadius: "12px",
              border: "1px solid #D8D6D0",
              marginLeft: "-50px",
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* Магнитная полоса */}
            <Box
              sx={{
                width: "100%",
                height: "38px",
                backgroundColor: "#2B2B2B",
                marginTop: "24px",
              }}
            />

            {/* Блок CVC/CVV */}
            <Box
              sx={{
                marginTop: "20px",
                paddingRight: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#708090",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                CVC/CVV
              </Typography>

              <Box
                sx={{
                  width: "60px",
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #E5C26B",
                  borderRadius: "4px",
                  padding: "4px 6px",
                  textAlign: "center",
                }}
              >
                <InputBase
                  placeholder="•••"
                  type="password"
                  value={cardCvc}
                  inputProps={{ maxLength: 3 }}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 3);
                    setCardCvc(digits);
                  }}
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

        {/* Правый информационный блок */}
        <Box sx={{ maxWidth: "340px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#2B5674",
              marginBottom: "12px",
            }}
          >
            19:55 на оплату заказа
          </Typography>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <LockOutlinedIcon sx={{ fontSize: "16px", color: "#8FA6B3", mt: "2px" }} />
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#8FA6B3",
                  lineHeight: 1.4,
                  marginBottom: "6px",
                }}
              >
                Интернет-платежи защищены сертификатом TLS и протоколом 3D Secure.
              </Typography>
              <Typography
                sx={{ fontSize: "11px", color: "#8FA6B3", lineHeight: 1.4 }}
              >
                Яндекс не передаёт сторонним лицам платёжные данные, в том числе данные карты.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Чекбокс: Сохранить карту */}
      <Box sx={{ marginBottom: "24px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={saveCard}
              onChange={(e) => setSaveCard(e.target.checked)}
              sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" }, paddingLeft: 0 }}
            />
          }
          label={
            <Typography sx={{ fontSize: "13px", color: "#446B80" }}>
              Сохранить карту для будущих покупок
            </Typography>
          }
        />
      </Box>

      {/* Кнопка Оплатить */}
      <Button
        onClick={handlePay}
        variant="contained"
        disableElevation
        sx={{
          width: { xs: "100%", sm: "380px" },
          height: "46px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        Оплатить
      </Button>

      {/* Модальное окно загрузки и успеха */}
      <Dialog
        open={isProcessing}
        scroll="body"
        sx={{
          "& .MuiDialog-container": {
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        PaperProps={{
          sx: {
            padding: "48px 60px",
            borderRadius: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#FFFFFF",
            minWidth: "280px",
            boxShadow: "0px 20px 60px rgba(0,0,0,0.15)",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: 0,
          },
        }}
      >
        {!isSuccess ? (
          <>
            <CircularProgress sx={{ color: "#7FC9F0" }} size={64} thickness={4} />
            <Typography sx={{ color: "#2B5674", fontSize: "16px", fontWeight: 600 }}>
              Обработка платежа...
            </Typography>
          </>
        ) : (
          <>
            <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: "70px" }} />
            <Typography sx={{ color: "#2B5674", fontSize: "18px", fontWeight: 700 }}>
              Оплата прошла успешно!
            </Typography>
          </>
        )}
      </Dialog>
    </Box>
  );
}
