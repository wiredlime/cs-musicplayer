import React from "react";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Stack from "@mui/material/Stack";
import Banner from "./components/Banner";
import "./Globalcss.css";
const App = () => {
  return (
    <MusicPlayerProvider>
      <Stack
        className="container"
        m={8}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        width="300px"
        height="500px"
        sx={{
          backgroundColor: "#D3BBDD",
          borderRadius: "70px",
        }}
      >
        <Banner />
        <TrackList />
        <Controller />
      </Stack>
    </MusicPlayerProvider>
  );
};

export default App;
