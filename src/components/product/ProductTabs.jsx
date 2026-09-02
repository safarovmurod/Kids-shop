import { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ProductCharacteristics from "./ProductCharacteristics";
import ProductReviews from "./ProductReviews";

export default function ProductTabs({ item, reviews, onAddReview }) {
  const [tab, setTab] = useState(0);

  const description = (
    <Typography
      sx={{
        color: "#8FA6B3",
        fontSize: { xs: "16px", lg: "14px" },
        lineHeight: 1.7,
        whiteSpace: "pre-line",
      }}
    >
      {item.description}
    </Typography>
  );

  return (
    <Box sx={{ marginTop: { xs: "30px", lg: "50px" } }}>
      {/* Дар ПК — табҳо */}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Tabs
          value={tab}
          onChange={(e, value) => setTab(value)}
          sx={{
            borderBottom: "1px solid #F0F4F7",
            "& .MuiTab-root": {
              color: "#8FA6B3",
              fontSize: "15px",
              textTransform: "none",
            },
            "& .Mui-selected": { color: "#446B80" },
            "& .MuiTabs-indicator": { backgroundColor: "#7FC9F0" },
          }}
        >
          <Tab label="Описание" />
          <Tab label="Характеристики" />
          <Tab label="Отзывы" />
        </Tabs>

        <Box sx={{ paddingTop: "30px" }}>
          {tab === 0 && description}

          {tab === 1 && <ProductCharacteristics item={item} />}

          {tab === 2 && (
            <ProductReviews reviews={reviews} onAdd={onAddReview} />
          )}
        </Box>
      </Box>

      {/* Дар телефон — аккордеон */}
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <Accordion elevation={0} disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#446B80" }} />}
            sx={{ paddingLeft: 0 }}
          >
            <Typography sx={{ color: "#446B80", fontSize: "20px" }}>
              Описание
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ paddingLeft: 0 }}>
            {description}
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0} disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#446B80" }} />}
            sx={{ paddingLeft: 0 }}
          >
            <Typography sx={{ color: "#446B80", fontSize: "20px" }}>
              Характеристики
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ paddingLeft: 0 }}>
            <ProductCharacteristics item={item} />
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0} disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#446B80" }} />}
            sx={{ paddingLeft: 0 }}
          >
            <Typography sx={{ color: "#446B80", fontSize: "20px" }}>
              Отзывы
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ paddingLeft: 0 }}>
            <ProductReviews reviews={reviews} onAdd={onAddReview} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
