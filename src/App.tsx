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
  height: 200px;
  background-color: #fff;
  border-radius: 16px;
  font-size: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  gap: 10px;
  width: 50vw;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const overlayVariants = {
  gettingDark: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  gettingBright: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};

function App() {
  const [clickedId, setClickedId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box key={n} layoutId={n} onClick={() => setClickedId(n)}></Box>
        ))}
      </Grid>

      <AnimatePresence>
        {clickedId ? (
          <Overlay
            onClick={() => setClickedId(null)}
            variants={overlayVariants}
            initial="gettingDark"
            animate="gettingBright"
            exit="exit"
          >
            <Box layoutId={clickedId} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
