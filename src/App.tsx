import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        initial={{ scale: 0 }}
        animate={{ rotateZ: 360, scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      />
      <motion.div></motion.div>
    </Wrapper>
  );
}

export default App;
