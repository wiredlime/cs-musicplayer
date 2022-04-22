/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import Box from "@mui/material/Box";
import "../Globalcss.css";
function Banner() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "66px",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: "70px 70px 0 0",
      }}
    >
      <Box width="70%">
        <marquee>{currentTrackName}</marquee>
      </Box>
    </Box>
  );
}

export default Banner;
