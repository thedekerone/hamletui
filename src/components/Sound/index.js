import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { BsPlayFill, BsHeart, BsHeartFill, BsPauseFill } from "react-icons/bs";
import { AudioManagerContext } from "../../Audio/components/AudioManager";

export const Sound = ({ options, config, onClickLike, onTogglePlay }) => {
  const { title, createdBy, hasLike, id, src } = options;

  const { play, changeMic, stop, audio } = useContext(AudioManagerContext);

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
          onClick={() => handlePlay(id)}
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
          onClick={() => onClickLike(id)}
          color='#5C20D1'
          size='25'
        ></BsHeartFill>
      ) : (
        <BsHeart
          onClick={() => onClickLike(id)}
          color='#5C20D1'
          size='25'
        ></BsHeart>
      )}
    </Container>
  );
};
