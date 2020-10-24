import React from "react";
import {
  Container,
  Wrapper,
  LogoContainer,
  NavBarContainer,
  IconContainer,
  ButtonsContainer,
  StyledLink,
} from "./styles";
import MenuIcon from "@material-ui/icons/Menu";

const DashHeader = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <StyledLink to="/">LuxCar</StyledLink>
        </LogoContainer>
        <NavBarContainer>
          <ul>
            <li>Find your car</li>
            <li>How it works</li>
            <li>Create account</li>
          </ul>
        </NavBarContainer>
        <IconContainer>
          <MenuIcon style={{ cursor: "pointer" }} />
        </IconContainer>
        <ButtonsContainer>
          <button>Sign in</button>
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};

export default DashHeader;
