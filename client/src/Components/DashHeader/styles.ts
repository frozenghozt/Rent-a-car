import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  color: #fff;
  background-color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 60px;
  color: #fff;
  padding: 0 20px;
  @media (min-width: 480px) {
    padding: 0 30px;
    height: 75px;
  }
  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  font-size: 22px;
  font-weight: 500;
  justify-content: flex-start;
  align-items: center;
`;

export const NavBarContainer = styled.nav`
  display: none;
  flex: 2;
  height: 100%;
  justify-content: center;
  align-items: center;
  > ul {
    display: flex;
    padding: 0;
    > li {
      list-style: none;
      margin-right: 30px;
      cursor: pointer;
      @media (min-width: 1024px) {
        margin-right: 40px;
      }
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: none;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  > button {
    color: #fff;
    padding: 8px 20px;
    font-size: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: none;
    border-radius: 30px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  border: 0;
  outline: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
