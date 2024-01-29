import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
// const Circle = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
// `;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle bgColor="skyblue" />
    </Wrapper>
  );
}

export default App;
