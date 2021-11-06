import styled from "styled-components"
import useStore from "../store"

/* Colors from store */
const keywordsCodeColor = useStore.getState().keywordsCodeColor
const tagNameCodeColor = useStore.getState().tagNameCodeColor
const propContCodeColor = useStore.getState().propContCodeColor
const propNameCodeColor = useStore.getState().propNameCodeColor
const functionCodeColor = useStore.getState().functionCodeColor
const componentCodeColor = useStore.getState().componentCodeColor
const defaultCodeColor = useStore.getState().defaultCodeColor
const commentCodeColor = useStore.getState().commentCodeColor

/* Render import line*/
export const RenImport = ({ im, fr }) => {
  /*  render import line  
      im - import
      fr - from
  */
  return (
    <div>
      <Item iColor={keywordsCodeColor} iCursive>
        import
      </Item>
      &nbsp;
      <Item iColor={tagNameCodeColor}>{im}</Item>
      &nbsp;
      <Item iColor={keywordsCodeColor} iCursive>
        from
      </Item>
      &nbsp;
      <Item iColor={propContCodeColor}>&quot;{fr}&quot;</Item>
    </div>
  )
}
/* Render Component  */
export const RenComponent = ({ cName, cTab, cSingle, cProps, children }) => {
  /*  render component
      cName - name of component
      cTab - indentation
      cSingle - boolean, single without close tag
      cProps - array of props of component
  */
  return (
    <>
      <div style={{ marginLeft: cTab }}>
        &lt;
        <Item
          iColor={
            cName && cName.charAt(0) === cName.charAt(0).toUpperCase()
              ? componentCodeColor
              : tagNameCodeColor
          }
        >
          {cName}
        </Item>
        {cProps && (
          <>
            {cProps.map((item) => (
              <div key={item.id}>
                &nbsp;
                <Item iColor={propNameCodeColor}>{item.cPropName}</Item>=
                <Item iColor={propContCodeColor}>&quot;{item.cProp}&quot;</Item>
              </div>
            ))}
          </>
        )}
        {cSingle && <span>/</span>}
        &gt;
      </div>
      {children}
      {!cSingle && (
        <div style={{ marginLeft: cTab }}>
          &lt;/
          <Item
            iColor={
              cName && cName.charAt(0) === cName.charAt(0).toUpperCase()
                ? componentCodeColor
                : tagNameCodeColor
            }
          >
            {cName}
          </Item>
          &gt;
        </div>
      )}
    </>
  )
}
/* Render Function  */
export const RenFunction = ({ fName, fProps, children }) => {
  /*  render component
      fName - name of function
      fProps - array of properties
  */

  return (
    <div>
      <Item iColor={keywordsCodeColor} iCursive>
        const
      </Item>
      &nbsp;
      <Item iColor={functionCodeColor}>{fName}&nbsp;=&nbsp;</Item>
      <Item iColor={functionCodeColor}>{"("}</Item>
      {fProps && (
        <>
          <Item iColor={functionCodeColor}>{"{ "}</Item>
          {fProps.map((item, i) => (
            <span>
              {item}
              {!(fProps.length === i + 1) && <span>, </span>}
            </span>
          ))}
          <Item iColor={functionCodeColor}>{" }"}</Item>
        </>
      )}
      <Item iColor={functionCodeColor}>{")"}</Item>
      <Item iColor={functionCodeColor}>&nbsp;=&gt;&nbsp;</Item>
      <Item iColor={functionCodeColor}>{"{"}</Item>&nbsp;
      <br />
      <Item iColor={keywordsCodeColor} iCursive iTab="20px">
        return
      </Item>
      &nbsp;
      <Item iColor={keywordsCodeColor}>{"("}</Item>&nbsp;
      {children}
      <Item iColor={keywordsCodeColor} iTab="20px">
        {")"}
      </Item>
      <br />
      <Item iColor={functionCodeColor}>{"}"}</Item>
      <div>
        <br />
        <Item iColor={keywordsCodeColor} iCursive>
          export
        </Item>
        &nbsp;
        <Item iColor={keywordsCodeColor} iCursive>
          default
        </Item>
        &nbsp;
        <Item iColor={functionCodeColor}>{fName}</Item>
      </div>
    </div>
  )
}
/* Render Comment alias Link to Repository */
export const RenComment = (props) => {
  return (
    <div>
      <Item iColor={commentCodeColor}>&#47;&#42;&nbsp;</Item>
      <a
        href="https://github.com/stovnik/cvHoferek"
        target="_blank"
        rel="noreferrer noopener"
      >
        web repo
      </a>
      <Item iColor={commentCodeColor}>&nbsp;&#42;&#47;</Item>
    </div>
  )
}

/* Styles */
const Item = styled.span`
  color: ${(props) => props.iColor || defaultCodeColor};
  margin-left: ${(props) => props.iTab || "0px"};
  font-family: ${(props) => props.iCursive && "FiraCodeiScript-Italic"};
  font-size: ${(props) => props.iCursive && "1.12em"};
  & + a {
    color: ${commentCodeColor};
  }
`
