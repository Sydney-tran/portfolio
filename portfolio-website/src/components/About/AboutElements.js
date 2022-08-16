import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding-top: 8rem;
`;

export const AboutBio = styled.div`
  text-align: left;
  max-width: 500px;
  color: #303544;
  line-height: 1.8;
`;

export const Subtitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: white;
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
  align-items: center;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const ElementImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const ElementName = styled.div`
  font-size: 14px;
  color: white;
`;

export const CertificationImg = styled.img`
  height: 150px;
  width: 150px;
  margin: 10px;
`;