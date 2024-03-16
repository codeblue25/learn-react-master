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
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const showNext = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              key={i}
              variants={boxVariants}
              initial="invisible"
              animate="visible"
              exit="exit"
            >
              {i}
            </Box>
          ) : null
        )}
        <button onClick={showNext}>Show Next</button>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
