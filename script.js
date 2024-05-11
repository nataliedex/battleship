var shipRow;
var shipCol;
var direction = true;
var space1;
var space2;
var space3;

//put ships on the grid
function spot() {
    direction = Math.floor(Math.random()*2);
    if(direction === 0){
        direction = true;
    } else {
        direction = false;
    }
    shipRow = Math.floor(Math.random()*3);
    shipCol = Math.floor(Math.random()*3);
}

    
function Assign(space1, space2, space3){
    this.space1 = space1;
    this.space2 = space2;
    this.space3 = space3;
}

function buildShip(){
    spot();
    //vertical ship
    if(direction === true){
        space1 = ".btn"+shipRow+shipCol;
        space2 = ".btn"+(shipRow+1)+shipCol;
        space3 = ".btn"+(shipRow+2)+shipCol;
    }
    //horizontal
    else {
        space1 = ".btn"+shipRow+shipCol;
        space2 = ".btn"+shipRow+(shipCol+1);
        space3 = ".btn"+shipRow+(shipCol+2);
        
    }
}

//function checks whether the space is occupied
function check(){
    var checkSpot = 2;
    while(checkSpot > 1){
        console.log(space1);
        console.log(space2);
        console.log(space3);
    
        if(
            document.querySelector(space1).classList.contains("ship") ||
            document.querySelector(space2).classList.contains("ship") ||
            document.querySelector(space3).classList.contains("ship")
        )
        {
            buildShip();
            checkSpot = checkSpot+1;

        } else {
            checkSpot = 0;
            document.querySelector(space1).classList.add("ship");
            document.querySelector(space2).classList.add("ship");
            document.querySelector(space3).classList.add("ship");
        }
    }
}


//checks for a win
function win(){
    if(hitCount === 9){
        document.querySelector("h1").innerHTML = "Good Game!"; 
    }
}


//operations
buildShip();
check();
var ship1 = new Assign(space1, space2, space3);

    
buildShip();
check();
var ship2 = new Assign(space1, space2, space3);

buildShip();
check();
var ship3 = new Assign(space1, space2, space3);

console.log(ship1);
console.log(ship2);
console.log(ship3);



var guesses = 0;
var hitCount = 0;

var totalSquares = document.querySelectorAll(".square").length;



for(i = 0; i < totalSquares; i++){
    document.querySelectorAll(".square")[i].addEventListener("click",function(){
        guesses = guesses + 1;

        if(this.classList.contains("ship")){
            this.classList.add("hit");
            hitCount = hitCount + 1;
            win();

        }
        else {
            this.classList.add("miss");
        }
        document.querySelector(".guess").innerHTML = "Guess Count: " + guesses;
    
   

    }
    )
}





















