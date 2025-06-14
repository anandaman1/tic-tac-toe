let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

let winPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], 
                  [2,5,8], [2,4,6], [3,4,5], [6,7,8]];


const resetGame = () =>{
   turnO = true;
   enableBoxes();
   count = 0;
   msgContainer.classList.add("hide")
}

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
        box.innerText = "O";
        turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        
        let isWinner = checkWinner();
        if(count==9 && !isWinner){
          draw();
        }
    }); 
}); 

const enableBoxes = () => {
  for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const disableBoxes  = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner} 😁`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const draw = ()=>{
    msg.innerText = "Game was a Draw 😏";
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = ()=>{
    for(let pattern of winPatterns){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText; 
       let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !=="") {
            if(pos1 === pos2 && pos2 === pos3){
              console.log("Winner is", pos1);
              showWinner(pos1);
              return true;
            }      
    }
    
    }
    return false;
};



newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


