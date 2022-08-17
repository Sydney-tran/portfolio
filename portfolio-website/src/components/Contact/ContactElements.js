import styled from "styled-components";

export const ContactWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 10rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 18px;
    color: white;
  }
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-weight: 500;
    margin-bottom: 1rem;
    color: white;

    p {
      visibility: hidden;
      text-align: center;
      font-size: 14px;
      border-radius: 5px;
      color: #F2ACAC;
    }
  }

  span:hover {
    color: #F2ACAC;
    p {
      visibility: visible;
    }
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    a {
      visibility: hidden;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 2rem;
      margin-top: 5px;
      margin-bottom: 5px;

      p {
        text-align: left;
      }
    }
  }
`;
