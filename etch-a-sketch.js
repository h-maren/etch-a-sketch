//make 4 rows with 4 boxes each using css + javascript. rows will have class "row" and boxes will have class "box" - I know, so creative
const container=document.querySelector(".container");
console.log(container);
for (i=0;i<4;i++){//i is creating the rows
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    //console.log(row);
    for(j=0;j<4;j++){//j is creating the boxes
        const box=document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    };
};

//add eventListener to all boxes which adds "highlightedBox" when mouseenters and removes it when mouseleaves, changing the background color of the box
const boxes=document.querySelectorAll(".box");
console.log(boxes);
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

//create a function that draws line based on mouse coordinates