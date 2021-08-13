function escolhaPequenalfFase1 () {

    while(true) {
        var escolhaPequenalfFase1 = prompt('Digite sua escolha: \n 1 - Você levar o anel \n 2 - Deixar para Sam e Frodo')

        if (escolhaPequenalfFase1 == 1) {

            let gameOverPequenalfFase1 =  document.getElementById("main-container").innerHTML = `

            <main>
            
            <h1> GAMEOVER </h1>

            <section id="content">

                <img src="../../img/outros/nazgul-1.jpg" alt="Gameover Fase 1 do Pequenalf">

                <p>Você sucumbiu à influência e poder do Um Anel e virou servo de Sauron, agora você é um Nazgul!</p>

            </section>

            <button onclick="recomecar()"><p>Recomeçar</p></button>

            </main`;

            // return location = ('./gameover-pequenalf1.html');
            return gameOverPequenalfFase1;

        // } else if (escolhaPequenalfFase1 == 2) {

        //     return location = ('')

         } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}

function recomecar() {
    return location = ('../../../index.html')
}


// `<img src="../../img/outros/nazgul-1.jpg" alt="Gameover Fase 1 do Pequenalf">
// <p>Você sucumbiu à influência e poder do Um Anel e virou servo de Sauron, agora você é um Nazgul!</p>`;