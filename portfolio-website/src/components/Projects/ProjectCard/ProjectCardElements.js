import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
    
    span {
      font-size: 1.75rem;
      font-style: italic;
      color: #F2ACAC;
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    color: white;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 1rem;
    font-weight: 500;
    color: #F2ACAC;
  }

  ul {
    color: white;
    list-style-type: disc;
    padding-left: 1rem;
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-bottom: 0.5rem;
    color: white;
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }

  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;

  .stack-title {
    font-weight: 500;
    margin-right: 10px;
    font-size: 17px;
    color: #F2ACAC;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
    color: #F2ACAC;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: center;

  .video {
    background: #232232;
    padding: 7px;
    padding-bottom: 0px;
    width: 90%;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image {
    border-bottom: 7px solid #232232;
    width: auto;
    height: auto;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: #F2ACAC;
    margin-top: 10px;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
