import { Box, Typography } from "@mui/material"
import Btn1 from "../components/button/Btn1"
// import { createContext, useState } from "react"
// export let Name = createContext("salom")






export default function Home() {
  // let [cnt,setCnt] = useState(0)
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "40px" }, py: "60px" }}>
        <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
          <Typography sx={{ color: "#FFFFFF", fontSize: "32px" }}>Home</Typography>
        </Box>
        <Btn1/>
      </Box>
  )
}
//  <Name.Provider value={{cnt}}>
{/* </Name.Provider> */}