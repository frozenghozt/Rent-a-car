import React from "react";
import {
  Container,
  Wrapper,
  LogoContainer,
  NavBarContainer,
  ButtonsContainer,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>Logo</LogoContainer>
        <NavBarContainer>
          <ul>
            <li>Find your car</li>
            <li>How it works</li>
            <li>Create account</li>
          </ul>
        </NavBarContainer>
        <ButtonsContainer>
          <button>Sign in</button>
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
