import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  height: calc(100% - 300px);
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const MainImage = styled.picture`
  flex: 1;
  background-color: #f0f1f6;
  border-radius: 15px;
  > img {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }
`;

export const Description = styled.div`
  flex: 1;
  height: 100%;
  background-color: none;
  border: 1px solid #999;
  border-radius: 10px;
`;

export const Slicker = styled.div`
  display: none;
  width: 100%;
  flex: 1;
  margin-top: 15px;
  overflow: hidden;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const SlickerScroll = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`;

export const SlickerItem = styled.div`
  background-color: #999;
  margin-right: 10px;
  border-radius: 10px;
  @media (min-width: 1024px) {
    min-width: calc(100% / 2);
  }
  @media (min-width: 1400px) {
    min-width: calc(100% / 3);
  }
  @media (min-width: 1680px) {
    min-width: calc(100% / 4);
  }
`;
