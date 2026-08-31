import { Box, Stack, Typography } from "@mui/material"
import { NavLink } from "react-router"
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn } from "@mui/icons-material"

const navLinks = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Careers", path: "/careers" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Security", path: "/security" },
]

const contacts = [
  { id: 1, icon: Email, text: "hello@skillbirdge.com" },
  { id: 2, icon: Phone, text: "+91 91813 23 2309" },
  { id: 3, icon: LocationOn, text: "Somewhere in the World" },
]

const socials = [
  { id: 1, icon: Facebook, link: "#" },
  { id: 2, icon: Twitter, link: "#" },
  { id: 3, icon: LinkedIn, link: "#" },
]

const linkStyle = {
  textDecoration: "none",
  color: "#99999B",
  fontSize: "14px",
  whiteSpace: "nowrap",
  "&.active": { color: "#FFFFFF" },
}

const dividerStyle = { height: "1px", backgroundColor: "#2E2E2E", my: "28px" }

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: "16px", lg: "40px" },
        pt: "60px",
        pb: "40px",
        backgroundColor: "#1C1C1C",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Stack alignItems="center" gap="8px">
          <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 600 }}>
            YourBank
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          gap={{ xs: "20px", lg: "32px" }}
          sx={{ mt: "28px" }}
        >
          {navLinks.map((item) => (
            <Box
              key={item.id}
              component={NavLink}
              to={item.path}
              end={item.path === "/"}
              sx={linkStyle}
            >
              {item.label}
            </Box>
          ))}
        </Stack>

        <Box sx={dividerStyle} />

        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={{ xs: "16px", lg: "48px" }}
        >
          {contacts.map((item) => {
            const ContactIcon = item.icon
            return (
              <Stack key={item.id} direction="row" alignItems="center" gap="8px">
                <ContactIcon sx={{ fontSize: "18px", color: "#CAFF33" }} />
                <Typography component="a" href={item.id === 1 ? `mailto:${item.text}` : item.id === 2 ? `tel:${item.text.replace(/\s/g, "")}` : undefined} sx={{ color: "#FFFFFF", fontSize: "14px" }}>{item.text}</Typography>
              </Stack>
            )
          })}
        </Stack>

        <Box sx={dividerStyle} />

        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          sx={{
            p: { xs: "20px", lg: "12px 24px" },
            borderRadius: { xs: "24px", lg: "100px" },
            backgroundColor: "#191919",
          }}
        >
          <Stack direction="row" gap="12px">
            {socials.map((item) => {
              const SocialIcon = item.icon
              return (
                <Box
                  key={item.id}
                  component="a"
                  href={item.link}
                  aria-label="Social media"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#CAFF33",
                  }}
                >
                  <SocialIcon sx={{ fontSize: "20px", color: "#1C1C1C" }} />
                </Box>
              )
            })}
          </Stack>

          <Typography sx={{ color: "#99999B", fontSize: "14px" }}>
            YourBank All Rights Reserved
          </Typography>

          <Stack direction="row" alignItems="center" gap="12px">
            <Box component="a" href="#privacy" sx={{ color: "#99999B", fontSize: "14px", whiteSpace: "nowrap" }}>
              Privacy Policy
            </Box>
            <Box sx={{ width: "1px", height: "14px", backgroundColor: "#3A3A3A" }} />
            <Box component="a" href="#terms" sx={{ color: "#99999B", fontSize: "14px", whiteSpace: "nowrap" }}>
              Terms of Service
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}