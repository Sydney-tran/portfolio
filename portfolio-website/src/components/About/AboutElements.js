import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding-top: 8rem;
`;

export const AboutCard = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutBio = styled.div`
  text-align: left;
  max-width: 500px;
  color: white;
  line-height: 1.8;

  s {
    color: white;
  }
`;

export const Subtitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 16px;
  color: #F2ACAC;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Elements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 25px;
  max-width: 200px;
  min-width: 125px;
  margin-bottom: 2rem;
`;

export const ElementName = styled.div`
  font-size: 16px;
  color: white;
`;

export const CertificationImg = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px;
`;