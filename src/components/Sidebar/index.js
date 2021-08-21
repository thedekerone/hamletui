import React, { useState } from "react";
import { FixedContainer, IconContainer, Profile } from "./styles";
import {
  BsMusicNoteBeamed,
  BsHeart,
  BsHouse,
  BsGear,
  BsUpload,
  BsPeopleCircle,
} from "react-icons/bs";
import { getLocalData } from "../../util";
import { Fragment } from "react";
import { Login } from "../auth/Login";

export const Sidebar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const isLoggedIn = getLocalData("user");

  return (
    <Fragment>
      <FixedContainer>
        <Profile>
          <IconContainer className='icon-container'>
            <BsPeopleCircle color='#999' size='30'></BsPeopleCircle>
          </IconContainer>
          {isLoggedIn ? (
            <p>Nombre</p>
          ) : (
            <button onClick={() => setShowLogin(true)}>Ingresar</button>
          )}
        </Profile>
        {isLoggedIn && (
          <nav>
            <ul>
              <li>
                <IconContainer className='icon-container'>
                  <BsHouse color='#999' size='27'></BsHouse>
                </IconContainer>
                <p>Home</p>
              </li>
              <li>
                <IconContainer className='icon-container'>
                  <BsHeart color='#999' size='22'></BsHeart>
                </IconContainer>
                <p>Favoritos</p>
              </li>
              <li>
                <IconContainer className='icon-container'>
                  <BsMusicNoteBeamed color='#999' size='22'></BsMusicNoteBeamed>
                </IconContainer>
                <p>Sonidos</p>
              </li>
              <li>
                <IconContainer className='icon-container'>
                  <BsUpload color='#999' size='22'></BsUpload>
                </IconContainer>
                <p>Subir</p>
              </li>
              <li>
                <IconContainer className='icon-container'>
                  <BsGear color='#999' size='22'></BsGear>
                </IconContainer>
                <p>Configuracion</p>
              </li>
            </ul>
          </nav>
        )}
      </FixedContainer>
      <Login setIsShowing={setShowLogin} show={showLogin}></Login>
    </Fragment>
  );
};
