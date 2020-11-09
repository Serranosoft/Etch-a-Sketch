

document.addEventListener("DOMContentLoaded", function () {

    const wrapper = document.querySelector(".wrapper")

    function createSketch() {

        let grid = document.createElement("div");

        grid.setAttribute("style", "display: grid;grid-template-columns: repeat(16,40px);grid-template-rows:repeat(16,40px);justify-content:center;center;");

        wrapper.appendChild(grid);

        for (let i = 0; i < 256; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            grid.appendChild(square);
        }
    }

    createSketch();


    let squareDivs = document.querySelectorAll(".square");
    let squareArray = [...squareDivs];
    for (let i = 0; i < 256; i++) {
        squareArray[i].addEventListener("mouseover", function () {
            squareArray[i].setAttribute("style", "background-color: black");
        })
    }

})

