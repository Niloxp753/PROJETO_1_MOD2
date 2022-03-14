
let img = document.querySelector(".image-change");

let texto = document.querySelector("#text-img");

let bodyImage = document.getElementById("#backBody-img");

let index = 0;

let max = 5;


let imagensPaisagem = [
    "assets/img/Fisher Towers.jpg",
    "assets/img/Ilhas Lofoten.jpg",
    "assets/img/Lago Dobbiaco.jpg",
    "assets/img/Snow Mountain.jpg",
    "assets/img/Tibete.jpg",  
]

let textImage = [
    "Utah, Fisher Towers, Lake, 2021",
    "Noruega, Ilhas Lofoten, Pôr do Sol, 2021",
    "Itália, Lago Dobbiaco, Manhã, 2021",
    "Nepal, Snow Mountain, Lago, Reflexo, 2021",
    "China, Tibete, Snow Mountain, 2021",
]


function nextImgText(){
    index++;
    
    if (index >= max){
        index = 0;
    };

    if (index == 1){
        img.src="assets/img/Ilhas Lofoten.jpg";
        texto.textContent = textImage[1];
        bodyImage.addEventListener("click",function(){
            document.querySelector("body").src="assets/img/Ilhas Lofoten.jpg"
        })
        
    } else if (index == 2){
        img.src="assets/img/Lago Dobbiaco.jpg";
        texto.textContent = textImage[2];

    } else if (index == 3){
        img.src="assets/img/Snow Mountain.jpg";
        texto.textContent = textImage[3];

    } else if (index == 4){
        img.src=img.src="assets/img/Tibete.jpg";
        texto.textContent = textImage[4];

    } else if(index == 0){
        img.src="assets/img/Fisher Towers.jpg";
        texto.textContent = textImage[0];
    }
}

function prevImgText(){
    if (index > 0){
    index--
    };

    if (index >= max){
        index = 0;
    };

    if (index == 1){
        img.src="assets/img/Ilhas Lofoten.jpg";
        texto.textContent = textImage[1];
        
    } else if (index == 2){
        img.src="assets/img/Lago Dobbiaco.jpg";
        texto.textContent = textImage[2];

    } else if (index == 3){
        img.src="assets/img/Snow Mountain.jpg";
        texto.textContent = textImage[3];

    } else if (index == 4){
        img.src=img.src="assets/img/Tibete.jpg";
        texto.textContent = textImage[4];

    }  else if(index == 0){
        img.src="assets/img/Fisher Towers.jpg";
        texto.textContent = textImage[0];
    }
}

function butCenter (){
    
}