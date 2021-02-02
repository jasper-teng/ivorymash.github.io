var currentPage = 0;
var images = [[
    ["red", "red", "red", "red", "red", "red", "red", "red"],
    ["red", "ivory", "ivory", "ivory", "ivory", "ivory", "red", "red"],
    ["red", "ivory", "red", "red", "red", "red", "ivory", "red"],
    ["red", "ivory", "ivory", "ivory", "ivory", "ivory", "red", "red"],
    ["red", "ivory", "red", "red", "red", "red", "ivory", "red"],
    ["red", "ivory", "red", "red", "red", "red", "ivory", "red"],
    ["red", "ivory", "ivory", "ivory", "ivory","ivory", "red", "red"],
    ["red", "red", "red", "red", "red", "red", "red", "red"]
]]

//html requests shit

function fetchData(url) {
    hideFields();
    console.log(url)
    fetch(url)
        .then(data => { return data.json(); })
        .then(res => {
            let images = res;
            updateTiles(images);
        })
        .catch(error => {console.log(error); showFields()});
}

//bruh

function hideFields(){
    let stuff = document.getElementsByClassName("containerofpain");
    stuff[2].style.display = "flex";
    stuff[1].style.display = "none";
    console.log("hiding...");
}

function showFields() { 
    let stuff = document.getElementsByClassName("containerofpain");
    stuff[1].style.display = "flex";
    stuff[2].style.display = "none";
}

function showArrows(){
    let leftArrow = document.getElementsByClassName("leftarrow");
    let rightArrow = document.getElementsByClassName("rightarrow");
    leftArrow[0].style.display = "block";
    rightArrow[0].style.display = "block";
}
    
//bruh

function updateTiles(imageArr) {
    console.log("updating...");
    images = imageArr;
    change(0);
    showArrows();
    showFields();
};

function goLeft() {
    if (currentPage == 0) {
        currentPage = images.length - 1;
        change(currentPage);
    } else {
        change((currentPage -= 1));
    }
}

function goRight() {
    if (currentPage == images.length - 1) {
        currentPage = 0;
        change(currentPage);
    } else {
        change((currentPage += 1));
    }
}

function change(currentPage) {
    let cellIterator = 0;
    let rowNo = 0;
    console.log("gaming");
    var cells = document.getElementsByClassName("cell");
    const cellsPerRow = 8;
    const delay = 5;
    for (let i = 0; i < cells.length; i++) {
        const rowNo = Math.floor(i / cellsPerRow);
        const colNo = i % cellsPerRow;
        const color = images[currentPage][rowNo][colNo] || "white";
        //apparently you can or numbers to be other things sick
        setTimeout(() => cells[i].style.backgroundColor = color, delay * i);
    }
}
