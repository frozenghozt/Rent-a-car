import styled from "styled-components";

export const Container = styled.div`
  width: calc((100% / 6) - 20px);
  height: 280px;
  background-color: #f0f1f6;
  border-radius: 15px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.3);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 5px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  background-color: #777;
  border-radius: 12px;
`;
