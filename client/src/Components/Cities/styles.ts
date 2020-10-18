import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CenterHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-family: CaustenBold;
    font-weight: 400;
    font-size: 15px;
    color: #999;
  }
  > h3 {
    font-family: CaustenBold;
    text-align: center;
    font-size: 42px;
    margin: 30px 0;
    line-height: 98%;
    color: #46495a;
  }
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 350px;
  overflow: hidden;
  margin: 100px 0;
`;

export const Slider = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: nowrap;
  height: 370px;
  overflow-x: scroll;
  > div {
    &:nth-child(1) {
      opacity: 0.15;
    }
    &:nth-last-child(1) {
      opacity: 0.15;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  margin: 0 20px;
  min-width: 280px;
  height: 350px;
  background-color: #999;
  border-radius: 30px;
  transition: 0.4s;
  cursor: pointer;
  overflow: hidden;
  > img {
    object-fit: cover;
    height: auto;
    width: 310px;
  }
  &:hover {
    min-width: 310px;
  }
  > h4 {
    position: absolute;
    color: #fff;
    font-size: 26px;
    left: 0;
    bottom: 0;
    z-index: 2;
    margin: 35px 35px;
  }
`;
