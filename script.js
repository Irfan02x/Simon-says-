let btns = document.querySelectorAll(".button");
let h3 = document.querySelector("h3");
let start =false;
let level=0;
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
    checkans(userseq.length-1);
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