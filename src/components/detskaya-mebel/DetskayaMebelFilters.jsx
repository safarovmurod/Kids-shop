import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function DetskayaMebelFilters({
  subCategories,
  activeSub,
  setActiveSub,
  hasActiveFilters,
  selectedBrands,
  selectedColors,
  selectedMaterials,
  selectedMayatnik,
  selectedYashik,
  handleToggle,
  handleResetFilters,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  onlyPromo,
  setOnlyPromo,
  brandSearch,
  setBrandSearch,
  availableBrands,
  availableColors,
  availableMaterials,
  availableMayatnik,
  availableYashik,
}) {
  return (
    <Box
      sx={{
        width: { lg: "321px" },
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {subCategories.map((sub) => (
          <Typography
            key={sub.endpoint}
            onClick={() => setActiveSub(sub)}
            sx={{
              fontSize: "13px",
              cursor: "pointer",
              color:
                activeSub.endpoint === sub.endpoint ? "#7FC9F0" : "#446B80",
              fontWeight: activeSub.endpoint === sub.endpoint ? 600 : 400,
              "&:hover": { color: "#7FC9F0" },
            }}
          >
            {sub.name}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          p: "16px",
          border: "1px solid #E5EEF3",
          borderRadius: "12px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#446B80",
            mb: "8px",
          }}
        >
          Выбранные фильтры
        </Typography>

        {hasActiveFilters ? (
          <Box
            sx={{
              mb: "16px",
              pb: "12px",
              borderBottom: "1px solid #E5EEF3",
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {selectedBrands.map((b) => (
              <Chip
                key={b}
                label={b}
                onDelete={() =>
                  handleToggle(b, selectedBrands, setSelectedBrands)
                }
                sx={{ fontSize: "11px", height: "24px" }}
              />
            ))}
            {selectedColors.map((c) => (
              <Chip
                key={c}
                label={c}
                onDelete={() =>
                  handleToggle(c, selectedColors, setSelectedColors)
                }
                sx={{ fontSize: "11px", height: "24px" }}
              />
            ))}
            {selectedMaterials.map((m) => (
              <Chip
                key={m}
                label={m}
                onDelete={() =>
                  handleToggle(m, selectedMaterials, setSelectedMaterials)
                }
                sx={{ fontSize: "11px", height: "24px" }}
              />
            ))}
            {selectedMayatnik.map((m) => (
              <Chip
                key={m}
                label={m}
                onDelete={() =>
                  handleToggle(m, selectedMayatnik, setSelectedMayatnik)
                }
                sx={{ fontSize: "11px", height: "24px" }}
              />
            ))}
            {selectedYashik.map((y) => (
              <Chip
                key={y}
                label={y}
                onDelete={() =>
                  handleToggle(y, selectedYashik, setSelectedYashik)
                }
                sx={{ fontSize: "11px", height: "24px" }}
              />
            ))}
            <Box sx={{ width: "100%", mt: "4px" }}>
              <Typography
                onClick={handleResetFilters}
                sx={{ fontSize: "11px", color: "#7FC9F0", cursor: "pointer" }}
              >
                Сбросить все
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{ mb: "16px", pb: "12px", borderBottom: "1px solid #E5EEF3" }}
          >
            <Typography sx={{ fontSize: "11px", color: "#A9C4D2" }}>
              Фильтры не выбраны
            </Typography>
          </Box>
        )}

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#446B80",
            mb: "8px",
          }}
        >
          Цена, ₽
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", mb: "12px" }}>
          <TextField
            placeholder="от 8000"
            size="small"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            sx={{ "& input": { fontSize: "12px", p: "8px" } }}
          />
          <TextField
            placeholder="до 999900"
            size="small"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            sx={{ "& input": { fontSize: "12px", p: "8px" } }}
          />
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={onlyPromo}
              onChange={(e) => setOnlyPromo(e.target.checked)}
              sx={{ color: "#7FC9F0" }}
            />
          }
          label={
            <Typography sx={{ fontSize: "12px", color: "#446B80" }}>
              Только акции
            </Typography>
          }
          sx={{ mb: "16px" }}
        />

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#446B80",
            mb: "8px",
          }}
        >
          Бренд
        </Typography>
        <TextField
          placeholder="Поиск бренда"
          size="small"
          value={brandSearch}
          onChange={(e) => setBrandSearch(e.target.value)}
          sx={{
            mb: "8px",
            width: "100%",
            "& input": { fontSize: "12px", p: "6px" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: "16px", color: "#A9C4D2" }} />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            maxHeight: "130px",
            overflowY: "auto",
            mb: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {availableBrands
            .filter((b) => b.toLowerCase().includes(brandSearch.toLowerCase()))
            .map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedBrands.includes(brand)}
                    onChange={() =>
                      handleToggle(brand, selectedBrands, setSelectedBrands)
                    }
                    sx={{ color: "#7FC9F0" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "12px", color: "#446B80" }}>
                    {brand}
                  </Typography>
                }
              />
            ))}
        </Box>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#446B80",
            mb: "8px",
          }}
        >
          Цвет
        </Typography>
        <Box
          sx={{
            maxHeight: "120px",
            overflowY: "auto",
            mb: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {availableColors.map((color) => (
            <FormControlLabel
              key={color}
              control={
                <Checkbox
                  size="small"
                  checked={selectedColors.includes(color)}
                  onChange={() =>
                    handleToggle(color, selectedColors, setSelectedColors)
                  }
                  sx={{ color: "#7FC9F0" }}
                />
              }
              label={
                <Typography sx={{ fontSize: "12px", color: "#446B80" }}>
                  {color}
                </Typography>
              }
            />
          ))}
        </Box>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#446B80",
            mb: "8px",
          }}
        >
          Материал
        </Typography>
        <Box
          sx={{
            maxHeight: "120px",
            overflowY: "auto",
            mb: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {availableMaterials.map((mat) => (
            <FormControlLabel
              key={mat}
              control={
                <Checkbox
                  size="small"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() =>
                    handleToggle(mat, selectedMaterials, setSelectedMaterials)
                  }
                  sx={{ color: "#7FC9F0" }}
                />
              }
              label={
                <Typography sx={{ fontSize: "12px", color: "#446B80" }}>
                  {mat}
                </Typography>
              }
            />
          ))}
        </Box>

        {availableMayatnik.length > 0 && (
          <>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#446B80",
                mb: "8px",
              }}
            >
              Маятник
            </Typography>
            <Box sx={{ mb: "16px", display: "flex", flexDirection: "column" }}>
              {availableMayatnik.map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      size="small"
                      checked={selectedMayatnik.includes(item)}
                      onChange={() =>
                        handleToggle(
                          item,
                          selectedMayatnik,
                          setSelectedMayatnik,
                        )
                      }
                      sx={{ color: "#7FC9F0" }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px", color: "#446B80" }}>
                      {item}
                    </Typography>
                  }
                />
              ))}
            </Box>
          </>
        )}

        {availableYashik.length > 0 && (
          <>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#446B80",
                mb: "8px",
              }}
            >
              Ящик для белья
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {availableYashik.map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      size="small"
                      checked={selectedYashik.includes(item)}
                      onChange={() =>
                        handleToggle(item, selectedYashik, setSelectedYashik)
                      }
                      sx={{ color: "#7FC9F0" }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px", color: "#446B80" }}>
                      {item}
                    </Typography>
                  }
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
