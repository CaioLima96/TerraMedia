var gameOverPequenalfFase1 =  document.getElementById("demo").innerHTML = `


`


function escolhaPequenalfFase1 () {

    while(true) {
        var escolhaPequenalfFase1 = prompt('Digite sua escolha: \n 1 - Você levar o anel \n 2 - Deixar para Sam e Frodo')

        if (escolhaPequenalfFase1 == 1) {

            return location = ('./gameover-pequenalf1.html');

        // } else if (escolhaPequenalfFase1 == 2) {

        //     return location = ('')

         } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}