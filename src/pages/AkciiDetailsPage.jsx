import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import AkciiInfo from "../components/akcii/AkciiInfo";

export default function AkciiDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAkciiDetails() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://swagger-wheat.vercel.app/api/akcii/${id}`,
        );
        setItem(res.data);
      } catch (error) {
        console.error("Ошибка при получении детали акции:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id && id !== "undefined") {
      getAkciiDetails();
    } else {
      setLoading(false);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress sx={{ color: "#7FC9F0" }} />
      </Box>
    );
  }

  return <AkciiInfo item={item || {}} blocks={item?.blocks || []} />;
}
