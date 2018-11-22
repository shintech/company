import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] 6ch [row-2] auto [row-3] 6ch [stop end];
  grid-template-columns: [start column-1] 25vh [column-2] auto [end];
  
  main {
    min-height: ${props => props.theme.height};
    grid-row: 2;
    grid-column: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  svg.main-icon {
    grid-row: 1;
    grid-column: 2;
    margin-left: auto;
    margin-right: 2ch;
    height: 8ch;
    width: 10ch;
    fill: ${props => props.theme.text};
  }
  
  @media (max-width: 700px) {
    background-color: snow;

    svg.main-icon {
        display: none;
      }
  }
`

export default Wrapper
