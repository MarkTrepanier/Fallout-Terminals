import terminalsData from "../DummyData/terminals"
import Styled from  "styled-components"

let data = terminalsData()
export default function TerminalsList(props) {
   return <div>
      {data.map((terminal) => <TerminalNameStyle key={terminal.terminal_name} onClick={() => console.log(terminal.terminal_name)}>[{terminal.terminal_name}]</TerminalNameStyle>)}
   </div>
};

const TerminalNameStyle = Styled.div`
   -webkit-user-select: none; /* Safari */        
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* IE10+/Edge */
   user-select: none; /* Standard */

   margin-top: 5%;
   font-size:2rem;
`

//todo: make text unselectable
//todo: make clickable, returning page data?
//todo: switch from dummy data to backend support