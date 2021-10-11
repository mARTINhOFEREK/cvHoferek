import styled from "styled-components"
import useStore from "../store"
import { motion } from "framer-motion"

const mainColor = useStore.getState().mainColor

const SetLanguage = () => {
  const setCZ = useStore((state) => state.setCZ)
  const setEN = useStore((state) => state.setEN)
  const language = useStore((state) => state.language)

  return (
    <Lang>
      <Czech onClick={setCZ} whileHover={{ fontSize: "24px" }} lang={language}>
        CZ
      </Czech>
      <span>|</span>
      <English
        onClick={setEN}
        whileHover={{ fontSize: "24px" }}
        lang={language}
      >
        EN
      </English>
    </Lang>
  )
}

export default SetLanguage

const Lang = styled.span`
  color: ${mainColor};
  position: absolute;
  right: 20px;
  top: 20px;
  > button {
    background: none;
    border: none;
    cursor: pointer;
  }
  > span {
    pointer-events: none;
  }
`

const Czech = styled(motion.button)`
  color: ${(props) => (props.lang === "cz" ? mainColor : "#b4bdcc")};
`

const English = styled(motion.button)`
  color: ${(props) => (props.lang === "en" ? mainColor : "#b4bdcc")};
`
