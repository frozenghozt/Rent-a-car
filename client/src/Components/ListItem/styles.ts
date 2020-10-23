import styled from "styled-components";

export const Container = styled.div`
  width: calc((100% / 2) - 20px);
  background-color: #f0f1f6;
  border-radius: 15px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 1100px) {
    width: calc((100% / 3) - 20px);
  }
  @media (min-width: 1400px) {
    width: calc((100% / 4) - 20px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100%;
  width: 100%;
  padding: 10px 10px 5px 10px;
  color: #999;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  border-radius: 12px;
  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  padding: 10px 7px;
`;

export const BrandModel = styled.div`
  display: flex;
  justify-content: space-between;
  color: #444;
  > span {
    font-weight: bolder;
    margin: 5px 0px;
  }
`;

export const YearDoors = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    font-weight: bolder;
    margin: 5px 0px;
  }
`;

export const FuelPrice = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    font-weight: bolder;
    margin: 5px 0px;
  }
`;
