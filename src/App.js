import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: #fff;
`;

function App() {
  return (
    <Wrapper>
      <BoxOne>
        <Text>Hello !</Text>
      </BoxOne>
      <BoxTwo />
    </Wrapper>

    // <div style={{display: "flex"}}>
    //   <div style={{ backgroundColor: "teal", width: 100, height: 100 }}>
    //      <span style={{ color: "#fff" }}>Hello !</span>
    //   </div>
    //   <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    // </div>
  );
}

export default App;
