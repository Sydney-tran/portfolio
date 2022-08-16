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
            <h4>Software Engineer</h4>
            <h5>
              Insert sentence here! Insert sentence here! Insert sentence here! {/* todo */}
            </h5>
            <h6>
              {"// scroll down to learn more about me!"}
            </h6>
          </HomeLeft>
          <HomeRight>
            <Image
              src="" //todo
              alt="photo"
            />
          </HomeRight>
        </HomeWrapper>
      </HomeContainer>
    </main>
  );
}

export default Home;
