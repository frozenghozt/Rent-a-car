import styled from "styled-components";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 100%;
  background-color: #f0f1f6;
  padding: 20px;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 17px;
    margin: 12px 0;
  }
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > button {
      padding: 5px 7px;
      color: #000;
      font-size: 15px;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      margin-right: 8px;
      margin-bottom: 8px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  margin-bottom: 10px;
`;

export const Days = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 17px;
    margin: 12px 0;
  }
  > div {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      font-size: 15px;
      text-align: center;
      padding: 6px 7px 5px 7px;
      margin: 0 5px;
      color: #000;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      &:focus {
        outline: none;
      }
    }
  }
  margin-bottom: 10px;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 17px;
    margin: 12px 0;
  }
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > button {
      padding: 5px 7px;
      color: #000;
      font-size: 15px;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      margin-right: 8px;
      margin-bottom: 8px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  margin-bottom: 10px;
`;

export const Year = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 17px;
    margin: 12px 0;
  }
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > input {
      font-size: 15px;
      text-align: center;
      width: 30%;
      padding: 6px 7px;
      margin: 0 5px;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      &:nth-child(1) {
        margin: 0 5px 0 0;
      }
      &:focus {
        outline: none;
      }
    }
  }
  margin-bottom: 10px;
`;

export const Doors = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 17px;
    margin: 12px 0;
  }
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > button {
      height: 30px;
      width: 30px;
      font-size: 15px;
      color: #000;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      margin-right: 8px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  margin-bottom: 10px;
`;

export const Fuel = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 17px;
    margin: 12px 0;
  }
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > button {
      padding: 5px 7px;
      color: #000;
      font-size: 15px;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      margin-right: 8px;
      margin-bottom: 8px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  margin-bottom: 10px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 17px;
    margin: 12px 0;
  }
  > div {
    display: flex;
    align-items: center;
    width: 100%;
    > input {
      font-size: 15px;
      text-align: center;
      color: #000;
      width: 30%;
      padding: 6px 7px;
      margin: 0 5px;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      &:nth-child(1) {
        margin: 0 5px 0 0;
      }
      &:focus {
        outline: none;
      }
    }
  }
  margin-bottom: 10px;
`;
