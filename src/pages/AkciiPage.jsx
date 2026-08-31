import { Box } from "@mui/material"
import Akcii from "../components/akcii/Akcii"
import AkciiInfo from "../components/akcii/AkciiInfo"

export default function AkciiPage() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
      <Akcii items={[]} />

      <AkciiInfo item={{}} blocks={[]} />
    </Box>
  )
}
