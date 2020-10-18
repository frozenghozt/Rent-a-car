import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  height: 570px;
  background-color: #000;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
  > img {
    position: absolute;
    height: 75%;
    width: auto;
    right: 0;
  }
`;

export const Headline = styled.h3`
  position: absolute;
  font-family: CaustenBold;
  color: #fff;
  left: 40px;
  font-size: 52px;
  z-index: 100;
`;
