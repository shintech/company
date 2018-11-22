import styled from 'styled-components'

const Wrapper = styled.div`
  h1 {
    font-family: 'Rouge Script', cursive;
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.text};
    text-shadow: ${props => props.theme.textShadow};
    margin: 0;
    
    @media (max-width: 900px) {
      font-size: 10ch;
    }
  }
`

export default Wrapper
