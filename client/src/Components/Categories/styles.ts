import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f0f1f6;
  padding: 125px 0 20px 0;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
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

export const CatCont = styled.div`
  display: flex;
  width: 100%;
  padding: 90px 0;
`;

export const SafetyCat = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  text-align: center;
  z-index: 2;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    height: 95px;
    width: 95px;
    color: darkblue;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.1);
    font-family: ElegantIcons;
  }
  > h3 {
    font-size: 22px;
    font-family: CaustenBold;
  }
  > p {
    color: #6e6e6e;
  }
`;

export const LuxuryCat = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  text-align: center;
  margin-top: 30px;
  z-index: 2;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    height: 95px;
    width: 95px;
    color: darkblue;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.1);
    font-family: ElegantIcons;
  }
  > h3 {
    font-size: 22px;
    font-family: CaustenBold;
  }
  > p {
    color: #6e6e6e;
  }
`;

export const TransparentCat = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  text-align: center;
  z-index: 2;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    height: 95px;
    width: 95px;
    color: darkblue;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.1);
    font-family: ElegantIcons;
  }
  > h3 {
    font-size: 22px;
    font-family: CaustenBold;
  }
  > p {
    color: #6e6e6e;
  }
`;

export const Circlepeq = styled.span`
  position: absolute;
  height: 380px;
  width: 380px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 100%;
  z-index: 1;
  top: -190px;
`;

export const Circlemed = styled.span`
  position: absolute;
  height: 700px;
  width: 700px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 100%;
  z-index: 1;
  top: -350px;
`;

export const Circlelarge = styled.span`
  position: absolute;
  height: 1000px;
  width: 1000px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 100%;
  z-index: 1;
  top: -500px;
`;
