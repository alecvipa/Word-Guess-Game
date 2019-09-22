var underscores = [];
var rightletter = [];
var chances = 10;
var computerguess;
var words = ['happiness','peace','balance'];
//console.log(words[0][1]);


var computerguess = words[Math.floor(Math.random() * words.length)];
console.log(computerguess);

generateunderscore = () => {
    for (var i = 0; i < computerguess.length; i++) {
        underscores.push('_');
    }
    return underscores;
}
console.log(generateunderscore())

document.onkeyup = function (event) {
    var usergame = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(usergame); 

    if(computerguess.indexOf(usergame) > -1) {
        rightletter.push(usergame);
        console.log(rightletter);
        document.getElementById("underscores").innerHTML =rightletter;
        // if (rightletter.length -1) {
        //     alert("YOU WON!")
        // }
        // underscores[computerguess.indexOf(usergame)] = usergame;
        // console.log(usergame);

    } else {
        chances--;
        document.getElementById("chancesc").innerHTML ="Chances:  " + chances;
        if (chances <= 0) {
            alert("GAME OVER: PLEASE REFRESH THE PAGE")
        }
    }
    
   
    
}


    
    


// document.onkeyup = function (event) {
//     if (event.keyCode == 32) {
//     } 

// else {
//     usergame = String.fromCharCode(event.keyCode).toLowerCase;
//     if (computerguess.includes(usergame)) {
//         console.log("jsh")

//     } else {
//         console.log("hha")
//     }
   
     
// }


// if (computerguess.includes(usergame)) {
    //     alert("yei")
    // }
// if ((usergame== 'h') && (computerguess==words[0][0])) {
//     alert("yei")
// }
// PONER AQUI LA FUNCION PARA PROBAR SI TOMA EN CUENTA LAS VARIABLES GLOBALES

// } if(usergame = computerguess){
//     alert("okay")

// } else {
//     alert("not yet")
// }
