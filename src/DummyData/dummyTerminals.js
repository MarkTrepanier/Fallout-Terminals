let dummyTerminals = {
    "2222022211:RobCo:VisRep0":{

        terminal_name: "2222022211:RobCo:VisRep0",
        header:"ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
        page_0: {
            prompt:"hello from the outside!",
            userOptions:[{text:"Hi!",route:"page_1"},{text:"go away!",route:"page_2"}]
        },
        page_1: {
            prompt:"you are cool",
            userOptions:[{text:"goodbye",route:"page_0"},{text:"you are hot",route:"page_2"}]
        },
        page_2: {
            prompt:"oh. bye!",
            userOptions:[{text:"-exit-",route:"page_1"}]
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
            userOptions:[{text:"-exit-",route:"page_1"}]
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
            userOptions:[{text:"-exit-",route:"page_1"}]
        },
    },
}
export default dummyTerminals;