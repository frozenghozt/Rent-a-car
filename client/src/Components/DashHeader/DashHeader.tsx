import React from "react";
import {
  Container,
  Wrapper,
  LogoContainer,
  NavBarContainer,
  IconContainer,
  ButtonsContainer,
} from "./styles";
import MenuIcon from "@material-ui/icons/Menu";

const DashHeader = () => {
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
