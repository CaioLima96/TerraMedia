function escolhaPequenalfFase1 () {

    while(true) {
        var escolhaPequenalfFase1 = prompt('Digite sua escolha: \n 1 - Você levar o anel \n 2 - Deixar para Sam e Frodo')

        if (escolhaPequenalfFase1 == 1) {

            let gameOverPequenalfFase1 =  document.getElementById("main-container").innerHTML = `
            
            <h1> GAMEOVER </h1>

            <section id="content">

                <img src="../../img/outros/nazgul-1.jpg" alt="Gameover Fase 1 do Pequenalf">

                <p>Você sucumbiu à influência e poder do Um Anel e virou servo de Sauron, agora você é um Nazgul!</p>

            </section>

            <a href="../../../index.html#personagens" id="a-gameOverPequenalf"><p>Recomeçar</p></a>
            `;

            return gameOverPequenalfFase1;

        } else if (escolhaPequenalfFase1 == 2) {

            let sucessopequenalfFase1 =  document.getElementById("main-container").innerHTML = `

            <h1>Fase 1 - A Reunião</h1>

            <section id="content">

                <img src="../../img/outros/sociedade-anel-reuniao-2.jpg" alt="Sociedade do Anel">

                <p>Com os objetivos definidos, a Sociedade do Anel parte em direção à Montanha da Perdição!</p>

            </section>

            <button onclick="proximaFasePequenalfFase1()"><p>Próxima Fase</p></button>

            `;
            return sucessopequenalfFase1;

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}

function proximaFasePequenalfFase1() {
    return location = ('./pequenalf-fase2.html');
}

// `<img src="../../img/outros/nazgul-1.jpg" alt="Gameover Fase 1 do Pequenalf">
// <p>Você sucumbiu à influência e poder do Um Anel e virou servo de Sauron, agora você é um Nazgul!</p>`;