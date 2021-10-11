/* variants of animations for framer-motion */
/* ---------------------------------------------------- */
/*  */

/* Animations for loader */
export const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1.6,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
  },
}
export const svgVariants = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.8,
    },
  },
}
export const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  show: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "backOut",
    },
  },
  exit: {},
}
