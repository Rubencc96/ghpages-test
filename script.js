

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let clickCount = 0;
let alertCount = 0;
const aguedaArray = ["bonita", "albacora", "apolínea", "atún", "coquetona",
                    "cuca", "guapa", "hermosa", "linda", "mona", "preciosa",
                    "una querubina"
]

function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * aguedaArray.length);
    return aguedaArray[randomIndex]
}

document.getElementById("changeTextButton").addEventListener("click", function() {
    clickCount++;
    const randomWord = getRandomWord();
    if (clickCount%10 === 0){
        // alertCount++;
        // if (alertCount === 1){
        //     alert("Caíste en mi trampa, ahora tengo tus datos bancarios");
        // } 
        // if (alertCount === 2){
        //     alert("Nada, es broma, tranqui sigue haciendo el tonto.");
        // }
        // if (alertCount > 2){
        //     alert("También podrías parar e ir a hacer algo productivo...");
        // }
        alert(`Oye, disculpa un momento, creo que no te has enterado que Agueda es ${randomWord}`);


    } else {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor; 

        const texto = document.getElementById("texto");
        texto.textContent = `Agueda es ${randomWord}`


    }
        
});
