

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

document.getElementById("changeTextButton").addEventListener("click", function() {
    clickCount++;
    if (clickCount%10 === 0){
        alertCount++;
        if (alertCount === 1){
            alert("Caíste en mi trampa, ahora tengo tus datos bancarios");
        } 
        if (alertCount === 2){
            alert("Nada, es broma, tranqui sigue haciendo el tonto.");
        }
        if (alertCount > 2){
            alert("También podrías parar e ir a hacer algo productivo...");
        }

    } else {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor; 

    }
        
});
