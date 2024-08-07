import React from "react";
import { skillsList, certificationsList, imagesList} from "../../data/Data";
import {
  AboutWrapper,
  AboutCard,
  AboutBio,
  Subtitle,
  Image,
  Elements,
  Element,
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
        <AboutCard>
          <AboutBio>
            <p>
              I am a senior at Cornell Univeristy
              majoring in Computer Science and minoring in Mathematics.
              I took my very first programming course when I was 14 and since then, 
              I have continously worked on improving my skills
              in order to develop efficient and elegant code!
            </p>
            <br/>
            <p>
              Outside of CS, I also love skiing (& ski racing),
              cooking <s>& burning</s> my favorite food,
              and biking around cities with my friends!
            </p>
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
        </AboutCard>
        <Subtitle>Skills</Subtitle>
        <Elements>
          {skillsList.map((skill, index) => (
            <Element key={index} className="tech">
              <ElementName>{skill.name}</ElementName>
            </Element>
          ))}
        </Elements>
        <br></br>
        <Subtitle>Certifications</Subtitle>
        {certificationsList.map((certification, index) => (
            <Element key={index} className="tech">
              <CertificationImg src={certification.img} alt={certification.name} />
              <ElementName>{certification.name}</ElementName>
            </Element>
          ))}
      </div>
    </AboutWrapper>
  );
}

export default About;
