let dummyTerminals = {
    "2222022211:RobCo:VisRep0":{

        terminal_name: "2222022211:RobCo:VisRep0",
        header:"ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
        page_0: {
            prompt:"Welcome to ROBCO OS ELECTRIC MAIL SERVICE!",
            userOptions:[{text:"from @JohnSmith: Mike, WTH :@03/14/2074",route:"page_1"},{text:"from @JohnSmith: dead :@03/14/2074",route:"page_2"}]
        },
        page_1: {
            prompt:"fuck you Mike, You made me look like an idiot today at todays meeting. Why cant you finish your work?",
            userOptions:[{text:"-back-",route:"page_0"}]
        },
        page_2: {
            prompt:"Did you really think i wouldn't be able to tell you are sleeping with the head of HR? you are dead buddy!",
            userOptions:[{text:"-back-",route:"page_0"}]
        },

    },
    "2222022213:RobCo:VisRep1":{
        terminal_name: "2222022213:RobCo:VisRep1",
        header:"ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
        page_0: {
            prompt:"Are you my favorite?",
            userOptions:[{text:"yes!",route:"page_1"},{text:"go away!",route:"page_2"}]
        },
        page_1: {
            prompt:"you know you are! YEAH!",
            userOptions:[{text:"heck yeah! peace!",route:"page_0"},{text:"get out of my face",route:"page_2"}]
        },
        page_2: {
            prompt:"oh. bye!",
            userOptions:[{text:"-exit-",route:"page_0"}]
        },
    },
    "2222022214:RobCo:VisRep2":{
        terminal_name: "2222022214:RobCo:VisRep2",
        header:"ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
        page_0: {
            prompt:"Are you a mutant?",
            userOptions:[{text:"yes",route:"page_1"},{text:"go away!",route:"page_2"}]
        },
        page_1: {
            prompt:"oof.. well.. great",
            userOptions:[{text:"goodbye racist!",route:"page_0"},{text:"is that.. that cool?",route:"page_2"}]
        },
        page_2: {
            prompt:"um. bye!",
            userOptions:[{text:"-exit-",route:"page_0"}]
        },
    },
}
export default dummyTerminals;