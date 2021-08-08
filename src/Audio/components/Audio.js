class AudioPlayer {
  audio;

  constructor() {
    this.audio = new Audio();
  }

  play(src) {
    if (typeof src === "string") {
      this.audio.src = src;
    } else if (typeof src === "object") {
      this.audio.srcObject = src;
    }
    this.audio.play();
    console.log(src);
  }

  get isPlaying() {
    return this.audio.played;
  }

  stop() {
    this.audio.currentTime = 0;
    this.audio.pause();
  }

  changeAudioDevice(deviceId) {
    // setSinkId is a experimental
    this.audio
      .setSinkId(deviceId)
      .then(() => {
        console.log(`Success, audio output device attached: ${deviceId}`);
        return null;
      })
      .catch((err) => console.log(err));
    return deviceId;
  }
}

export default AudioPlayer;
