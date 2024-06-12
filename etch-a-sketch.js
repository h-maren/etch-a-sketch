//make 4 rows with 4 boxes each using css + javascript. rows will have class "row" and boxes will have class "box" - I know, so creative
const container=document.querySelector(".container");
//console.log(container);
let currentNumSquares=4;
let currentWidth=175;

//create initial grid of squares
createSquares(currentNumSquares,currentWidth);
etchAsketch();

//make function to create grid of squares
function createSquares(newNumSquares,newSquareWidth){
    for (i=0;i<newNumSquares;i++){//i is creating the rows
        const row=document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        //console.log(row);
        for(j=0;j<newNumSquares;j++){//j is creating the boxes
            const box=document.createElement("div");
            box.classList.add("box");
            box.style.width=newSquareWidth+"px";
            box.style.height=newSquareWidth+"px";
            row.appendChild(box);
        };
    };
};


//clicking input button will ask user for prompt by how many squares it wants each side
const inputButton=document.querySelector("#buttonInput");
inputButton.addEventListener("click", ()=> {
    const nSquares=parseInt(prompt("Please input number of squares per side you want! (Max value 100)"));
    if (nSquares>100){
        alert("Please pick a maximum of 100!");
        return;
    }
    else if (isNaN(nSquares)){
        alert("Put in a valid number please!");
        return;
    }
    else if (nSquares%1 !== 0){
        alert("Put in a whole number please!");
    }
    else {
        //number of gaps needed
        const nGap=nSquares-1;
        //console.log(nGap,nSquares);
        //calculate new squareWidth based on nGap and nSquares
        const squareWidth=(715-nGap)/nSquares;
        //console.log(squareWidth);
        deleteSquares(currentNumSquares);
        createSquares(nSquares,squareWidth);
        etchAsketch();
        currentNumSquares=nSquares;
    }
    return currentNumSquares;
});

//make function to delete current grid
function deleteSquares(currentNumberSquares){    
    for (i=0;i<currentNumberSquares;i++){//i is removing the boxes
        const row=container.querySelector(".row");
        for(j=0;j<currentNumberSquares;j++){//j is removing the boxes
            const box=document.querySelector(".box");
            row.removeChild(box);
        };
        container.removeChild(row);
    };
};


//add eventListener to all boxes which adds "highlightedBox" when mouseenters and removes it when mouseleaves, changing the background color of the box
function etchAsketch(){
    const boxes=document.querySelectorAll(".box");
    //console.log(boxes);
    boxes.forEach((box) =>{
        box.addEventListener("mouseenter", () => {
            box.classList.add("highlightedBox");
        });
        box.addEventListener("mouseleave", () => {
            box.classList.remove("highlightedBox");
        });
        box.addEventListener("mousemove", (e) => {
            //draws a dot based on position
            let dot_x=e.pageX;
            let dot_y=e.pageY;
            //console.log(dot_x);
            //console.log(dot_y);
            const circle=document.createElement("div");
            circle.classList.add("dot");
            box.appendChild(circle);
            circle.style.left=dot_x+"px";
            circle.style.top=dot_y+"px";
        });
    });
};

