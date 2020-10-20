import styled from "styled-components";

export const Container = styled.div`
  width: calc((100% / 2) - 20px);
  border-radius: 15px;
  margin: 10px;
  padding: 5px;
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
  padding: 5px;
  color: #999;
`;

export const ImageContainer = styled.div`
  background-color: #999;
  width: 100%;
  padding-bottom: 72.5%;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 12px 7px;
`;

export const BrandModel = styled.div`
  background-color: #999;
  margin: 6px 0;
  height: 15px;
  width: 40%;
  border-radius: 10px;
`;

export const YearDoors = styled.div`
  background-color: #999;
  margin: 6px 0;
  height: 15px;
  width: 100%;
  border-radius: 10px;
`;

export const FuelPrice = styled.div`
  background-color: #999;
  margin: 6px 0;
  height: 15px;
  width: 100%;
  border-radius: 10px;
`;
