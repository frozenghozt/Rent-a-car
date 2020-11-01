import React from "react";
import {
  Container,
  Item,
  MainImage,
  Description,
  Slicker,
  SlickerScroll,
  SlickerItem,
} from "./styles";

const FullItem = () => {
  return (
    <Container>
      <Item>
        <MainImage>
          <img src="https://i.imgur.com/aaRqbi5.png" alt="nheu" />
        </MainImage>
        <Description></Description>
      </Item>
      <Slicker>
        <SlickerScroll>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
          <SlickerItem></SlickerItem>
        </SlickerScroll>
      </Slicker>
    </Container>
  );
};

export default FullItem;
