import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import OfferCard from "./OfferCard";
import { apiAkcii } from "../../data/data";

export default function WideCard() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0);

  async function get() {
    try {
      const { data } = await axios.get(apiAkcii);
      const list = Array.isArray(data) ? data : data.data || [];
      setData(list.slice(0, 2));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1464px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "26px", lg: "60px" },
      }}
    >
      {/* Дар телефон танҳо як карточка нишон дода мешавад */}
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        {data.slice(active, active + 1).map((el) => (
          <OfferCard key={el.id} item={el} />
        ))}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            marginTop: "20px",
          }}
        >
          {data.map((el, index) => (
            <Box
              key={el.id}
              onClick={() => setActive(index)}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: active === index ? "#7FC9F0" : "#D9D9D9",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Дар ПК ҳар ду карточка */}
      <Box
        sx={{
          display: { xs: "none", lg: "grid" },
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {data.map((el) => (
          <OfferCard key={el.id} item={el} />
        ))}
      </Box>
    </Box>
  );
}
