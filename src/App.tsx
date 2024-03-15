import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: #fff;
  margin-top: 300px;
  border-radius: 16px;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  end: {
    opacity: 0,
    y: 50,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Toggle</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="start"
            animate="visible"
            exit="end"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
