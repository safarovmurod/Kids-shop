import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  // 1: ввод email, 2: ввод кода + новый пароль, 3: успешно
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSubmitted, setIsCodeSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Шаг 1: Отправка email
  const handleSendEmail = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setStep(2);
    }
  };

  // Шаг 2: Ввод кода
  const handleVerifyCode = () => {
    if (code.trim()) {
      setIsCodeSubmitted(true);
    }
  };

  // Шаг 3: Сохранение нового пароля
  const handleSavePassword = (e) => {
    e.preventDefault();
    if (newPassword && confirmPassword) {
      setStep(3);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: "40px",
        pb: "80px",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          color: "#2B5674",
          marginBottom: "28px",
          letterSpacing: "-0.2px",
        }}
      >
        Восстановление пароля
      </Typography>

      <Box sx={{ maxWidth: "300px" }}>
        {/* ШАГ 1: Ввод Email */}
        {step === 1 && (
          <Box
            component="form"
            onSubmit={handleSendEmail}
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <TextField
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш электронный адрес"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  color: "#2B5674",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": { borderColor: "#E5EEF3", borderWidth: "1px" },
                  "&:hover fieldset": { borderColor: "#7FC9F0" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7FC9F0",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#A9C4D2",
                  opacity: 1,
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                height: "38px",
                width: "fit-content",
                px: "22px",
                borderRadius: "10px",
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                fontSize: "12px",
                textTransform: "none",
                fontWeight: 500,
                boxShadow: "none",
                "&:hover": { backgroundColor: "#68B7DE", boxShadow: "none" },
              }}
            >
              Восстановить пароль
            </Button>
          </Box>
        )}

        {/* ШАГ 2: Ввод кода и Замена Пароля */}
        {step === 2 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {!isCodeSubmitted ? (
              <>
                <Typography
                  sx={{ fontSize: "12px", color: "#52A5E0", lineHeight: 1.4 }}
                >
                  Сообщение отправлено на ваш email ({email}). Пожалуйста,
                  проверьте почту и введите код ниже:
                </Typography>

                <TextField
                  fullWidth
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Введите код из письма"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "40px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      color: "#2B5674",
                      backgroundColor: "#FFFFFF",
                      "& fieldset": {
                        borderColor: "#E5EEF3",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": { borderColor: "#7FC9F0" },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#A9C4D2",
                      opacity: 1,
                    },
                  }}
                />

                <Button
                  onClick={handleVerifyCode}
                  variant="contained"
                  disableElevation
                  sx={{
                    height: "38px",
                    width: "fit-content",
                    px: "22px",
                    borderRadius: "10px",
                    backgroundColor: "#7FC9F0",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": { backgroundColor: "#68B7DE" },
                  }}
                >
                  Подтвердить код
                </Button>
              </>
            ) : (
              /* Точно по сурати 2 */
              <Box
                component="form"
                onSubmit={handleSavePassword}
                sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <TextField
                  fullWidth
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Новый пароль"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "40px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      color: "#2B5674",
                      backgroundColor: "#FFFFFF",
                      "& fieldset": {
                        borderColor: "#E5EEF3",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": { borderColor: "#7FC9F0" },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7FC9F0",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#A9C4D2",
                      opacity: 1,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Повторите новый пароль"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "40px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      color: "#2B5674",
                      backgroundColor: "#FFFFFF",
                      "& fieldset": {
                        borderColor: "#E5EEF3",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": { borderColor: "#7FC9F0" },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7FC9F0",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#A9C4D2",
                      opacity: 1,
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    height: "38px",
                    width: "fit-content",
                    px: "22px",
                    borderRadius: "10px",
                    backgroundColor: "#7FC9F0",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    textTransform: "none",
                    fontWeight: 500,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#68B7DE",
                      boxShadow: "none",
                    },
                  }}
                >
                  Сохранить
                </Button>
              </Box>
            )}
          </Box>
        )}

        {/* ШАГ 3: Пароль успешно изменен */}
        {step === 3 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#2B5674",
              }}
            >
              Ваш пароль успешно изменен!
            </Typography>

            <Button
              onClick={() => navigate("/")}
              variant="contained"
              disableElevation
              sx={{
                height: "38px",
                width: "fit-content",
                px: "22px",
                borderRadius: "10px",
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                fontSize: "12px",
                textTransform: "none",
                fontWeight: 500,
                boxShadow: "none",
                "&:hover": { backgroundColor: "#68B7DE", boxShadow: "none" },
              }}
            >
              Перейти на главную
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
