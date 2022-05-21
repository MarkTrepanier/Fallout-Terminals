import dummyTerminals from "../DummyData/dummyTerminals"
import Styled from  "styled-components"
import {useNavigate} from 'react-router-dom'
import useSound from "use-sound"
import clicks from '../assets/sounds/typing_keystroke_sequence_03.wav'
//typing_keystroke_single_hard_03.wav
//typing_keystroke_sequence_11.wav
//typing_keystroke_sequence_12.wav
//typing_keystroke_single_hard_03.wav
//typing_keystroke_single_hard_04.wav
//typing_keystroke_single_hard_07.wav
const data = dummyTerminals
export default function TerminalsList(props) {
   const [play]=useSound(clicks,{volume:.7})
   const {setActiveTerminal} = props
   let nav = useNavigate()
   return <div>
      {Object.values(data).map((terminal) => <TerminalNameStyle key={terminal.terminal_name} onClick={() => {
         play()
         setActiveTerminal(terminal)
         nav(`/terminal/${terminal.terminal_name}`)}}>[{terminal.terminal_name}]</TerminalNameStyle>)}
         <p>More Terminals on the way</p>
         <footer>'make your own' also in the works!</footer>
   </div>
};

const TerminalNameStyle = Styled.div`
   display: inline-block;
   width: 0px;
   margin-top: 2%;
   font-size:1rem;
   cursor: pointer;
   @media(max-width:800px){
      font-size: 1rem;
      h2{
         font-size:1rem;
      }
   }
`

//todo: make text unselectable
//todo: make clickable, returning page data?
//todo: switch from dummy data to backend support