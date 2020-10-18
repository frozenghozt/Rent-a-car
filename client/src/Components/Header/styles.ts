import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  color: #fff;
  padding: 0 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const NavBarContainer = styled.nav`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
  align-items: center;
  > ul {
    display: flex;
    padding: 0;
    > li {
      list-style: none;
      margin-right: 25px;
      cursor: pointer;
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
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
`;
