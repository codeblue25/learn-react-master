import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 120px;
  background-color: #fff;
  border-radius: 16px;
  font-size: 28px;
`;

const boxVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const showPrev = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const showNext = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <Box
          key={visible}
          variants={boxVariants}
          initial="entry"
          animate="visible"
          exit="exit"
          custom={isBack}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={showPrev}>Show Prev</button>
      <button onClick={showNext}>Show Next</button>
    </Wrapper>
  );
}

export default App;
