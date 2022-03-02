import terminalsData from "../DummyData/terminals"

let data = terminalsData()
export default function TerminalsList(props) {
   return <div>
      {data.map((terminal)=><div key={terminal.terminal_name} onClick={()=>console.log(terminal.terminal_name)}>[{terminal.terminal_name}]</div>)}
   </div>
};
//todo: deal with react plugin bug
//todo: make text unselectable
//todo: make clickable, returning page data?
//todo: switch from dummy data to backend support