//make 4 rows with 4 boxes each using css + javascript. rows will have class "row" and boxes will have class "box" - I know, so creative
const container=document.querySelector(".container");
console.log(container);
for (i=0;i<4;i++){//i is creating the rows
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    console.log(row);
    for(j=0;j<4;j++){//j is creating the boxes
        const box=document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    };
};