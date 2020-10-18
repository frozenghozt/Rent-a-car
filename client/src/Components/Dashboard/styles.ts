import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const DashWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
`;

export const DashContent = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 280px);
  padding: 20px;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
