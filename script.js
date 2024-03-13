let colour = 'black'

document.addEventListener("DOMContentLoaded",function(){
    createBoard(16);

    let btn_popup  = document.querySelector("#popUp");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
    
   
})

function createBoard(size){
    let board = document.querySelector(".drawBoard");

    board.style.gridTemplateColumns =  `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let numDivs = size * size;

    for (let i= 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover",colourDiv)
        board.insertAdjacentElement("beforeend",div);
     }

}
function getSize(){
    let userChoice = prompt("Enter size of the board")
    let message = document.querySelector("#message")
    if (userChoice == ""){
        message.innerHTML = "Please provide a number"
    }
    else if(userChoice < 0 || userChoice > 100){
        message.innerHTML = "Please provide a number between 1 - 100 "
    }
    else{
        message.innerHTML = "Now you can Play"
        return userChoice
    }

    
}
function colourDiv(){
    if(colour == "random"){
        this.style.backgroundColor = `hsl(${Math.random()* 360},100%, 50%)`
    }
    else{
        this.style.backgroundColor = `black`
    }
}
function getColour(colourChoice){
    colour = colourChoice
    
}
function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
        
}

