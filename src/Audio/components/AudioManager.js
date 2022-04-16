import React, { createContext, useEffect, useState } from "react";
import { getDevices, selectMic } from "../../util";
import AudioPlayer from "./Audio";

export const AudioManagerContext = createContext();

const AudioManager = ({ children }) => {
  const [manager, setManager] = useState();
  const changeMic = (deviceId) => {
    selectMic(deviceId)?.then((res) => micAudio.play(res));
  };

  useEffect(() => {
    const mainAudio = new AudioPlayer();
    const micAudio = new AudioPlayer();
    getDevices()
      .then((res) => {
        const virtualOutput = res.outputDevices.find((el) =>
          el.label.includes("CABLE")
        );
        console.log(virtualOutput);
        if (!virtualOutput) alert("Descarga virtual cable ktmr");

        if (virtualOutput) {
          mainAudio.changeAudioDevice(virtualOutput.deviceId);
          micAudio.changeAudioDevice(virtualOutput.deviceId);
        } else {
          throw new Error("No se encontro el VIRTUAL CABLE");
        }

        return null;
      })
      .catch((err) => console.log(err));

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
