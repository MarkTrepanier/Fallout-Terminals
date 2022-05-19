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
    
    "PolarCaps/users/Mike_Lagowski":{
        terminal_name: "PolarCaps/users/Mike_Lagowski",
        header:"Welcome to ROBCO Industries (TM) Termlink -PolarCaps Offices- <user:Mike_Logowski>",
        page_0: {
            prompt:`Bloomberg Coffee Chat Prep

            1. Introduction to who you are: Behavioral Interview Prep
            Job Description: https://careers.bloomberg.com/job/detail/95864
            
            Format it in this way to knock out of the park:
            Where you are now + what your technical "specialty" is
            
            
            
            
            Where you were before
            
            
            
            
            Where you are going next (tie it back to this role!)
            
            
            
            
            2. Project highlight: Breaking Down a Technical Project 
            
            3. Q&A on Bloomberg Culture
            Prepare 2-3 questions to ask your interviewer
            Review company careers page and explore mission, values, etc. 
            Review LinkedIn page and explore about, activity, etc. 
            Review Behavioral Interview Prep`,
            userOptions:[{text:"[LOGS]",route:"page_1"},{text:"[MAIL]",route:"page_4"},{text:"[CONTROL SAFE]",route:"page_8"},]
        },
        page_1: {
            prompt:"-LOGS-",
            userOptions:[{text:"PolarCaps",route:"page_2"},{text:"Forklift Position",route:"page_3"},{text:"[back]",route:"page_0"},]
        },
        page_2: {
            prompt:`Based in Worcester, Massachusetts, PolarCaps Beverages has remained a beloved hometown favorite while growing into a national cult favorite. As consumer tastes have evolved so has PolarCaps Beverages’ ability to innovate and meet the growing demand for sparkling refreshment. From their heritage recipes, such as PolarCaps Orange Dry and Birch Beer, to the playful introduction of modern seasonal PolarCaps Seltzers, the people of PolarCaps Beverages continue to love what they do and work hard to uphold the values of its founder.`,
            userOptions:[{text:"[back]",route:"page_1"}]
        },        
        page_3: {
            prompt:"Overview: Move product by loading and unloading \ntrailers",
            ulist:{title:"Responsibilities:", list:["Stripping down bottle trailers for production","Stripping down PolarCaps trailers so they can be loaded","Deliver bottles to production line","Stacking cases on pallets","Notify supervisor of wet or damaged cases","Product rotation","Check case codes and shrink wrap","Promote cleanliness in areas"]},
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
        page_8: {
            prompt:"-CONTROL SAFE-",
            userOptions:[{text:"[Disengage Lock]",route:"page_0"}]
        },

    },
}
export default dummyTerminals;