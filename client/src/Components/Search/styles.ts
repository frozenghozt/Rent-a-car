import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 80px;
  border-radius: 50px;
  bottom: -40px;
  width: 70%;
  margin: 0 auto;
  padding-left: 30px;
  background-color: #f0f1f6;
  z-index: 100;
  box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.3);
  @media (min-width: 1200px) {
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`;

export const Where = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0px 0px 0px 30px;
    > span {
      font-size: 14px;
      color: #999;
      margin-bottom: 5px;
      &:nth-child(2) {
        font-size: 17px;
        font-weight: 500;
        color: #000;
        margin-bottom: 0;
        cursor: pointer;
      }
    }
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  width: calc(100% - 60px);
  background-color: #f0f1f6;
  border-radius: 15px;
  box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.3);
  > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    padding: 15px 25px;
    > li {
      list-style: none;
      margin-bottom: 5px;
      color: #999;
      cursor: pointer;
      &:hover {
        color: #000;
      }
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
`;

export const DateCont = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  > div {
    display: flex;
    width: 100%;
    height: 60%;
    padding: 0px 0px 0px 30px;
    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      input {
        padding: 0 !important;
        font-size: 17px;
        font-family: CaustenReg;
        cursor: pointer;
      }
      > span {
        font-size: 14px;
        color: #999;
        margin-bottom: 5px;
        &:nth-last-child(1) {
          font-size: 15px;
          font-weight: 500;
          color: #000;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const Vehicle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 60%;
    padding: 0px 0px 0px 30px;
    > span {
      font-size: 14px;
      color: #999;
      margin-bottom: 5px;
      &:nth-child(2) {
        font-size: 17px;
        font-weight: 500;
        color: #000;
        margin-bottom: 0;
        cursor: pointer;
      }
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 0;
  color: #fff;
  background-color: #2f45bf;
  cursor: pointer;
  &:focus {
    border: 0;
    outline: 0;
  }
`;

export const Vertical = styled.span`
  min-height: 100%;
  min-width: 4px;
  background-color: #999;
`;

export const StyledLink = styled(Link)`
  border: 0;
  outline: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
