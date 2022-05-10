let terminals = [
    {
        terminal_name: "2222022211:RobCo:VisRep0",
        page_0: {
            prompt:"hello from the outside!",
            userOptions:[{text:"Hi!",route:"1"},{text:"go away!",route:"2"}]
        },
        page_1: {
            prompt:"you are cool",
            userOptions:[{text:"goodbye",route:"0"},{text:"oki. bye",route:"2"}]
        },
        page_2: {
            prompt:"oh. bye!",
            userOptions:[{text:"-exit-",route:"1"}]
        },

    },
    {
        terminal_name: "2222022213:RobCo:VisRep1"
    },
    {
        terminal_name: "2222022214:RobCo:VisRep2"
    },
    {
        terminal_name: "2222022215:RobCo:VisRep3"
    },
    {
        terminal_name: "2222022216:RobCo:VisRep4"
    }
]
export default function terminalsList(){
    return terminals
}