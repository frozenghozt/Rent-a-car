import React from "react";
import {
  Container,
  Wrapper,
  ImageContainer,
  InfoContainer,
  BrandModel,
  YearDoors,
  FuelPrice,
} from "./styles";

type Props = {
  brand: String;
  model: String;
  price: String;
  years: Number;
  doors: Number;
  fuel: String;
  image: String;
};

const ListItem = ({
  brand,
  model,
  price,
  years,
  doors,
  fuel,
  image,
}: Props) => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src={`${image}`} />
        </ImageContainer>
        <InfoContainer>
          <BrandModel>
            <span>{`${brand} ${model}`}</span>
          </BrandModel>
          <YearDoors>
            <span>{`Year: ${years}`}</span>
            <span>{`Doors: ${doors}`}</span>
          </YearDoors>
          <FuelPrice>
            <span>{`Fuel: ${fuel}`}</span>
            <span>{`Price: ${price}`}</span>
          </FuelPrice>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ListItem;
