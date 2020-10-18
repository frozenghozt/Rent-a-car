import React from "react";
import {
  Container,
  CenterHeadline,
  CatCont,
  SafetyCat,
  LuxuryCat,
  TransparentCat,
  Circlepeq,
  Circlemed,
  Circlelarge,
} from "./styles";

const Categories = () => {
  return (
    <Container>
      <Circlepeq />
      <Circlemed />
      <Circlelarge />
      <CenterHeadline>
        <p>POWER OF OUR SERVICE</p>
        <h3>
          Check out <br /> our marketplace
        </h3>
      </CenterHeadline>
      <CatCont>
        <SafetyCat>
          <div>&#x73;</div>
          <h3>Safety first</h3>
          <p>
            Maintain physical distance during <br /> check-in and checkout with
            a <br /> variety of remote access options.
          </p>
        </SafetyCat>
        <LuxuryCat>
          <div>&#xe001;</div>
          <h3>Luxury cars</h3>
          <p>
            Maintain physical distance during <br /> check-in and checkout with
            a <br /> variety of remote access options.
          </p>
        </LuxuryCat>
        <TransparentCat>
          <div>&#xe0fe;</div>
          <h3>Transparent rules</h3>
          <p>
            Maintain physical distance during <br /> check-in and checkout with
            a <br /> variety of remote access options.
          </p>
        </TransparentCat>
      </CatCont>
    </Container>
  );
};

export default Categories;
