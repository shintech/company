import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1ch;
  display: flex;
  flex-wrap: wrap;  
  align-items: stretch;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  list-style: none;

  li { 
    text-align: center;
    padding-bottom: 1ch;
    
    :hover {
      cursor: pointer;
      background-color: Moccasin;
      border-radius: 1ch;
    }
    
    svg {
      height: 15ch;
      width: 15ch;
      margin: 1ch;
    }
  }      
`

export default Wrapper
