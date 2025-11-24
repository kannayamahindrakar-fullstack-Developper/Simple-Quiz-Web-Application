


let question=document.querySelector("h2");
let options=document.querySelectorAll(".option");
let nextbtn=document.querySelector(".nextbtn");


const questions=[{question:"who is the prime minister of India?",
options:["Narendra Modi","Amit Shah","Rajnath Singh","Yogi Adityanath"],answer:0},

{
question:"What is the capital of India?",
options:["Mumbai","Chennai","New Delhi","Kolkata"],answer:2
},{
question:"What is the currency of India?",
options:["Dollar","Euro","Rupee","Yen"],answer:2
},{
question:"Which is the largest state in India?",
options:["Rajasthan","Maharashtra","Uttar Pradesh","Gujarat"],answer:0
}];

let qindex=0;
function loadquestion(){
    question.textContent=questions[qindex].question;
    options.forEach((option,index)=>{
        option.textContent=questions[qindex].options[index];
    })
}
function validateanswer(){
    options.forEach((option,index)=>{
        option.addEventListener("click",()=>{
            if(index===questions[qindex].answer){
                option.style.backgroundColor="green";
                buttondisable();
                updatescore();

            }else{
                option.style.backgroundColor="red";
                showanswer();
                buttonenable();

            }
        })
    })
}


nextbtn.addEventListener("click",()=>{
    buttonenable();
    qindex++;
    if(qindex<questions.length){
        loadquestion();
        options.forEach((option)=>{
            option.style.backgroundColor="";
        })
    }else{
        alert("Quiz Over");

    }
});
function showanswer(){
    options.forEach((option,index)=>{
        if(index===questions[qindex].answer){
            option.style.backgroundColor="green";
        }
    })
}function buttondisable(){
    options.forEach((option)=>{
        option.style.pointerEvents="none";
    })
}
function buttonenable(){
    options.forEach((option)=>{
        option.style.pointerEvents="auto";
    })
}
let score=0;
document.querySelector(".resetbtn").addEventListener("click",()=>{
    qindex=0;
    loadquestion();
    buttonenable();     
    options.forEach((option)=>{
        option.style.backgroundColor="";
        score=0;
        document.getElementById("score").textContent=score;
    }
    
    );
});

function updatescore(){
    score++;
    document.getElementById("score").textContent=score;
    if(qindex===questions.length-1){
        alert("Your final score is "+score+"/"+questions.length);
    }
    
}    



validateanswer();
loadquestion();