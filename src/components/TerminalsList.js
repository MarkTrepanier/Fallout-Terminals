import dummyTerminals from "../DummyData/dummyTerminals"
import Styled from  "styled-components"
import {useNavigate} from 'react-router-dom'

const data = dummyTerminals
export default function TerminalsList(props) {
   console.log(data)
 
   const {activeTerminal, setActiveTerminal} = props
   let nav = useNavigate()
   return <div>
      {Object.values(data).map((terminal) => <TerminalNameStyle key={terminal.terminal_name} onClick={() => {
         setActiveTerminal(terminal)
         console.log(terminal)
         nav(`/terminal/${terminal.terminal_name}`)}}>[{terminal.terminal_name}]</TerminalNameStyle>)}
   </div>
};

const TerminalNameStyle = Styled.div`
   display: inline-block;
   -webkit-user-select: none; /* Safari */        
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* IE10+/Edge */
   user-select: none; /* Standard */
   width: 0px;
   margin-top: 5%;
   font-size:2rem;
   @media(max-width:800px){
      font-size: 1rem;
   }
`

//todo: make text unselectable
//todo: make clickable, returning page data?
//todo: switch from dummy data to backend support