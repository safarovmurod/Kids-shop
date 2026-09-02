import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const payments = [
  { id: "card", name: "Картой онлайн" },
  { id: "cash", name: "Наличными курьеру" },
  { id: "paypal", name: "Онлайн-платежом PayPal" },
];

export default function PaymentMethod({ state, dispatch }) {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "12px",
          color: "#2B5674",
          fontSize: { xs: "17px", lg: "16px" },
          fontWeight: 600,
        }}
      >
        Способ оплаты
      </Typography>

      <RadioGroup
        value={state.payment}
        onChange={(e) =>
          dispatch({ type: "setPayment", payload: e.target.value })
        }
      >
        {payments.map((el) => (
          <FormControlLabel
            key={el.id}
            value={el.id}
            control={
              <Radio
                sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
              />
            }
            label={
              <Typography sx={{ color: "#446B80", fontSize: "14px" }}>
                {el.name}
              </Typography>
            }
          />
        ))}
      </RadioGroup>

      <Typography
        sx={{
          marginTop: "30px",
          marginBottom: "12px",
          color: "#2B5674",
          fontSize: { xs: "17px", lg: "16px" },
          fontWeight: 600,
        }}
      >
        Дополнительно
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Комментарий к заказу"
        value={state.comment}
        onChange={(e) =>
          dispatch({ type: "setComment", payload: e.target.value })
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            fontSize: "14px",
            color: "#446B80",
          },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={state.subscribe}
            onChange={(e) =>
              dispatch({ type: "setSubscribe", payload: e.target.checked })
            }
            sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
          />
        }
        label={
          <Typography sx={{ color: "#708090", fontSize: "13px" }}>
            Сообщать мне об акциях и скидках
          </Typography>
        }
        sx={{ marginTop: "10px" }}
      />
    </Box>
  );
}
