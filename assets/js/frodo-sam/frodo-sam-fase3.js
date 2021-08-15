function escolhaFrodoSamFase3() {

    while(true) {
        var escolhaFrodoSamFase3 = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Fugir \n 2 - Ficar e lutar')

        if (escolhaFrodoSamFase3 == 1) {

            let parte2FrodoSamFase3 =  document.getElementById("main-container").innerHTML = `
            
            <h1>Fase 3 - Fugindo de Khazad-dûm</h1>

            <section id="content">

                <!--<img src="../../img/outros/eu-lavarei-anel.jpg" alt="eu levarei o anel">-->

                <p>
                    olá mundo
                </p>

            </section>

            <button onclick="parte2FrodoSamFase2()"><p>Avançar</p></button>
            `;

            return parte2FrodoSamFase3;

        } else if (escolhaFrodoSamFase3 == 2) {

            let gameOverFrodoSamFase3 = document.getElementById("main-container").innerHTML = `
            
            <h1> GAMEOVER </h1>

            <section id="content">

                <img src="../../img/personagens/moria-orc.jpg" alt="Gameover Fase 3 frodo e sam">

                <p>Bem, essa sua escolha estúpida certamente irá lhe render uma indicação ao Prêmio Darwin. 2 pequenos hobbits que não sabem lutar direito não foram páreos para os Orcs. Os 2 morreram.</p>

            </section>

            <a href="../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>
            `;

            return gameOverFrodoSamFase3;

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}

function parte2FrodoSamFase2() {
    
    let sucessoFrodoSamFase3 =  document.getElementById("main-container").innerHTML = `

    <h1>Fase 2 - Inicio de uma jornada</h1>

    <section id="content">

        <!--<img src="../../img/gif/gandalf-epic-sax-guy-2.gif" alt="">-->

        <p>Parabéns! Você completou a Jornada de Frodo e Sam! Obrigado por ter jogado. Quer saber o que acontece se escolher um caminho diferente ou a jornada de outro personagem? Clique no botão abaixo para jogar de novo!</p>

    </section>

    <a href="../../../index.html#personagens" id="gameOverButton"><p>Jogar de novo</p></a>

    `;

    return sucessoFrodoSamFase3;
}


//função que me manda pra proxima fase
// function proximaFaseFrodoSamFase2() {
//     return location = ('./frodo-sam-fase3.html');
// }