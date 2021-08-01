import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 6px 10px 1px rgba(0, 0, 0, 0.03);
  -webkit-box-shadow: 0px 6px 10px 1px rgba(0, 0, 0, 0.03);
  -moz-box-shadow: 0px 6px 10px 1px rgba(0, 0, 0, 0.03);

  & .content {
    padding-left: 1.5rem;
    width: 100%;
  }

  & .content h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  & .content p {
    font-size: 0.75rem;
    font-weight: 300;
  }
`;
