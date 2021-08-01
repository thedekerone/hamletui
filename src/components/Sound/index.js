import React from "react";
import { Container } from "./styles";
import { BsPlayFill, BsHeart } from "react-icons/bs";

export const Sound = () => {
  return (
    <Container>
      <BsPlayFill color='#5C20D1' size='35'></BsPlayFill>
      <div className='content'>
        <div className='content-title'>
          <h4>Ejemplo de titulo numero 1</h4>
          <p>By usuario_1</p>
        </div>
      </div>
      <BsHeart color='#5C20D1' size='25'></BsHeart>
    </Container>
  );
};
