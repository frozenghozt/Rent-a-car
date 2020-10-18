import React from "react";
import { Container, Wrapper, Headline } from "./styles";
import CarBanner from "../../assets/carbanner.png";

import Header from "../Header/Header";
import Search from "../Search/Search";

const Banner = () => {
  return (
    <Container>
      <Search />
      <Wrapper>
        <Headline>
          Find your <br /> best rental car deal.
        </Headline>
        <img src={CarBanner} alt="car" />
        <Header />
      </Wrapper>
    </Container>
  );
};

export default Banner;
