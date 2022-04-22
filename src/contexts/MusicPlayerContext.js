import React, { useState } from "react";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    tracks: [
      {
        name: "Cold Gin - Kiss",
      },
      {
        name: "heaven's On Fire - Kiss",
      },
      {
        name: "Beth - Kiss",
      },

      {
        name: "God of Thunder - Kiss",
      },
      {
        name: "Calling Dr.Love - Kiss",
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
