import { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputBase,
  Paper,
  Typography,
  ClickAwayListener,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useLocation, useNavigate, NavLink } from "react-router";
import axios from "axios";
import { api } from "../data/data";

export default function SearchBar({ mobile }) {
  // text қимати input аст; products подсказкаҳо, loading/error ҳолати request-ро нигоҳ медоранд.
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);
  // Подсказка танҳо дар ҳамон pathname намоён аст, ки ҷустуҷӯ дар он оғоз шуд.
  const [openPath, setOpenPath] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const search = text.trim();

  // Баъди 200 ms истодани навиштан request мефиристад, то барои ҳар ҳарф request-и зиёдатӣ нашавад.
  useEffect(() => {
    if (!search) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        let matches = [];
        let page = 1;
        let hasNext = true;
        // API description-ро ҳам меҷӯяд; ин ҷо танҳо номи product қабул мешавад, то 6 подсказка ҷамъ шавад.
        while (matches.length < 6 && hasNext) {
          const { data } = await axios.get(api + "/products/search", {
            params: { search, page, pageSize: 200, light: true },
            signal: controller.signal,
          });
          matches = [
            ...matches,
            ...data.data.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase()),
            ),
          ];
          hasNext = data.hasNext;
          page = page + 1;
        }
        if (!controller.signal.aborted) setProducts(matches.slice(0, 6));
      } catch {
        if (!controller.signal.aborted)
          setError("Не удалось загрузить подсказки");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 200);
    return () => {
      // Ҳангоми нав шудани search таймер ва request-и пешина қатъ мешаванд, то натиҷаи кӯҳна state-ро иваз накунад.
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  // Матни навро сабт, натиҷаи кӯҳнаро тоза ва подсказкаро дар саҳифаи ҷорӣ мекушояд.
  function handleChange(event) {
    const value = event.target.value;
    setText(value);
    if (value.trim() !== search) {
      setProducts([]);
      setError("");
      setLoading(Boolean(value.trim()));
    }
    setOpenPath(pathname);
  }

  // Enter ё «Найти» ба каталоги бо query-и search мегузарад ва подсказкаро мепӯшонад.
  function handleSearch() {
    if (!search) return;
    setOpenPath(null);
    navigate("/catalog/detskaya-mebel?search=" + encodeURIComponent(search));
  }

  return (
    <ClickAwayListener onClickAway={() => setOpenPath(null)}>
      <Box
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setOpenPath(null);
        }}
        sx={{
          display: mobile
            ? { xs: "block", lg: "none" }
            : { xs: "none", lg: "block" },
          position: "relative",
          flexGrow: mobile ? 0 : 1,
          minWidth: "0px",
          width: mobile ? "100%" : "auto",
          paddingLeft: mobile ? "16px" : "0px",
          paddingRight: mobile ? "16px" : "0px",
          paddingBottom: mobile ? "14px" : "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: mobile ? "48px" : "36px",
            paddingLeft: "12px",
            borderRadius: mobile ? "12px" : "18px",
            border: "1px solid #E5EEF3",
            backgroundColor: mobile ? "#F4F4F4" : "#FFFFFF",
          }}
        >
          <Search sx={{ fontSize: "18px", color: "#A9C4D2" }} />
          <InputBase
            placeholder="Я хочу купить..."
            value={text}
            onChange={handleChange}
            onFocus={() => setOpenPath(pathname)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleSearch();
              if (event.key === "Escape") setOpenPath(null);
            }}
            inputProps={{ "aria-label": "Поиск товаров" }}
            sx={{
              flexGrow: 1,
              minWidth: "0px",
              marginLeft: "8px",
              fontSize: mobile ? "15px" : "13px",
              color: "#446B80",
            }}
          />
          <Button
            onClick={handleSearch}
            sx={{
              height: mobile ? "48px" : "36px",
              paddingLeft: mobile ? "12px" : "22px",
              paddingRight: mobile ? "12px" : "22px",
              borderRadius: mobile ? "12px" : "18px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "13px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Найти
          </Button>
        </Box>

        {openPath === pathname && search && (
          <Paper
            component="nav"
            aria-label="Подсказки товаров"
            elevation={0}
            sx={{
              position: "absolute",
              top: mobile ? "54px" : "42px",
              left: mobile ? "16px" : "0px",
              right: mobile ? "16px" : "0px",
              zIndex: 1100,
              borderRadius: "8px",
              border: "1px solid #E5EEF3",
              boxShadow: "0px 4px 16px #446B801A",
              backgroundColor: "#FFFFFF",
              maxHeight: "min(420px, 60vh)",
              overflowY: "auto",
            }}
          >
            {loading || error || products.length === 0 ? (
              <Typography
                role="status"
                sx={{ padding: "16px", color: "#446B80", fontSize: "13px" }}
              >
                {loading ? "Ищем товары..." : error || "Товары не найдены"}
              </Typography>
            ) : (
              products.map((item) => (
                <Button
                  key={item.id}
                  component={NavLink}
                  to={"/product/" + item.id}
                  onClick={() => setOpenPath(null)}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    gap: "12px",
                    padding: "10px 12px",
                    borderRadius: "0px",
                    textAlign: "left",
                    textTransform: "none",
                    color: "#446B80",
                    fontSize: "13px",
                    "&:hover": { backgroundColor: "#EBF6FC" },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt=""
                    sx={{
                      width: "48px",
                      height: "48px",
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />
                  {item.name}
                </Button>
              ))
            )}
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
}
