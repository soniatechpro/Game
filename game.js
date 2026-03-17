let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userPara=document.querySelector("#user");
const compPara=document.querySelector("#computer");
 
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=()=>{
    console.log("game was draw.");
	msg.innerText="Game was draw.Play Again...👻";
	msg.style.backgroundColor="blue";
}

const showWinner=(userWin,userChoice,compChoice)=>{
	if(userWin){
		userScore++;
		userPara.innerText=userScore;
		console.log(`You Win!😁`);
		msg.innerText=`You Win!.Your ${userChoice} beats ${compChoice} 😁`;
		msg.style.backgroundColor="green";
	}else{
		compScore++;
		compPara.innerText=compScore;
		console.log(`You Lose.😔`);
		msg.innerText=`You Lost.${compChoice} beats your ${userChoice} 😔`;
		msg.style.backgroundColor="red";
	}
}
const playGame = (userChoice)=>{
    console.log(`user choice = ${userChoice}`);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log(`comp choice = ${compChoice}`);
    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
			//scissor,rock
			userWin=compChoice==="scissors"?false:true;
		}else{
			//rock,paper
			userWin=compChoice==="rock"?false:true;
		}
		showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})