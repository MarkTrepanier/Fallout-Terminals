/*
"terminal":{
    terminal_name:""
    header:""
    page{
        prompt:"",
        ulist:{title:"",[]},
        olist:{title:"",[]},
        prompt_2:"",
        ulist_2:{title:"",[]},
        olist_2:{title:"",[]},
    }
}*/
let dummyTerminals = {
    "2222022211:RobCo:VisRep0":{

        terminal_name: "2222022211:RobCo:VisRep0",
        header:"ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
        page_0: {
            prompt:"Welcome Mike",
            userOptions:[{text:"[LOGS]",route:"page_1"},{text:"[MAIL]",route:"page_4"}]
        },
        page_1: {
            prompt:"-LOGS-",
            userOptions:[{text:"Polar",route:"page_2"},{text:"Forklift Position",route:"page_3"},{text:"[back]",route:"page_0"},]
        },
        page_2: {
            prompt:`Based in Worcester, Massachusetts, Polar Beverages has remained a beloved hometown favorite while growing into a national cult favorite. As consumer tastes have evolved so has Polar Beverages’ ability to innovate and meet the growing demand for sparkling refreshment. From their heritage recipes, such as Polar Orange Dry and Birch Beer, to the playful introduction of modern seasonal Polar Seltzers, the people of Polar Beverages continue to love what they do and work hard to uphold the values of its founder.`,
            userOptions:[{text:"[back]",route:"page_1"}]
        },        
        page_3: {
            prompt:`Overview: Move product by loading and unloading trailers`,
            ulist:{title:"Responsibilities:", list:["Stripping down bottle trailers for production","Stripping down Polar trailers so they can be loaded","Deliver bottles to production line","Stacking cases on pallets","Notify supervisor of wet or damaged cases","Product rotation","Check case codes and shrink wrap","Promote cleanliness in areas"]},
            userOptions:[{text:"[back]",route:"page_1"}]
        },
        page_4: {
            prompt:"-MAIL-",
            userOptions:[{text:"from:Duane, 7/13/2074",route:"page_5"},{text:"to:Duane, 7/14/2074",route:"page_6"},{text:"from:Julie, 7/14/2074",route:"page_7"},{text:"[back]",route:"page_0"}]
        },
        page_5: {
            prompt:"Mike, You made me look like an idiot today at todays meeting. Why cant you finish your work? I better not lose my jopb over this!",
            userOptions:[{text:"[back]",route:"page_4"}]
        },
        page_6: {
            prompt:"Look Duane, i'm sorry. I have this handled. You are going to be fine. I'm going to hae a chat with HR",
            userOptions:[{text:"[back]",route:"page_4"}]
        },
        page_7: {
            prompt:"Hey Mike. About last night. Can we talk?",
            userOptions:[{text:"[back]",route:"page_4"}]
        },

    },
    "2222022213:RobCo:VisRep1":{
        terminal_name: "2222022213:RobCo:VisRep1",
        header:"ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
        page_0: {
            prompt:"Welcome Mike",
            userOptions:[{text:"[LOGS]",route:"page_1"},{text:"[MAIL]",route:"page_4"}]
        },
        page_1: {
            prompt:"-LOGS-",
            userOptions:[{text:"Polar",route:"page_2"},{text:"Forklift Position",route:"page_3"},{text:"[back]",route:"page_0"},]
        },
        page_2: {
            prompt:`Based in Worcester, Massachusetts, Polar Beverages has remained a beloved hometown favorite while growing into a national cult favorite. As consumer tastes have evolved so has Polar Beverages’ ability to innovate and meet the growing demand for sparkling refreshment. From their heritage recipes, such as Polar Orange Dry and Birch Beer, to the playful introduction of modern seasonal Polar Seltzers, the people of Polar Beverages continue to love what they do and work hard to uphold the values of its founder.`,
            userOptions:[{text:"[back]",route:"page_1"}]
        },        
        page_3: {
            prompt:`Overview: Move product by loading and unloading trailers`,
            olist:{title:"Responsibilities:", list:["Stripping down bottle trailers for production","Stripping down Polar trailers so they can be loaded","Deliver bottles to production line","Stacking cases on pallets","Notify supervisor of wet or damaged cases","Product rotation","Check case codes and shrink wrap","Promote cleanliness in areas"]},
            userOptions:[{text:"[back]",route:"page_1"}]
        },
        page_4: {
            prompt:"-MAIL-",
            userOptions:[{text:"from:Duane, 7/13/2074",route:"page_5"},{text:"to:Duane, 7/14/2074",route:"page_6"},{text:"from:Julie, 7/14/2074",route:"page_7"},{text:"[back]",route:"page_0"}]
        },
        page_5: {
            prompt:"Mike, You made me look like an idiot today at todays meeting. Why cant you finish your work? I better not lose my jopb over this!",
            userOptions:[{text:"[back]",route:"page_4"}]
        },
        page_6: {
            prompt:"Look Duane, i'm sorry. IU have this handled. You are going to be fine. I'm going to hae a chat with HR",
            userOptions:[{text:"[back]",route:"page_4"}]
        },
        page_7: {
            prompt:"Hey Mike. About last night. Can we talk?",
            userOptions:[{text:"[back]",route:"page_4"}]
        },

    },
    "2222022214:RobCo:VisRep2":{
        terminal_name: "2222022214:RobCo:VisRep2",
        header:"ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
        page_0: {
            prompt:"Welcome Mike",
            userOptions:[{text:"[LOGS]",route:"page_1"},{text:"[MAIL]",route:"page_4"}]
        },
        page_1: {
            prompt:"-LOGS-",
            userOptions:[{text:"Polar",route:"page_2"},{text:"Forklift Position",route:"page_3"},{text:"[back]",route:"page_0"},]
        },
        page_2: {
            prompt:`Based in Worcester, Massachusetts, Polar Beverages has remained a beloved hometown favorite while growing into a national cult favorite. As consumer tastes have evolved so has Polar Beverages’ ability to innovate and meet the growing demand for sparkling refreshment. From their heritage recipes, such as Polar Orange Dry and Birch Beer, to the playful introduction of modern seasonal Polar Seltzers, the people of Polar Beverages continue to love what they do and work hard to uphold the values of its founder.`,
            userOptions:[{text:"[back]",route:"page_1"}]
        },        
        page_3: {
            prompt:"Overview: Move product by loading and unloading \ntrailers",
            ulist:{title:"Responsibilities:", list:["Stripping down bottle trailers for production","Stripping down Polar trailers so they can be loaded","Deliver bottles to production line","Stacking cases on pallets","Notify supervisor of wet or damaged cases","Product rotation","Check case codes and shrink wrap","Promote cleanliness in areas"]},
            ulist_2:{title:"Minimum Requirements:",list:["Forklift Operator training and certification","Ability to lift 50 lbs. or more","Forklift Operator training and certification","Ability to lift 50 lbs. or more"]},
            userOptions:[{text:"[back]",route:"page_1"}]
        },
        page_4: {
            prompt:"-MAIL-",
            userOptions:[{text:"from:Duane, 7/13/2074",route:"page_5"},{text:"to:Duane, 7/14/2074",route:"page_6"},{text:"from:Julie, 7/14/2074",route:"page_7"},{text:"[back]",route:"page_0"}]
        },
        page_5: {
            prompt:"Mike, You made me look like an idiot today at todays meeting. Why cant you finish your work? I better not lose my jopb over this!",
            userOptions:[{text:"[back]",route:"page_4"}]
        },
        page_6: {
            prompt:"Look Duane, i'm sorry. IU have this handled. You are going to be fine. I'm going to hae a chat with HR",
            userOptions:[{text:"[back]",route:"page_4"}]
        },
        page_7: {
            prompt:"Hey Mike. About last night. Can we talk?",
            userOptions:[{text:"[back]",route:"page_4"}]
        },

    },
}
export default dummyTerminals;