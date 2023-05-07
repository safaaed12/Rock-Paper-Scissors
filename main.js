let userscore=0;
let computerscore=0;
const userscore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");
//const paper_img=document.getElementById("rock");

function getcomputerchoice(){
    const choice=["rock","paper","scissor"];
    const randomnum=Math.floor(Math.random()*3);
    return choice[randomnum];

}

function win(userchoice,computerchoice){
    userscore++;
    userscore_span.innerHTML=userscore;
    computerscore_span.innerHTML=computerscore;
    const small_user="user".fontsize(3).sub();
    const small_comp="comp".fontsize(3).sub();
    result_p.innerHTML=`${userchoice}${small_user} beats ${computerchoice}${small_comp}.You WIN!+ .`
    document.getElementById("rock").style.backgroundColor='red';
 
}

function lose(userchoice,computerchoice){
    computerscore++;
    userscore_span.innerHTML=userscore;
    computerscore_span.innerHTML=computerscore;
    const small_user="user".fontsize(3).sub();
    const small_comp="comp".fontsize(3).sub();
    result_p.innerHTML=`${userchoice}${small_user} loses to ${computerchoice}${small_comp}.You LOST...`
}

function draw(userchoice,computerchoice){
    userscore_span.innerHTML=userscore;
    computerscore_span.innerHTML=computerscore;
    const small_user="user".fontsize(3).sub();
    const small_comp="comp".fontsize(3).sub();
    result_p.innerHTML=`${userchoice}${small_user} equals ${computerchoice}${small_comp}.it's a draw!`
}


function Game(userchoice){
   const computerchoice=getcomputerchoice();
   switch(userchoice + computerchoice){
    case"scissorpaper":
    case"rockscissor":
    case"paperrock":
       win(userchoice,computerchoice);
       break;
    case"paperscissor":
    case"scissorrock":
    case"rockpaper":
      lose(userchoice,computerchoice);
      break;
    case"paperpaper":
    case"scissorscissor":
    case"rockrock":
      draw(userchoice,computerchoice)
      break;

   }

}

function main(){
    rock_div.addEventListener('click',function(){
        Game("rock");
    })
    paper_div.addEventListener('click',function(){
        Game("paper");
    })
    scissor_div.addEventListener('click',function(){
        Game("scissor");
    })

}
main();