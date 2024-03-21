import { useQuery } from "react-query";
import { IMovieResult, getMovies } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background-color: #000;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 36px;
  width: 50%;
`;

function Home() {
  const { data, isLoading } = useQuery<IMovieResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading ..</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
