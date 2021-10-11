import React from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import useStore from "../store"

const Info = ({ name, position }) => {
  const language = useStore((state) => state.language)

  return (
    <AnimatePresence exitBeforeEnter>
      <Infodiv
        as={motion.div}
        key={language}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h2>Martin Hoferek</h2>
        <p style={{ paddingTop: "1.5vh" }}>
          {language === "en" ? "Hi,👋" : "Dobrý den,👋"}
        </p>
        {/*  <p>{language === "en" ? "my name is" : "jmenuju se"} Martin Hoferek.</p> */}
        <p>
          {language === "en"
            ? "I noticed with interest your advertisement " +
              (position ? "for " + position + " " : "") +
              "in your company" +
              (name ? " " + name + "." : ".")
            : "Zaujala mě pracovní nabídka na pozici " +
              (position ? position + " " : "") +
              "ve Vaší firmě" +
              (name ? " " + name + "." : ".")}
        </p>
        <p>
          {language === "en"
            ? "If you are interested too, please contact me at telephone or email below."
            : "V případě že jsem zaujal i já Vás, budu rád když mě kontaktujete na jednu z níže uvedených možností."}
        </p>

        <div>
          ✉️
          &#104;&#111;&#102;&#101;&#114;&#101;&#107;&#46;&#109;&#97;&#114;&#116;&#105;&#110;&#64;&#101;&#109;&#97;&#105;&#108;&#46;&#99;&#122;
        </div>
        <div>
          📱 &#43;&#52;&#50;&#48; &#55;&#51;&#57; &#49;&#56;&#50;
          &#56;&#57;&#57;
        </div>
        <p>
          {language === "en"
            ? "Thank you for your time 😊"
            : "Díky za váš čas 😊"}
        </p>
        {/* <p>
          neco naeo aos djoaisdh aosd iuads fhuiasdfg asiduogf iuasd fiuasd
          fausdi fgiausd fiausd hfuaisohd fuiash dfiuasd- fuas dfuias dfuias
          hdfuiash dfuias asduhf uioashd fioashd fioa odfjioas dfiojoiadsjfoi
          asiodjf ijasod fiojasiodjf iojaiosdj foijioasjdiof oiasjod foisad
          fioasjdofi aosidjf oija sdofijoaisdf
        </p>
        <p>
          neco naeo aos djoaisdh aosd iuads fhuiasdfg asiduogf iuasd fiuasd
          fausdi fgiausd fiausd hfuaisohd fuiash dfiuasd- fuas dfuias dfuias
          hdfuiash dfuias asduhf uioashd fioashd fioa odfjioas dfiojoiadsjfoi
          asiodjf ijasod fiojasiodjf iojaiosdj foijioasjdiof oiasjod foisad
          fioasjdofi aosidjf oija sdofijoaisdf
        </p> */}
      </Infodiv>
    </AnimatePresence>
  )
}
export default Info

const Infodiv = styled.div`
  max-width: 300px;
  padding-bottom: 20%;
  > h2 {
    background-color: #252930;
    font-weight: 100;
    color: #fff;
    text-align: center;
    padding: 10px 5px;
  }
  > p {
    font-weight: 100;
  }
  @media (max-width: 400px) {
    > h2 {
      font-size: 1.3em;
    }
  }
  /*   & {
    padding: 0 5vw;
  } */
`
