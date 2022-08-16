import {
  HomeContainer,
  HomeWrapper,
  HomeLeft,
  HomeRight,
  Image,
} from "./HomeElements";

function Home() {
  return (
    <main>
      <HomeContainer id="home">
        <HomeWrapper>
          <HomeLeft>
            <h1>Hi! I'm Sydney.</h1>
            <h4>Student & Software Engineer</h4>
            <h5>
              I am learning how to write better code with every new experience and having fun doing what I love!
            </h5>
            <h6>
              {"// scroll down to learn more about me!"}
            </h6>
          </HomeLeft>
          <HomeRight>
            <Image
              src="https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/profile.jpeg"
              alt="photo"
            />
          </HomeRight>
        </HomeWrapper>
      </HomeContainer>
    </main>
  );
}

export default Home;
