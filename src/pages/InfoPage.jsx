import { Box, Typography, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router";
import hero from "../assets/images/hero.png";

const aboutItems = [
  {
    id: 1,
    title: "Для дома",
    text: "Кроватки, колыбели и мебель, с которыми проще обустроить детскую комнату.",
  },
  {
    id: 2,
    title: "Для прогулок",
    text: "Коляски, автокресла и одежда для маленьких путешествий вместе с ребёнком.",
  },
  {
    id: 3,
    title: "На каждый день",
    text: "Всё для кормления, купания, ухода и первых игр малыша.",
  },
];

const returnSteps = [
  {
    id: 1,
    title: "Свяжитесь с нами",
    text: "Напишите через страницу «Контакты». Укажите номер заказа, название товара и причину обращения.",
  },
  {
    id: 2,
    title: "Подготовьте информацию",
    text: "Сохраните подтверждение покупки. Если товар повреждён или отличается от заказа, приложите фотографии товара и упаковки.",
  },
  {
    id: 3,
    title: "Согласуйте передачу товара",
    text: "Менеджер уточнит детали и сообщит адрес и способ передачи. Перед отправкой дождитесь ответа по вашему обращению.",
  },
];

export default function InfoPage() {
  const { pathname } = useLocation();
  // Як component ду route дорад: /about матни About, route-и дигар матни Return-ро интихоб мекунад.
  const isAbout = pathname === "/about";
  const title = isAbout ? "О нас" : "Возврат";
  const items = isAbout ? aboutItems : returnSteps;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: { xs: "28px 16px 48px", lg: "36px 20px 80px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginBottom: "24px",
          fontSize: "13px",
          color: "#8FA6B3",
        }}
      >
        <Box component={NavLink} to="/">
          Главная
        </Box>
        <Box component="span">/</Box>
        <Box component="span">{title}</Box>
      </Box>
      <Typography
        component="h1"
        data-aos="fade"
        sx={{
          fontSize: { xs: "34px", lg: "42px" },
          fontWeight: 700,
          color: "#446B80",
          marginBottom: "28px",
        }}
      >
        {title}
      </Typography>
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "30px",
          padding: { xs: "24px", lg: "40px" },
          borderRadius: "16px",
          backgroundColor: isAbout ? "#FCF6F5" : "#EBF6FC",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "26px", lg: "34px" },
              lineHeight: { xs: "34px", lg: "44px" },
              color: "#446B80",
              marginBottom: "18px",
            }}
          >
            {isAbout
              ? "Карапуз — рядом с первых дней"
              : "Поможем разобраться с возвратом"}
          </Typography>
          <Typography
            sx={{ color: "#446B80", fontSize: "16px", lineHeight: "26px" }}
          >
            {isAbout
              ? "Карапуз — интернет-магазин товаров для детей. Мы собрали в одном каталоге вещи для сна, прогулок, кормления и игр, чтобы нужное для малыша было проще найти."
              : "Товар не подошёл или с заказом что-то не так? Расскажите нам о ситуации. Здесь собраны простые шаги, которые помогут подготовить обращение."}
          </Typography>
          <Button
            component={NavLink}
            to={isAbout ? "/catalog/detskaya-mebel" : "/contacts"}
            sx={{
              marginTop: "26px",
              padding: "10px 24px",
              borderRadius: "8px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            {isAbout ? "Перейти в каталог" : "Связаться с нами"}
          </Button>
        </Box>
        {isAbout && (
          <Box
            component="img"
            src={hero}
            alt="Мама и малыш"
            sx={{
              width: { xs: "100%", md: "340px" },
              maxHeight: "310px",
              objectFit: "contain",
            }}
          />
        )}
      </Box>
      <Typography
        component="h2"
        sx={{
          marginTop: "42px",
          marginBottom: "24px",
          color: "#446B80",
          fontSize: "28px",
        }}
      >
        {isAbout
          ? "Всё для маленьких открытий"
          : "Как обратиться по поводу возврата"}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: "20px",
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={(item.id - 1) * 100}
            sx={{
              padding: "26px",
              border: "1px solid #E5EEF3",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px",
                borderRadius: "50%",
                backgroundColor: "#EBF6FC",
                color: "#446B80",
              }}
            >
              {item.id}
            </Box>
            <Typography
              component="h3"
              sx={{ fontSize: "21px", color: "#446B80", marginBottom: "12px" }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ fontSize: "15px", lineHeight: "24px", color: "#8FA6B3" }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          marginTop: "28px",
          padding: "24px",
          borderRadius: "12px",
          backgroundColor: "#FCF6F5",
        }}
      >
        <Typography
          sx={{ color: "#446B80", fontSize: "16px", lineHeight: "26px" }}
        >
          {isAbout
            ? "Не знаете, с чего начать выбор? Посмотрите категории и характеристики товаров или задайте вопрос через страницу «Контакты»."
            : "Возможность возврата, сроки и порядок возврата денег зависят от товара и причины обращения. Уточните эти детали у менеджера до отправки товара."}
        </Typography>
      </Box>
    </Box>
  );
}
