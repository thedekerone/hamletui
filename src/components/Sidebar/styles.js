import styled from "styled-components";

export const FixedContainer = styled.aside`
  padding: 2rem 1rem;
  background-color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 20px 6px rgba(0, 0, 0, 0.02);
  -webkit-box-shadow: 1px 1px 20px 6px rgba(0, 0, 0, 0.02);
  -moz-box-shadow: 1px 1px 20px 6px rgba(0, 0, 0, 0.02);
  width: 5rem;
  overflow: hidden;
  & ul li {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 12rem;
    cursor: pointer;
    margin-top: 1.75rem;
  }

  & ul li p {
    margin-left: 2rem;
  }

  & ul li:hover {
    color: rgb(92, 32, 209);
  }
  &:hover {
    transition: 0.4s;
    width: 18rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  min-width: 12rem;
  margin-bottom: 2.5rem;

  & p {
    margin-left: 2rem;
  }
`;

export const IconContainer = styled.div`
  width: 3rem;
  justify-content: center;
  height: 3rem;
  align-items: center;
  display: flex;
`;
