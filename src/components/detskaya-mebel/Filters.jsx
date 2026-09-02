import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Chip,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import CheckboxList from "./CheckboxList";

export default function Filters({ state, dispatch, options }) {
  const chips = [
    ...state.brands,
    ...state.colors,
    ...state.materials,
    ...state.mayatnik,
    ...state.yashik,
  ];

  const brands = options.brands.filter((el) =>
    el.toLowerCase().includes(state.brandSearch.toLowerCase()),
  );

  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #E5EEF3",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          marginBottom: "8px",
          color: "#446B80",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Выбранные фильтры
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "16px",
          paddingBottom: "12px",
          borderBottom: "1px solid #E5EEF3",
        }}
      >
        {chips.length === 0 ? (
          <Typography sx={{ color: "#A9C4D2", fontSize: "12px" }}>
            Фильтры не выбраны
          </Typography>
        ) : (
          <>
            {chips.map((el) => (
              <Chip
                key={el}
                label={el}
                onDelete={() => dispatch({ type: "removeChip", payload: el })}
                sx={{ height: "26px", fontSize: "12px" }}
              />
            ))}

            <Typography
              onClick={() => dispatch({ type: "reset" })}
              sx={{
                width: "100%",
                marginTop: "6px",
                color: "#7FC9F0",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              Сбросить все
            </Typography>
          </>
        )}
      </Box>

      <Typography
        sx={{
          marginBottom: "8px",
          color: "#446B80",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Цена, ₽
      </Typography>

      <Box sx={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <TextField
          placeholder="от 8000"
          size="small"
          value={state.priceFrom}
          onChange={(e) =>
            dispatch({ type: "setPriceFrom", payload: e.target.value })
          }
          sx={{ "& input": { fontSize: "13px" } }}
        />

        <TextField
          placeholder="до 999900"
          size="small"
          value={state.priceTo}
          onChange={(e) =>
            dispatch({ type: "setPriceTo", payload: e.target.value })
          }
          sx={{ "& input": { fontSize: "13px" } }}
        />
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={state.onlyPromo}
            onChange={(e) =>
              dispatch({ type: "setPromo", payload: e.target.checked })
            }
            sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
          />
        }
        label={
          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>
            Только акции
          </Typography>
        }
        sx={{ marginBottom: "16px" }}
      />

      <Typography
        sx={{
          marginBottom: "8px",
          color: "#446B80",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Бренд
      </Typography>

      <TextField
        fullWidth
        placeholder="Поиск бренда"
        size="small"
        value={state.brandSearch}
        onChange={(e) =>
          dispatch({ type: "setBrandSearch", payload: e.target.value })
        }
        sx={{ marginBottom: "8px", "& input": { fontSize: "13px" } }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ fontSize: "18px", color: "#A9C4D2" }} />
              </InputAdornment>
            ),
          },
        }}
      />

      <CheckboxList
        title=""
        items={brands}
        selected={state.brands}
        onToggle={(el) => dispatch({ type: "toggleBrand", payload: el })}
      />

      <CheckboxList
        title="Цвет"
        items={options.colors}
        selected={state.colors}
        onToggle={(el) => dispatch({ type: "toggleColor", payload: el })}
      />

      <CheckboxList
        title="Материал"
        items={options.materials}
        selected={state.materials}
        onToggle={(el) => dispatch({ type: "toggleMaterial", payload: el })}
      />

      <CheckboxList
        title="Маятник"
        items={options.mayatnik}
        selected={state.mayatnik}
        onToggle={(el) => dispatch({ type: "toggleMayatnik", payload: el })}
      />

      <CheckboxList
        title="Ящик для белья"
        items={options.yashik}
        selected={state.yashik}
        onToggle={(el) => dispatch({ type: "toggleYashik", payload: el })}
      />
    </Box>
  );
}
