function escolhaFrodoSamFase3() {

    while(true) {
        var escolhaFrodoSamFase3 = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Fugir \n 2 - Ficar e lutar')

        if (escolhaFrodoSamFase3 == 1) {

            let parte2FrodoSamFase3 =  document.getElementById("main-container").innerHTML = `
            
            <h1>Fase 3 - Fugindo de Khazad-dûm</h1>

            <section id="content">

                <img src="../../img/outros/batalha-tumba-de-balin.jpg" alt=Batalha na tumba de balin">

                <p>
                    Frodo e Sam conseguiram escapar e se encontraram com seus amigos. Agora juntos podem derrotar os orcs!
                </p>

            </section>

            <button onclick="parte2FrodoSamFase3()"><p>Avançar</p></button>
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

function parte2FrodoSamFase3() {
    
    let sucessoFrodoSamFase3 =  document.getElementById("main-container").innerHTML = `

    <h1>Fase 3 - Fugindo de Khazad-dûm</h1>

    <section id="content">

        <img src="../../img/outros/fugindo-de-moria.jpg" alt="Fugindo de Moria">

        <p>Sam e amigos derrotaram os orcs que os encurralaram na Tumba de Balin! Mas agora todos precisam fugir, pois um grande e antigo mal se aproxima...</p>

    </section>

    <button onclick="parte3FrodoSamFase3()"><p>Avançar</p></button>

    `;

    return sucessoFrodoSamFase3;
}

function parte3FrodoSamFase3() {

    let despedidaFrodoSamFase3 =  document.getElementById("main-container").innerHTML = `
            
    <h1>FIM</h1>

    <section id="content">

        <img src="../../img/personagens/frodo-e-sam-3.jpg" alt="Sam e Frodo">

        <p>Parabéns! Você completou a Jornada de Frodo e Sam! Obrigado por ter jogado. Quer saber o que acontece se escolher um caminho diferente ou a jornada de outro personagem? Clique no botão abaixo para jogar de novo!</p>

    </section>

    <a href="../../../index.html#personagens" id="gameOverButton"><p>Jogar de novo</p></a>
    `;
    
    return despedidaFrodoSamFase3;
}