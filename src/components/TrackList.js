import React from "react";
import "../Globalcss.css";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import HeadsetIcon from "@mui/icons-material/Headset";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { Typography } from "@mui/material";
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <Stack>
      {trackList.map((track, index) => (
        <Box
          component="Button"
          className="track"
          key={index}
          my={1}
          p={1}
          onClick={() => playTrack(index)}
        >
          <Stack direction="row" alignItems="center">
            <Icon>
              {currentTrackName === track.name && isPlaying ? (
                <HeadsetIcon sx={{ color: "gray" }} />
              ) : (
                <PauseCircleIcon sx={{ color: "gray" }} />
              )}
            </Icon>

            <Typography
              ml={2}
              sx={{ fontSize: "12px", fontWeight: "300", color: "#5E376D" }}
            >
              {track.name}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default TrackList;
