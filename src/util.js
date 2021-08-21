import CryptoJS from "crypto-js";

export const formatSounds = (
  soundList = [],
  isFavorite = false,
  userId = "0000"
) => {
  return soundList.map((sound) => ({
    title: sound.title,
    src: sound.file.publicUrl,
    isPlaying: false,
    createdBy: sound.author.name,
    id: sound.id,
    hasLike: isFavorite
      ? true
      : sound.liking.map((el) => el.id).includes(userId),
    isFavorite: isFavorite,
  }));
};

export const formatUser = (user) => {
  return {
    id: user.id,
    username: user.name,
    favoriteSounds: formatSounds(user.favoriteSounds, true),
  };
};

export const selectFavorites = (sounds, favoriteSounds) => {};

export const getDevices = async () => {
  let deviceList = [];
  let inputDevices = [];
  let outputDevices = [];
  if (navigator !== undefined) {
    try {
      deviceList = await navigator.mediaDevices.enumerateDevices();
      inputDevices = deviceList.filter((el) => el.kind === "audioinput");
      outputDevices = deviceList.filter((el) => el.kind === "audiooutput");
    } catch (error) {
      console.log(error);
    }
  }
  return { inputDevices, outputDevices };
};

export const selectMic = (deviceId) => {
  if (navigator !== undefined) {
    return navigator.mediaDevices.getUserMedia({ audio: { deviceId } });
  }
  return null;
};

export const encrypt = (obj) => {
  return CryptoJS.AES.encrypt(JSON.stringify(obj), process.env.customKey);
};
export const decrypt = (obj) => {
  return JSON.parse(
    CryptoJS.AES.decrypt(obj, process.env.customKey).toString(CryptoJS.enc.Utf8)
  );
};

export const setLocalData = (storageName, obj) => {
  localStorage.setItem(storageName, encrypt(obj));
};

export const getLocalData = (storageName) => {
  if (localStorage.getItem(storageName)) {
    return decrypt(localStorage.getItem(storageName));
  }
  return null;
};
