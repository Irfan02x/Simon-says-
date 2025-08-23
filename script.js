let btns = document.querySelectorAll(".button");
let h3 = document.querySelector("h3");
let score_box= document.querySelector(".box_score")
let start =false;
let level=0;
let max=0;
let color=["orange", "blue", "green", "purpel"];
let gameseq=[];
let userseq=[];

document.addEventListener("keypress", function(){
    if(start==false){
    start=true;
    levelup();
}
})
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let random= Math.floor(Math.random() *3);
    let randomcolor= color[random]; 
    let randbtn =  document.querySelector(`.${randomcolor}`)
    let btnn=randbtn.getAttribute("id")
    gameseq.push(btnn);
    flash(randbtn);
}
function checkans(idx){
      if(gameseq[idx]==userseq[idx]){
        if(gameseq.length == userseq.length){
        setTimeout(levelup,1000);}
      }else{
        h3.innerHTML=`Game over! Your score is ${level} <br><br>Press Any Key To Start Again`;
           document.querySelector("body").style.backgroundColor="red";
           setTimeout(function(){ 
            document.querySelector("body").style.backgroundColor="blanchedalmond"}, 100);
            upadte_score(level);
            reset(); 
      }
}


function flash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   }, 200);
}
function btnpress(){
     let btn = this;
     let btnn=btn.getAttribute("id")
     userseq.push(btnn);
    flash(btn);
   max_score(level);
}
for(btn of btns){
    btn.addEventListener("click", btnpress);
}
 
function reset(){
            gameseq=[];
            userseq=[];
            start=false;
            level=0
}

 function upadte_score(level) {
       let score = document.createElement("h4");
       let text= `your previous score ${level}`;
        score.innerText=text;
        score_box.append(score);
}
function max_score(level){
  let max_score = document.querySelector("h4")
  if(max<level){
    max=level;
  }
  let text= `High score ${max}`;
        max_score.innerText=text;
         checkans(userseq.length-1);
}
