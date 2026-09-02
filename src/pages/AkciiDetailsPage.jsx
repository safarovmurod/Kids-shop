import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Typography, CircularProgress } from "@mui/material";
import AkciiInfo from "../components/akcii/AkciiInfo";
import { getData } from "../api/api";

export default function AkciiDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  async function get() {
    setLoading(true);
    const answer = await getData("promotion", { id });
    setItem(answer.data);
    setLoading(false);
  }

  useEffect(() => {
    get();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress sx={{ color: "#7FC9F0" }} />
      </Box>
    );
  }

  if (!item) {
    return (
      <Typography
        sx={{
          paddingTop: "60px",
          paddingBottom: "60px",
          color: "#446B80",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        Акция не найдена
      </Typography>
    );
  }

  return <AkciiInfo item={item} />;
}
