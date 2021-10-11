import { AnimatePresence, motion } from "framer-motion"
import { RenImport, RenFunction, RenComponent, RenComment } from "./RenCode"
import useStore from "../store"

const CV = () => {
  const language = useStore((state) => state.language)
  const degree = language === "en" ? "Ing (like MEng)" : "Ing"
  const name1 =
    language === "en" ? "Brno University of Technology" : "VUT Brno FEKT"
  const desc1 =
    language === "en"
      ? "Cybernetics, Control and Measurements"
      : "Kybernetika, automatizace a měření"
  const desc2 =
    language === "en"
      ? "Intership with Bachelor Thesis"
      : "Stáž v rámci bakalářské práce"
  const desc3 =
    language === "en"
      ? "Control & Automation Engineer for hydroelectric power plants"
      : "Systémový inženýr řídících systémů vodních elektráren"
  const name4 = language === "en" ? "Freelancer" : "OSVČ"
  const desc4 =
    language === "en"
      ? "Automation and Creative agency"
      : "Automatizace, Kreativní studio"

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        style={{ padding: "40px 0" }}
        key={language}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <RenImport im="React" fr="react" />
        <RenImport im="MartinHoferek" fr="parents❤️" />
        <RenImport im={degree} fr="vut_brno" />
        <br />
        <RenFunction fName="CV" fExp fProps={["neco", "neco"]}>
          <RenComponent
            cName="div"
            cTab="40px"
            cProps={[{ id: 1, cPropName: "className", cProp: "Life" }]}
          >
            <RenComponent cName="Ing" cTab="60px" cSingle />
            <RenComponent cName="MartinHoferek" cTab="60px" cSingle />
            <RenComponent
              cName="Skill"
              cTab="60px"
              cSingle
              cProps={[
                { id: 1, cPropName: "years", cProp: "2012-2017" },
                { id: 2, cPropName: "name", cProp: name1 },
                {
                  id: 3,
                  cPropName: "desc",
                  cProp: desc1,
                },
              ]}
            />

            <RenComponent
              cName="Skill"
              cTab="60px"
              cSingle
              cProps={[
                { id: 1, cPropName: "years", cProp: "2015" },
                { id: 2, cPropName: "name", cProp: "Compass s.r.o." },
                {
                  id: 3,
                  cPropName: "desc",
                  cProp: desc2,
                },
              ]}
            />
            <RenComponent
              cName="Skill"
              cTab="60px"
              cSingle
              cProps={[
                { id: 1, cPropName: "years", cProp: "2017" },
                { id: 2, cPropName: "name", cProp: "Mavel a.s." },
                {
                  id: 3,
                  cPropName: "desc",
                  cProp: desc3,
                },
              ]}
            />
            <RenComponent
              cName="Skill"
              cTab="60px"
              cSingle
              cProps={[
                { id: 1, cPropName: "years", cProp: "2018-2021" },
                { id: 2, cPropName: "name", cProp: name4 },
                {
                  id: 3,
                  cPropName: "desc",
                  cProp: desc4,
                },
              ]}
            />
          </RenComponent>
        </RenFunction>
        <RenComment />
      </motion.div>
    </AnimatePresence>
  )
}

export default CV
