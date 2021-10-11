import "./App.css"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import useStore from "./store"
/* Assets */
import profile from "./profile.png"
import arrow_anim from "./arrow_anim.svg"
/* Components */
import CV from "./components/CV"
import SetLanguage from "./components/SetLanguage"
import Info from "./components/Info"
import Loader from "./components/Loader"

const App = () => {
  /* Getting query params - zadam do adresy -> adresa?com=NazevFirmy&pos=Nazevpozice (mezery se pisou jako procento*/
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const company = searchParams.get("com") || ""
  const position = searchParams.get("pos") || ""
  /* Display loader 2s */
  const [isVisible, setVisible] = useState(true)
  setTimeout(() => {
    setVisible(false)
  }, 2000)

  return (
    <div className="App">
      <Loader isVisible={isVisible} />
      <Main>
        <Left>
          <CV />
        </Left>
        <Right>
          <Info name={company} position={position} />
          <SetLanguage />
          <img src={arrow_anim} alt="arrow animation" />
        </Right>
        <Image>
          <img src={profile} alt="profile" />
        </Image>
      </Main>
    </div>
  )
}

export default App

/* --------------- Styling ------------------------- */

/* Load colors from store */
const mainColor = useStore.getState().mainColor
const defaultCodeColor = useStore.getState().defaultCodeColor

const Left = styled.div`
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  background: ${mainColor};
  min-height: 100vh;
  font-size: clamp(0.85rem, 0.8vw, 1rem);
  color: ${defaultCodeColor};
  & {
    padding: 0 5vw;
  }
`
const Right = styled.div`
  letter-spacing: -0.02em;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  min-height: 100vh;
  font-size: clamp(0.85rem, 0.9vw, 1rem);
  > img {
    width: 35px;
    position: absolute;
    bottom: 10px;
    right: 30px;
    display: none;
  }
`

const Image = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s ease-out;
  pointer-events: none;
  > img {
    max-width: 80vw;
    max-height: 80vh;
    width: auto;
    height: auto;
  }
`

const Main = styled.div`
  display: flex;
  @media (max-width: 768px), (max-height: 700px) {
    flex-direction: column;
    ${Left} {
      min-height: 100vh;
      padding: 12% 12% 25% 12%;
      width: 100%;
      flex: 0 0 auto;
      order: 2;
    }
    ${Right} {
      min-height: 100vh;
      width: 100%;
      flex: 0 0 auto;
      & {
        padding: 10vw 20vw;
      }
      > img {
        display: block;
      }
    }
    ${Image} {
      position: fixed;
      left: -245px;
      bottom: 0px;
      width: 500px;
      flex: 0 0 auto;
    }
  }
  @media (max-width: 400px) {
    ${Left} {
      padding: 5% 12% 35% 12%;
    }
    ${Right} {
      > img {
        width: 30px;
      }
    }
  }
`
