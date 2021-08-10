import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 20rem auto 6rem;
  background-color: white;
  border-radius: 10px;
  padding: 1rem 1rem;

  & h2 {
    margin-bottom: 1rem;
  }

  & label {
    font-size: 14px;
  }
  & input {
    padding: 0.4rem;
    margin-top: 6px;
    margin-bottom: 10px;
    width: 100%;
    border: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  & button {
    border: 0;
    border: 1px solid #5c20d1;
    cursor: pointer;
    background-color: #5c20d1;
    padding: 0.5rem 4rem;
    color: white;
    display: block;
    margin: 1rem auto 0.5rem;
    font-weight: bold;
  }
  & button:hover {
    background-color: #5a10f1;
  }
`;

export const LoginModal = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  width: 100%;
  z-index: 1000;
  height: 100%;
  top: 0;
  left: 0;
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
