import styled from 'styled-components'

const Wrapper = styled.nav`
  grid-row: span 3;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  background-color: ${props => props.theme.background};
  
  a {
  display: flex;
  align-items: center;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.tagBackground};
    display: flex;

    border-color: black;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-radius: 1ch 0 0 1ch;

    text-decoration: none;
    padding: 2ch;
    font-size: 2ch;
    
    :hover {
      background-color: ${props => props.theme.hover};
      color: ${props => props.theme.hoverText};
      
      svg {
        fill: black;
      }         
    }
    
    &.icon {
     margin-left: auto;
    }
    
    svg {
      height: 6.5ch;
      width: 6.5ch;
      fill: ${props => props.theme.svg};
    }
  }

  svg.logo {
    height: 6ch;
    width: 6ch;
    margin: auto auto 0 auto;
    
    @media (max-width: 700px) {
      margin: 0 0 0 auto;
    }      
  }

  .active {
    background-color: ${props => props.theme.active};
    color: ${props => props.theme.activeText};
  
    &:hover{
      background-color: ${props => props.theme.activeHover};
      color: ${props => props.theme.activeHoverText};
      cursor: not-allowed;
    }  

    & svg {
      fill: ${props => props.theme.activeSVG};
    }
  }

  @media (max-width: 700px) {
    grid-row: 1;
    grid-column: span 3;
    flex-direction: row;
    
    a {
      border-radius: 0;
      
      :first-child {
        border-radius: 1ch 0 0 1ch;
      }
      
    }
  } 
`

export default Wrapper
