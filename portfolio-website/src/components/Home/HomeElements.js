import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 10rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: white;
    margin-top: 1rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.6rem;
    color: white;
    margin-bottom: 3.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 17px;
    color: white;
    margin-bottom: 10rem;
  }

  h6 {
    font-size: 17px;
    color: white;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HomeRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  margin-top: 50px;
  height: 300px;
  width: 310px;
  border-radius: 50%;
`;