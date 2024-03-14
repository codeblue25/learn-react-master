import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrapper = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  const boxWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BoxWrapper ref={boxWrapperRef}>
        <Box
          drag
          dragConstraints={boxWrapperRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        ></Box>
      </BoxWrapper>
    </Wrapper>
  );
}

export default App;
