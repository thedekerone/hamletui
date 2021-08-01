import React from "react";
import { Container } from "./styles";
import { BsPlayFill, BsHeart, BsHeartFill, BsPauseFill } from "react-icons/bs";

export const Sound = ({ options, onClickLike, onTogglePlay }) => {
  const { title, createdBy, isPlaying, hasLike, id } = options;
  console.log(onClickLike);
  return (
    <Container>
      {isPlaying ? (
        <BsPauseFill
          onClick={() => onTogglePlay(id)}
          color='#5C20D1'
          size='35'
        ></BsPauseFill>
      ) : (
        <BsPlayFill
          onClick={() => onTogglePlay(id)}
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
