import React from "react";
import { skillsList, certificationsList, funFactsList, imagesList} from "../../data/Data";
import {
  AboutWrapper,
  AboutBio,
  Subtitle,
  Image,
  Elements,
  Element,
  ElementImg,
  ElementName,
  CertificationImg,
} from "./AboutElements";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function About() {
  return (
    <AboutWrapper id="about">
      <div className="container">
        <div className="section-title">About Me</div>
        <div className="card-big">
          <AboutBio> {/* todo */}
            Hi! My name is Sydney. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </AboutBio>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {imagesList.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image.img} alt={image.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Subtitle>Skills</Subtitle>
        <Elements>
          {skillsList.map((skill, index) => (
            <Element key={index} className="tech">
              <ElementImg src={skill.img} alt={skill.name} />
              <ElementName>{skill.name}</ElementName>
            </Element>
          ))}
        </Elements>
        <Subtitle>Certifications</Subtitle>
        {certificationsList.map((certification, index) => (
            <Element key={index} className="tech">
              <CertificationImg src={certification.img} alt={certification.name} />
              <ElementName>{certification.name}</ElementName>
            </Element>
          ))}
        <Subtitle>Fun Facts</Subtitle>
        <Elements>
          {funFactsList.map((funFact, index) => (
            <Element key={index} className="tech">
              <ElementImg src={funFact.img} alt={funFact.name} />
              <ElementName>{funFact.description}</ElementName>
            </Element>
          ))}
        </Elements>
      </div>
    </AboutWrapper>
  );
}

export default About;
