import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
}

export default App;
