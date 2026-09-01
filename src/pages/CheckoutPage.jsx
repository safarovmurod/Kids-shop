import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { NavLink } from "react-router";

export default function CheckoutPage() {
  const [deliveryType, setDeliveryType] = useState("tk");
  const [selectedTk, setSelectedTk] = useState("cdek");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [subscribe, setSubscribe] = useState(false);
  const [promo, setPromo] = useState("");

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
          marginBottom: "20px",
          fontSize: "12px",
          color: "#8FA6B3",
        }}
      >
        <Box
          component={NavLink}
          to="/cart"
          sx={{ color: "#8FA6B3", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
        >
          Корзина
        </Box>
        <Typography sx={{ fontSize: "12px", color: "#8FA6B3" }}>›</Typography>
        <Typography sx={{ fontSize: "12px", color: "#446B80", fontWeight: 500 }}>
          Оформление заказа
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#8FA6B3" }}>›</Typography>
        <Typography sx={{ fontSize: "12px", color: "#8FA6B3" }}>
          Оплата
        </Typography>
      </Box>

      {/* Заголовок */}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "36px",
        }}
      >
        Оформление заказа
      </Typography>

      <Grid container spacing={4}>
        {/* Левая колонка */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {/* 1. Состав заказа */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2B5674",
                  marginBottom: "16px",
                }}
              >
                Состав заказа
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  border: "1px solid #EAEAEA",
                  borderRadius: "8px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Box
                  component="img"
                  src="https://via.placeholder.com/80"
                  sx={{ width: "70px", height: "70px", objectFit: "contain" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#446B80",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      marginBottom: "6px",
                    }}
                  >
                    Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#8FA6B3" }}>
                    1 шт
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 2. Город получателя */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2B5674",
                  marginBottom: "12px",
                }}
              >
                Город получателя
              </Typography>

              <TextField
                fullWidth
                size="small"
                label="Населенный пункт"
                defaultValue="Москва"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: "#446B80",
                  },
                }}
              />
            </Box>

            {/* 3. Способ получения */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2B5674",
                  marginBottom: "14px",
                }}
              >
                Способ получения
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                  gap: "14px",
                }}
              >
                {/* Карточка 1: Транспортной компанией */}
                <Box
                  onClick={() => setDeliveryType("tk")}
                  sx={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: deliveryType === "tk" ? "1.5px solid #7FC9F0" : "1px solid #EAEAEA",
                    backgroundColor: "#FFFFFF",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "110px",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#2B5674", mb: "4px" }}>
                      Транспортной компанией
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#8FA6B3", lineHeight: 1.3 }}>
                      СДЭК, Деловые линии, Мега Транс, ТРАДО
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "11px", color: "#7FC9F0", fontWeight: 500, mt: "8px" }}>
                    Цена зависит от выбора ТК
                  </Typography>
                </Box>

                {/* Карточка 2: Почтой */}
                <Box
                  onClick={() => setDeliveryType("pochta")}
                  sx={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: deliveryType === "pochta" ? "1.5px solid #7FC9F0" : "1px solid #EAEAEA",
                    backgroundColor: "#FFFFFF",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "110px",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#2B5674", mb: "4px" }}>
                      Почтой
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#8FA6B3", lineHeight: 1.3 }}>
                      В ближайшее отделение Почты России
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "11px", color: "#7FC9F0", fontWeight: 500, mt: "8px" }}>
                    Бесплатно
                  </Typography>
                </Box>

                {/* Карточка 3: Самовывоз */}
                <Box
                  onClick={() => setDeliveryType("pickup")}
                  sx={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: deliveryType === "pickup" ? "1.5px solid #7FC9F0" : "1px solid #EAEAEA",
                    backgroundColor: "#FFFFFF",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "110px",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#2B5674", mb: "4px" }}>
                      Самовывоз
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#8FA6B3", lineHeight: 1.3 }}>
                      В пункте выдачи
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "11px", color: "#7FC9F0", fontWeight: 500, mt: "8px" }}>
                    Бесплатно
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 4. Выбор транспортной компании (если выбрана ТК) */}
            {deliveryType === "tk" && (
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#2B5674",
                    marginBottom: "14px",
                  }}
                >
                  Выбор транспортной компании
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
                  {["СДЭК", "Деловые линии", "Мега Транс", "ТРАДО"].map((tk) => (
                    <Button
                      key={tk}
                      onClick={() => setSelectedTk(tk)}
                      sx={{
                        height: "32px",
                        px: "16px",
                        borderRadius: "16px",
                        border: selectedTk === tk ? "1px solid #7FC9F0" : "1px solid #EAEAEA",
                        backgroundColor: selectedTk === tk ? "#F0F8FD" : "#FFFFFF",
                        color: selectedTk === tk ? "#7FC9F0" : "#446B80",
                        fontSize: "12px",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#F0F8FD" },
                      }}
                    >
                      {tk}
                    </Button>
                  ))}
                </Box>

                <Typography sx={{ fontSize: "13px", color: "#446B80", marginBottom: "6px" }}>
                  Стоимость доставки: <strong>120 ₽</strong>
                </Typography>

                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#7FC9F0",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginBottom: "4px",
                  }}
                >
                  Выбрать пункт выдачи заказа
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#7FC9F0" }}>
                  СДЭК, Ул. Набережная Р-12
                </Typography>
              </Box>
            )}

            {/* 5. Адрес получателя */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2B5674",
                  marginBottom: "14px",
                }}
              >
                Адрес получателя
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Box>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Фамилия и имя (по паспорту)*"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        fontSize: "13px",
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: "11px", color: "#8FA6B3", mt: "4px" }}>
                    Они могут потребоваться при получении заказа
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Электронная почта"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          fontSize: "13px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Телефон*"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          fontSize: "13px",
                        },
                      }}
                    />
                    <Typography sx={{ fontSize: "11px", color: "#8FA6B3", mt: "4px" }}>
                      На телефон отправляются оповещения о статусе заказа, код для его получения
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* 6. Способ оплаты */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2B5674",
                  marginBottom: "12px",
                }}
              >
                Способ оплаты
              </Typography>

              <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="card"
                  control={<Radio sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }} />}
                  label={<Typography sx={{ fontSize: "13px", color: "#446B80" }}>Карта онлайн</Typography>}
                />
                <FormControlLabel
                  value="cash"
                  control={<Radio sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }} />}
                  label={<Typography sx={{ fontSize: "13px", color: "#446B80" }}>Наличными курьеру</Typography>}
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }} />}
                  label={<Typography sx={{ fontSize: "13px", color: "#446B80" }}>Онлайн-платежом PayPal</Typography>}
                />
              </RadioGroup>
            </Box>

            {/* 7. Дополнительно */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2B5674",
                  marginBottom: "12px",
                }}
              >
                Дополнительно
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Комментарий к заказу"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontSize: "13px",
                  },
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "12px", color: "#708090" }}>
                    Сообщать мне об акциях и скидках
                  </Typography>
                }
                sx={{ mt: "10px" }}
              />
            </Box>

            {/* Кнопка Перейти к оплате */}
            <Box>
              <Button
                component={NavLink}
                to="/payment"
                fullWidth
                variant="contained"
                disableElevation
                sx={{
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
                Перейти к оплате
              </Button>

              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#8FA6B3",
                  textAlign: "center",
                  mt: "12px",
                  lineHeight: 1.4,
                }}
              >
                Нажимая кнопку «Перейти к оплате», Вы соглашаетесь с Пользовательским соглашением и Политикой конфиденциальности
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Правая колонка: Ваш заказ */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #EAEAEA",
              borderRadius: "16px",
              padding: "24px",
              backgroundColor: "#FFFFFF",
              position: "sticky",
              top: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#2B5674" }}>
                Ваш заказ
              </Typography>

              <Box
                component={NavLink}
                to="/cart"
                sx={{
                  fontSize: "13px",
                  color: "#7FC9F0",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Изменить
              </Box>
            </Box>

            {/* Промокод */}
            <Box sx={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
              <TextField
                placeholder="Промокод"
                size="small"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                sx={{
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontSize: "13px",
                  },
                }}
              />
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#7FC9F0",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "13px",
                  padding: "0 16px",
                  "&:hover": { backgroundColor: "#68B7DE" },
                }}
              >
                Применить
              </Button>
            </Box>

            {/* Строки расчёта */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#708090" }}>
                Количество (3)
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#708090", fontWeight: 500 }}>
                456 000 ₽
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#708090" }}>
                Доставка
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#708090", fontWeight: 500 }}>
                120 ₽
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#708090" }}>
                Скидка
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#708090", fontWeight: 500 }}>
                0 ₽
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #EAEAEA",
                paddingTop: "16px",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#2B5674" }}>
                Итого
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#2B5674" }}>
                456 120 ₽
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
