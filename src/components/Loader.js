import { motion, AnimatePresence } from "framer-motion"
import { containerVariants, svgVariants, pathVariants } from "./variants"
import styled from "styled-components"

const Loader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <Container
          variants={containerVariants}
          key="modal"
          initial={false}
          animate="show"
          exit="hidden"
        >
          <SvgItem
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 385.46 572.49"
            variants={svgVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <PathItem
              d="M38.29,124.35C26.44,97.22,31.05,63.64,49.77,40.7s50.69-34.19,79.65-28,53.58,29.46,61.33,58c5.58,20.57,2.86,42.41-.85,63.4-9.53,53.89-25.28,106.46-41.85,158.61C132.07,343,114.11,395,76.66,432.08c-9.26,9.18-20.24,17.59-33.13,19.56s-27.82-4.49-31.63-17c-3.76-12.32,4.71-25.85,16.23-31.62s25.13-5.4,37.88-3.58c40,5.68,77.53,24.15,117.76,27.65,38.59,3.35,77.76-7.61,110.88-27.69s60.42-48.94,81.61-81.37"
              variants={pathVariants}
            />
            <PathItem
              d="M208.71,249.54l79.6-98.13Q247.93,362.51,189,569.48"
              variants={pathVariants}
            />
          </SvgItem>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Loader

/* Styling */

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 10;
`

const SvgItem = styled(motion.svg)`
  width: 2rem;
`

const PathItem = styled(motion.path)`
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 16px;
`
