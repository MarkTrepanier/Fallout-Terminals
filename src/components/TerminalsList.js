import terminalsData from "../DummyData/terminals"

let data = terminalsData()
export default function TerminalsList(props) {
   return <div>
      {data.map((terminal)=><div>{terminal.terminal_name}</div>)}
   </div>
};