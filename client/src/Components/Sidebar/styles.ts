import styled from "styled-components";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  width: 280px;
  height: 100%;
  /* background-color: #f0f1f6; */
  background-color: #999;
  padding: 10px;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
