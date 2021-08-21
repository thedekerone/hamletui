import React, { createContext, useEffect, useState } from "react";
import { getDevices, selectMic } from "../../util";
import AudioPlayer from "./Audio";

export const AudioManagerContext = createContext();

const AudioManager = ({ children }) => {
  const [manager, setManager] = useState();

  useEffect(() => {
    const mainAudio = new AudioPlayer();

    const play = (src) => {
      mainAudio.play(src);
    };

    const stop = () => {
      mainAudio.stop();
    };

    setManager({
      mainAudio,
      play,
      stop,
    });
  }, []);

  if (!manager) return <div></div>;
  return (
    <AudioManagerContext.Provider
      value={{
        play: manager.play,
        audio: manager.mainAudio.audio,
        stop: manager.stop,
      }}
    >
      {children}
    </AudioManagerContext.Provider>
  );
};

export default AudioManager;
