const inputNames = document.getElementById("inputNames")
const addNames = document.getElementById("addNames")

///////////////////////////////// BOTAO SAIR //////////////////////////////////////
// const buttonLogout = document.getElementById("logout")

// buttonLogout.addEventListener("click", function(event){
//     event.preventDefault()
//     window.location.href = "../index.html"
// })

///////////////////////////////// SORTEADOR NUMERO //////////////////////////////////////

const numberX = document.getElementById("numberX")
const h4Modificado = document.getElementById("h4Modificado")
const numberY = document.getElementById("numberY")

numberX.addEventListener("change", function(){
    let NX = parseInt(numberX.value)
    let NY = parseInt(numberY.value)
    if (isNaN(NY)){                //Se NY é NAN, recebe "Y"
        NY = "Y"
    }
    console.log(NY)
    console.log(numberX.value)
    console.log(NX)
    
    h4Modificado.innerHTML = `Configure a Seleção Aleatória de Números: De [${NX}] até [${NY}]`
    // if(h4Modificado.textContent == undefined){
    //     h4Modificado.textContent = "ERRO, digite os números corretamente"
    // }
    console.log(h4Modificado.textContent)
})

numberY.addEventListener("change", function(){
    let NX = parseInt(numberX.value)
    let NY = parseInt(numberY.value)
    if (isNaN(NX)){                //Se NX é NAN, recebe "X"
        NX = "X"
    }
    console.log(numberY.value)
    console.log(NY)
    h4Modificado.innerHTML = `Configure a Seleção Aleatória de Números: De [${NX}] até [${NY}]`
})

const sortearNumero = document.getElementById("sortearNumero")

// SORTEIA OS NUMERO ENTRE O INTERVALO QUE O USUÁRIO DEFINIU (DE X A Y)
sortearNumero.addEventListener("click", function (){
    const numeroSorteado = document.getElementById("numeroSorteado")
    let NX = parseInt(numberX.value) // passa de string pra number, NX menor numero do intervalo
    let NY = parseInt(numberY.value) // passa de string pra number, NY maior numero do intervalo

    if( NX && NY != 0){
        let arrayNumbers = []
        let numberRandom = parseInt(Math.random() * (NY - NX + 1))
        console.log(numberRandom)

        // cria um array com o intervalo definido pelo usuário (de X a Y)
        for(let i = NX; i < (NY + 1); i++){

            console.log(i)
            arrayNumbers.push(i)
        }    

        let numeroEscolhido = arrayNumbers[numberRandom]
        numeroSorteado.innerHTML = numeroEscolhido
            if(numeroEscolhido == undefined){
                numeroSorteado.innerHTML = "ERRO, digite os números corretamente"
            }
        console.log(numeroEscolhido)
        }  
    }
);

///////////////////////////////// SORTEADOR LISTA //////////////////////////////////////


let olNames = document.getElementById("olNames")
let olShuffleNames = document.getElementById("listaEmbaralhada")
const listNames = []

