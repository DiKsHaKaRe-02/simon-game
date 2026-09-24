let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns = ["green","teal","lightgreen","darkgrey"];
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function() {
    if(started==false){
    console.log("Game is started");
    started=true;
    levelUp();
}
});
function gameFlash(button){
   button.classList.add("flash");
    setTimeout(function(){
         button.classList.remove("flash");
    },250);
}
function userFlash(button){
   button.classList.add("userflash");
    setTimeout(function(){
         button.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let idx = Math.floor(Math.random()*3);
    let randomclr = btns[idx];
    let randbtn = document.querySelector(`.${randomclr}`);
    gameSeq.push(randomclr);
    console.log(gameSeq);
    gameFlash(randbtn);

}
function checkans(idx){
    //console.log("curr level : ",level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over!Your score was <b>${level}<b> <br> enter the any key to start.`;
        document.querySelector("body").style.backgroundColor="red" ;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white" ;
        },250);
        reset();
        }
    
}
function btnPress(){
   let btn = this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkans(userSeq.length-1);
}
let allbtn = document.querySelectorAll(".button");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
 started=false;
 gameSeq=[];
 userSeq=[];
 level=0;
}