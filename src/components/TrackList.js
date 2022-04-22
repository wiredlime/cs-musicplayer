import React from "react";
import "../Globalcss.css";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import HeadsetIcon from "@mui/icons-material/Headset";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <Stack>
      {trackList.map((track, index) => (
        <Box
          className="track"
          key={index}
          my={1}
          sx={{ width: "100%", borderRadius: "10px" }}
        >
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: "10px",
            }}
          >
            <Stack px={2} direction="row" alignItems="center">
              <IconButton onClick={() => playTrack(index)}>
                {currentTrackName === track.name && isPlaying ? (
                  <HeadsetIcon />
                ) : (
                  <PauseCircleIcon />
                )}
              </IconButton>

              <Typography
                ml={1}
                sx={{ fontSize: "12px", fontWeight: "300", color: "#5E376D" }}
              >
                {track.name}
              </Typography>
            </Stack>
          </Paper>
        </Box>
      ))}
    </Stack>
  );
};

export default TrackList;
