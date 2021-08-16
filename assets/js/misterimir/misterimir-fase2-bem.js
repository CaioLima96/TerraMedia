function escolhaMisterimirFase2Bem () {

    while(true) {
        var escolhaMisterimirFase2Bem = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Caragor \n 2 - Drake')

        if (escolhaMisterimirFase2Bem == 1) {

            let gameOvercaminhoBemMisterimirFase2 =  document.getElementById("main-container").innerHTML = `
            
            <h1> GAMEOVER </h1>

            <section id="content">

                <img src="../../img/outros/sobeck-khor.jpg" alt="Sobeck-Khor em chamas">

                <p>Caragors podem até ser rápidos, mas não podem voar por cima de uma emboscada. Você derrotou a emboscada, mas Sobeck-Khor foi reduzida à cinzas.</p>

            </section>

            <a href="../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>
            `;

            return gameOvercaminhoBemMisterimirFase2;

        } else if (escolhaMisterimirFase2Bem == 2) {

            let caminhoBemMisterimirFase2 =  document.getElementById("main-container").innerHTML = `

            <h1>Fase 2 - O Contra-Ataque do Império</h1>

            <section id="content">

            <!--<img src="../../img/outros/takra-vs-talion.jpg" alt="Takra vs Talion">-->

            <p>olá mundo</p>

            </section>

            <button onclick="parte2MisterimirFase2Bem()"><p>Próxima Fase</p></button>

            `;
            return caminhoBemMisterimirFase2;

        } else {
            alert('Opção invalida, escolha denovo')
            break
        }
    }
}

function parte2MisterimirFase2Bem() {
    
    let MisterimirFase1Bem =  document.getElementById("main-container").innerHTML = `

    <h1> Fase 1.2 - Ajuda a caminho! </h1>

    <section id="content">

        <img src="../../img/outros/misterimir-vs-orc-captain.jpg" alt="Misterimir vs Orc">

        <p>Felizmente Misterimir mata Shukah Khur, o Come Mosca. Com um dos capitães de Sharkhburz morto, a Talion mata o líder e conquista a fortaleza.</p>

    </section>

    <button onclick="proximaFaseMisterimirFase1Bem()"><p>Próxima Fase</p></button>

    `;

    return MisterimirFase1Bem;
}

//função que me manda pra proxima fase
function proximaFaseMisterimirFase2Bem() {
    return location = ('./misterimir-fase3-bem.html');
}