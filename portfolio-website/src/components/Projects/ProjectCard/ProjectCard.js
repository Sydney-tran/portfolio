import React from "react";
import { projectsList } from "../../../data/Data";
import {
  Card,
  CardRight,
  CardLeft,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
import HoverVideoPlayer from 'react-hover-video-player';

function ProjectCard() {
  return (
    <div>
      {projectsList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <h3>{list.title}<span>&nbsp;&mdash;&nbsp;{list.company}</span></h3>
            <h4>{list.year}</h4>
            <h5>what it is</h5>
            <ul>
              <li><p>{list.description}</p></li>
            </ul>
            <h5>what i did</h5>
            <ul>
              <li><p>{list.contribution1}</p></li>
              <li><p>{list.contribution2}</p></li>
              <li><p>{list.contribution3}</p></li>
            </ul>
          </CardLeft>
          <CardRight>
            <br></br>
            <Stack>
              <span className="stack-title"> {"// tech stack: "}</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <div className="video">
              {list.has_vid && 
                <HoverVideoPlayer
                  videoSrc={list.vid}
                  pausedOverlay={
                    <img
                      src={list.img}
                      alt={list.title}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              }
              {!list.has_vid &&
                <img className="image"
                src={list.img}
                alt={list.title}
                />
              }
            </div>
            <p>{list.has_vid && "hover to see video!"}</p>
            <BtnGroup>
              {list.has_github && 
                <a
                  className="btn dark-btn"
                  href={list.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              }
              {list.has_demo && 
                <a
                  className="btn light-btn"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit ➜
                </a>
              }
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
