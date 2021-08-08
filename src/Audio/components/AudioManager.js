import React, { createContext, useEffect, useState } from "react";
import { getDevices, selectMic } from "../../util";
import AudioPlayer from "./Audio";

export const AudioManagerContext = createContext();

const AudioManager = ({ children }) => {
  const [manager, setManager] = useState();

  useEffect(() => {
    const mainAudio = new AudioPlayer();
    const micAudio = new AudioPlayer();

    const play = (src) => {
      mainAudio.play(src);
    };

    const stop = () => {
      mainAudio.stop();
    };

    const changeMic = (deviceId) => {
      selectMic(deviceId)?.then((res) => micAudio.play(res));
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
      getDevices()
        .then((res) => {
          console.log(res);
          const virtualOutput = res.outputDevices.find((el) =>
            el.label.includes("CABLE")
          );

          return null;
        })
        .catch((err) => console.log(err));
    });

    setManager({
      mainAudio,
      micAudio,
      play,
      stop,
      changeMic,
    });
  }, []);

  if (!manager) return <div></div>;
  return (
    <AudioManagerContext.Provider
      value={{
        play: manager.play,
        audio: manager.mainAudio.audio,
        stop: manager.stop,
        changeMic: manager.changeMic,
      }}
    >
      {children}
    </AudioManagerContext.Provider>
  );
};

export default AudioManager;
