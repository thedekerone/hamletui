import React, { Fragment } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { MainContainer, Container } from "./styles";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Sidebar></Sidebar>
      <MainContainer>
        <Header></Header>
        <Container>{children}</Container>
      </MainContainer>
    </Fragment>
  );
};
