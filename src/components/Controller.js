import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const Controls = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "rgba(0,0,0,0.2)",
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: "0 0 70px 70px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <IconButton onClick={playPreviousTrack} disabled={!currentTrackName}>
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton
            size="large"
            onClick={togglePlay}
            disabled={!currentTrackName}
          >
            {isPlaying ? (
              <PauseCircleIcon sx={{ fontSize: 60 }} />
            ) : (
              <PlayCircleIcon sx={{ fontSize: 60 }} />
            )}
          </IconButton>
          <IconButton onClick={playNextTrack} disabled={!currentTrackName}>
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Controls;
