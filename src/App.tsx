import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-963, 960], [-360, 360]);
  useEffect(() => {
    // scale.on("change", () => console.log(x.get()));
    rotateZ.on("change", () => console.log(rotateZ.get()));
  }, [x]);

  return (
    <Wrapper>
      <Box drag="x" dragSnapToOrigin style={{ x, rotateZ }}></Box>
    </Wrapper>
  );
}

export default App;
