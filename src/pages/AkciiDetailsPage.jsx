import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import AkciiInfo from "../components/akcii/AkciiInfo";
import { apiAkcii } from "../data/data";

export default function AkciiDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  async function get() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${apiAkcii}/${id}`);
      setItem(data.data || data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
