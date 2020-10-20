import React from "react";
import ContentLoader from "react-content-loader";
import { Container } from "./styles";

const Skeleton = () => (
  <Container>
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"100%"}
      backgroundColor="#cfcfcf"
      foregroundColor="#ecebeb"
      style={{ width: "100%" }}
    >
      <rect x="0" y="0" rx="2" ry="2" width="100%" height="70%" />
      <rect x="0" y="280px" rx="2" ry="2" width="100%" height="17px" />
      <rect x="0" y="310px" rx="2" ry="2" width="100%" height="17px" />
      <rect x="0" y="340px" rx="2" ry="2" width="100%" height="17px" />
    </ContentLoader>
  </Container>
);

export default Skeleton;
