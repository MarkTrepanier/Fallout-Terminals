import terminalsData from "../DummyData/dummyTerminals"
import Styled from  "styled-components"
import {useNavigate} from 'react-router-dom'

let data = terminalsData()
export default function TerminalsList(props) {
   const {activeTerminal, setActiveTerminal} = props
   let nav = useNavigate()
   return <div>
      {data.map((terminal) => <TerminalNameStyle key={terminal.terminal_name} onClick={() => {
         setActiveTerminal(terminal.terminal_name)
         console.log(terminal.terminal_name)
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