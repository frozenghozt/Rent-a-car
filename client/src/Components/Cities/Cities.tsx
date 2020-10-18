import React from "react";
import { Container, CenterHeadline, Wrapper, Slider, Card } from "./styles";
import Newyork from "../../assets/newyork.png";

const Cities = () => {
  return (
    <Container>
      <CenterHeadline>
        <p>OUR CITIES</p>
        <h3>Search by city</h3>
      </CenterHeadline>
      <Wrapper>
        <div></div>
        <div></div>
        <Slider>
          <Card>
            <img src={Newyork} alt="alt" />
            <h4>New York</h4>
          </Card>
          <Card>
            <img src={Newyork} alt="alt" />
            <h4>New York</h4>
          </Card>
          <Card>
            <img src={Newyork} alt="alt" />
            <h4>New York</h4>
          </Card>
          <Card>
            <img src={Newyork} alt="alt" />
            <h4>New York</h4>
          </Card>
          <Card>
            <img src={Newyork} alt="alt" />
            <h4>New York</h4>
          </Card>
          <Card>
            <img src={Newyork} alt="alt" />
            <h4>New York</h4>
          </Card>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Cities;