// ADICIONA NOMES A LISTA DE SORTEIO (EVENTO CLICK NO BOTÃO ADICIONAR)
addNames.addEventListener("click",function(){

    if(inputNames.value != ""){        
        
        let createLi = document.createElement("li")
        olNames.appendChild(createLi)                       // Cria LI dentro da lista
        // let createLiShuffle = document.createElement("li")
        // olShuffleNames.appendChild(createLiShuffle)         // Cria LI dentro da lista embaralhada
        
        function shuffleArray(array){
            // Loop que itera de tras pra frente, 
            // o i é igual ao ultimo index do array, enquanto o i for maior que zero ele vai continuar percorrendo,
            // a cada iteração o i é decrementado

            for( let i = array.length -1; i> 0; i--){         // array.length -1 acessa o ultimo elemento do array
                console.log("esse é o i: "+i)
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
                console.log(i + " e " + j)
            }
            return array 
        }
        
        listNames.push(inputNames.value)   
        createLi.innerHTML = listNames[listNames.length - 1]  // acessa o último elemento do array listNames
        const ShuffleNames = shuffleArray([...listNames])     // Spread Operator para copiar o array e não alterar o original
        olShuffleNames.innerHTML = ""


        ShuffleNames.forEach(function(name) {
            let createLiShuffle = document.createElement("li")
            createLiShuffle.innerHTML = name            // Name é o ultimo elemento a ser digitado no input
            olShuffleNames.appendChild(createLiShuffle) 
            // console.log("ESSE É O NAME "+ name)
        });


        // MANEIRAS TESTADAS ANTERIORMENTE
        // for (i in listNames){
        //     createLi.innerHTML = listNames[i]     
        // }
        // for (i in ShuffleNames){
        //     createLiShuffle.innerHTML = ShuffleNames
        // }
        // for ( i = 0; i < listNames.length; i++ ){
        //     createLi.innerHTML = listNames[i]
        // }      

        inputNames.value = ""
        console.log(listNames)
        console.log("Lista embaralhada"+ShuffleNames)
    }
})

// ADICIONA NOMES A LISTA DE SORTEIO (EVENTO KEYUP NO INPUT)
// Ao digitar enter no INPUT vai adicionar nomes a lista de sorteio
inputNames.addEventListener("keyup",function(e){
    let key = e.which || e.keyCode;                      //expressão usada para capturar o código da tecla pressionada em eventos de teclado

    if(key == 13 && inputNames.value != ""){                // key 13 = tecla enter
        let createLi = document.createElement("li")
        olNames.appendChild(createLi)

        function shuffleArray(array){
            for( let i = array.length -1; i> 0; i--){
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
            return array
        }
        
        listNames.push(inputNames.value)   
        createLi.innerHTML = listNames[listNames.length - 1]  // acessa o último elemento do array listNames
        const ShuffleNames = shuffleArray([...listNames])     // Spread Operator para copiar o array e não alterar o original
        olShuffleNames.innerHTML = ""


        ShuffleNames.forEach(function(name) {
            let createLiShuffle = document.createElement("li")
            createLiShuffle.innerHTML = name            // Name é o ultimo elemento a ser digitado no input
            olShuffleNames.appendChild(createLiShuffle) 
            // console.log("ESSE É O NAME "+ name)
        });

        // MANEIRAS TESTADAS ANTERIORMENTE
        // for (i in listNames){
        //     createLi.innerHTML = listNames[i]
        // }
        // for ( i = 0; i < listNames.length; i++ ){
        //     createLi.innerHTML = listNames[i]
        // }

        inputNames.value = ""
        console.log(listNames)
    }
    // else(console.log("ERRO"))
})

const drawButton = document.getElementById("sortear")  //(BOTAO SORTEAR)

drawButton.addEventListener("click", function(){

    const drawName = document.getElementById("sorteado")

    let array = listNames.length                           // tamanho do array
    let randomLength = Math.floor(Math.random()*array)    //
    let sorteado = listNames[randomLength]

    console.log(sorteado)
    drawName.innerText= sorteado
})

///////////////////////////////// IMAGEM  //////////////////////////////////////

const url = "https://api.github.com/users/rodrigocostadev"
const container = document.getElementById("container")

fetch(url).then((response) => {
    return response.json()
})
.then((data) => {

    let imagem = document.createElement("img")
    imagem.src = data.avatar_url
    container.appendChild(imagem)
    // imagem.innerHTML = avatar_url
    
    // console.log(data)
    // return (
    //     <div>
    //         {imagem.innerHTML = data.avatar_url}
    //     </div>
    // )
})









































// const sairButton = document.getElementById("sairButton")

// // function sairFunction(){
// //     window.location.href = "index.html"
// // }


// sairButton.addEventListener("click", function(event){
//     // event.preventDefault()
//     window.location.href = "index.html"
// })