import styled from "styled-components";

export const Icon = styled.div`
  display: block;
  position: fixed;
  top: 49%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 2rem;
  }

  a {
    font-size: 2rem;
    color: white;
    transition: 0.2s ease-in;
    &:hover {
      color: #303544;
    }
  }

  .element {
    width: 40px;
    height: auto;
  }

  @media screen and (max-width: 830px) {
    display: none;
  }
`;