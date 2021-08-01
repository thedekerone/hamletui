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
`;

export const Profile = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-color: #ccc;
  margin-bottom: 2.5rem;
`;

export const IconContainer = styled.div`
  margin-top: 1.75rem;
  display: flex;
  justify-content: center;
`;
