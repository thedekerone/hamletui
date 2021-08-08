const soundsExample = [
  {
    title: "Test",
    file: {
      publicUrl:
        "https://hamul-clone.s3.us-east-1.amazonaws.com/sounds/60bfc948c7eec22cf8bf5c4d-file_example_MP3_1MG.mp3",
    },
    author: {
      name: "Admin",
    },
    liking: [
      {
        id: "60af0be3351c033080892cfb",
      },
    ],
    id: "60bfc94ac7eec22cf8bf5c4e",
  },
  {
    title: "Esta cargando mi daga - madara",
    file: {
      publicUrl:
        "https://hamul-clone.s3.us-east-1.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta cargando mi daga.mp3",
    },
    author: {
      name: "admin123",
    },
    liking: [],
    id: "60c3f598dfdec3001cf50e8a",
  },
  {
    title: "No vales ni un sol",
    file: {
      publicUrl:
        "https://hamul-clone.s3.us-east-1.amazonaws.com/sounds/60c3f6d4dfdec3001cf50e8b-no vales ni un sol.mp3",
    },
    author: {
      name: "admin123",
    },
    liking: [],
    id: "60c3f6d4dfdec3001cf50e8c",
  },
];

const userExample = {
  id: "60af0be3351c033080892cfb",
  name: "Admin",
  favoriteSounds: [
    {
      title: "Test",
      file: {
        publicUrl:
          "https://hamul-clone.s3.us-east-1.amazonaws.com/sounds/60bfc948c7eec22cf8bf5c4d-file_example_MP3_1MG.mp3",
      },
      author: {
        name: "Admin",
      },
      liking: [
        {
          id: "60af0be3351c033080892cfb",
        },
      ],
      id: "60bfc94ac7eec22cf8bf5c4e",
    },
  ],
};

export const formatSounds = (
  soundList = soundsExample,
  isFavorite = false,
  userId = "0000"
) => {
  return soundList.map((sound) => ({
    title: sound.title,
    src: sound.file.publicUrl,
    isPlaying: false,
    createdBy: sound.author.name,
    id: sound.id,
    hasLike: isFavorite ? true : sound.liking.includes(userId),
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
