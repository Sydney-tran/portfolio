import React from "react";
import { skillsList, certificationsList, imagesList} from "../../data/Data";
import {
  AboutWrapper,
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
        <div className="card-big">
          <AboutBio>
            I am a sophomore at Cornell Univeristy
            studying Computer Science in the College of Engineering and
            a developer on the Cornell Design & Tech Initiative Project Team. I took 
            my very first programming course when I was 14 and since then, 
            I have continously worked on improving my skills
            in order to develop efficient and elegant code!
            Outside of CS, I also love skiing (& ski racing), cooking <s>& burning</s> my favorite food for my family,
            and watching the sunset with my friends!
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
