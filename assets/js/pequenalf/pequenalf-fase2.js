function escolhaPequenalfFase2 () {

    while(true) {
        var escolhaPequenalfFase2 = prompt('Qual a sua escolha (Digite apenas o número): \n 1 - Você não vai passar! \n 2 - Expecto Patronum \n 3 - Fugir')

        if (escolhaPequenalfFase2 == 1) {

            let sucessoPequenalfFase2 =  document.getElementById("main-container").innerHTML = `
            
            <h1>Fase 2 - A Ponte de Khazad-dûm</h1>

            <section id="content">

                <img src="../../img/outros/you-shall-not-pass.jpg" alt="Pequenalf vs Balrog">

                <p>Parabéns! Balrog foi impedido de matar seus amigos! Mas infelizmente ele te puxou para baixo, em direção à um abismo sem fim. Os 2 batalharam por 2 longos dias. Seu inimigo foi derrotado, mas você não resistiu aos ferimentos da batalha e a escuridão acabou te alcançando... </p>

            </section>

            <button onclick="proximaFasePequenalfFase2()"><p>Próxima Fase</p></button>
            `;

            return sucessoPequenalfFase2;

        } else if (escolhaPequenalfFase2 == 2) {

            let gameOverPequenalfFase2 =  document.getElementById("main-container").innerHTML = `

            <h1>GAMEOVER</h1>

            <section id="content">

                <img src="../../img/personagens/balrog.jpg" alt="balrog">

                <p>Isso aqui não é <span id="harry">Harry Potter</span> e Balrog não é um Dementador, infelizmente. Seus amigos morreram queimados vivos e viraram churrasquinho de orc...</p>

            </section>

            <a href="../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>

            `;
            return gameOverPequenalfFase2;

        } else if (escolhaPequenalfFase2 == 3) {

            let gameOverPequenalfFase2 =  document.getElementById("main-container").innerHTML = `

            <h1>GAMEOVER</h1>

            <section id="content">

                <img src="../../img/personagens/balrog.jpg" alt="balrog">

                <p>Seus amigos morreram queimados vivos e viraram churrasquinho de orc...</p>

            </section>

            <a href="../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>

            `;
            return gameOverPequenalfFase2;
        } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}


//função que me manda pra proxima fase
function proximaFasePequenalfFase2() {
    return location = ('./pequenalf-fase3.html');
}