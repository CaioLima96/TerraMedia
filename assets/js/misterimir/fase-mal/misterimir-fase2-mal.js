function escolhaMisterimirFase2Mal () {

    while(true) {
        var escolhaMisterimirFase2Mal = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Lutar sozinho \n 2 - Lutar junto dos Nazgul')

        if (escolhaMisterimirFase2Mal == 1) {

            let gameOverMisterimirFase2Mal =  document.getElementById("main-container").innerHTML = `
            
            <h1> GAMEOVER </h1>

            <section id="content">
                <img src="../../../img/outros/talion-mata-nazgul.jpg" alt="Talion mata nazgul.jpg">

                <p>Misterimir é forte, mas Talion veio muito mais poderoso. Não foi dessa vez, você morreu.</p>

            </section>

            <a href="../../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>
            `;

            return gameOverMisterimirFase2Mal;

        } else if (escolhaMisterimirFase2Mal == 2) {

            let sucessoMisterimirFase2Mal =  document.getElementById("main-container").innerHTML = `

            <h1>Fase 2 - A Vingança de Talion</h1>

            <section id="content">

                <img src="../../../img/outros/talion-perde.jpg" alt="Talion Perde">

                <p>Com os Nazgul juntos, Talion e seu exército não foram páreos. Vocês o derrotaram e agora ele é um de vocês! </p>

            </section>

            <button onclick="parte2MisterimirFase2Mal()"><p>Avançar</p></button>

            `;
            return sucessoMisterimirFase2Mal;

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}

function parte2MisterimirFase2Mal() {

    let despedidaMisterimirFase4Bem=  document.getElementById("main-container").innerHTML = `
            
    <h1>FIM</h1>

    <section id="content">

        <img src="../../../img/outros/nazgul-3.jpg" alt="Nazgul">

        <p>Parabéns! Você completou a Jornada de Misterimir como inimigo! Quem sabe um dia você se torne o novo rei bruxo. Obrigado por ter jogado. Quer saber o que acontece se escolher um caminho diferente ou a jornada de outro personagem? Clique no botão abaixo para jogar de novo!</p>

    </section>

    <a href="../../../../index.html#personagens" id="gameOverButton"><p>Jogar de novo</p></a>
    `;
    
    return despedidaMisterimirFase4Bem;
}