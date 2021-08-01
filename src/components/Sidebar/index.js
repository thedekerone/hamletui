import React from "react";
import { FixedContainer, IconContainer, Profile } from "./styles";
import {
  BsMusicNoteBeamed,
  BsHeart,
  BsHouse,
  BsGear,
  BsUpload,
} from "react-icons/bs";

export const Sidebar = () => {
  return (
    <FixedContainer>
      <Profile></Profile>
      <IconContainer>
        <BsHouse color='#999' size='27'></BsHouse>
      </IconContainer>
      <IconContainer>
        <BsHeart color='#999' size='22'></BsHeart>
      </IconContainer>
      <IconContainer>
        <BsMusicNoteBeamed color='#999' size='22'></BsMusicNoteBeamed>
      </IconContainer>
      <IconContainer>
        <BsUpload color='#999' size='22'></BsUpload>
      </IconContainer>
      <IconContainer>
        <BsGear color='#999' size='22'></BsGear>
      </IconContainer>
    </FixedContainer>
  );
};
