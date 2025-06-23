import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Stack } from "react-bootstrap";
import database from "../database/localDB.json";

// MUI icons for contacts
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

// React Icons for social media
import * as FaIcons from "react-icons/fa";

function SocialNew() {
  const contactIconMap = {
    mail: <EmailIcon />,
    phone: <PhoneAndroidIcon />,
  };

  const getSocialIcon = (iconName) => {
    const IconComponent = FaIcons[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: { xs: 2, sm: 4 },
      }}
    >
      {/* Contacts Section */}
      <Box>
        <Typography
          align="left"
          variant="h5"
          sx={{
            color: "#E0E0E0",
            marginBottom: "16px",
            fontWeight: "600",
          }}
        >
          Contacts
        </Typography>

        <Stack spacing={2}>
          {database.contact.contacts?.map((obj) => (
            <ListItemButton
              key={obj.value}
              sx={{
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            >
              <ListItemIcon sx={{ color: "#4CAF50", minWidth: "40px" }}>
                {contactIconMap[obj?.name]}
              </ListItemIcon>
              <ListItemText
                primary={obj.value}
                primaryTypographyProps={{
                  sx: { color: "#B8B8B8", fontSize: "1rem" },
                }}
              />
            </ListItemButton>
          ))}
        </Stack>
      </Box>

      {/* Social Media Section */}
      <Box>
        <Typography
          align="left"
          variant="h5"
          sx={{
            color: "#E0E0E0",
            marginBottom: "16px",
            fontWeight: "600",
          }}
        >
          Social Media
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "flex-start",
          }}
        >
          {database.contact.socialmedia?.map((obj) => (
            <a
              key={obj.name}
              href={obj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              title={obj.name}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "60px",
                  height: "60px",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.08)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#4CAF50" }}>
                  {getSocialIcon(obj.icon)}
                </ListItemIcon>
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SocialNew;
