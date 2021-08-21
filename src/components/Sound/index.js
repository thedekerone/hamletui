import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { BsPlayFill, BsHeart, BsHeartFill, BsPauseFill } from "react-icons/bs";
import { AudioManagerContext } from "../../Audio/components/AudioManager";
import { useMutation } from "@apollo/client";
import { DISLIKE_SOUND, LIKE_SOUND } from "../../querys/querys";

export const Sound = ({ options, config, onClickLike, onTogglePlay }) => {
  const { title, createdBy, hasLike, id, src } = options;

  const [like] = useMutation(LIKE_SOUND, {
    variables: {
      userId: localStorage.getItem("userId"),
      audioId: id,
    },
  });
  const [dislike] = useMutation(DISLIKE_SOUND, {
    variables: {
      userId: localStorage.getItem("userId"),
      audioId: id,
    },
  });

  const { play, changeMic, stop, audio } = useContext(AudioManagerContext);

  const likeSound = () => {
    if (hasLike) {
      dislike();
    } else {
      like();
    }
    onClickLike(id);
  };

  const isPlaying = config.isPlaying && id === config.current;

  const handlePlay = () => {
    onTogglePlay(id);
    if (isPlaying) {
      stop();
    } else {
      play(src);
    }
  };

  return (
    <Container>
      {isPlaying ? (
        <BsPauseFill
          onClick={() => handlePlay()}
          color='#5C20D1'
          size='35'
        ></BsPauseFill>
      ) : (
        <BsPlayFill
          onClick={() => handlePlay()}
          color='#5C20D1'
          size='35'
        ></BsPlayFill>
      )}

      <div className='content'>
        <div className='content-title'>
          <h4>{title}</h4>
          <p>{createdBy}</p>
        </div>
      </div>
      {hasLike ? (
        <BsHeartFill
          onClick={() => likeSound()}
          color='#5C20D1'
          size='25'
        ></BsHeartFill>
      ) : (
        <BsHeart
          onClick={() => likeSound()}
          color='#5C20D1'
          size='25'
        ></BsHeart>
      )}
    </Container>
  );
};
