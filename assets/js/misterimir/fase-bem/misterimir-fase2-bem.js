function escolhaMisterimirFase2Bem () {

    while (true) {
        var escolhaMisterimirFase2Bem = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Caragor \n 2 - Drake')

        if (escolhaMisterimirFase2Bem == 1) {

            let gameOvercaminhoBemMisterimirFase2 =  document.getElementById("main-container").innerHTML = `
            
            <h1> GAMEOVER </h1>

            <section id="content">

                <img src="../../../img/outros/sobeck-khor.jpg" alt="Sobeck-Khor em chamas">

                <p>Caragors podem até ser rápidos, mas não podem voar por cima de uma emboscada. Você derrotou a emboscada, mas Sobeck-Khor foi reduzida à cinzas.</p>

            </section>

            <a href="../../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>
            `;

            return gameOvercaminhoBemMisterimirFase2;

        } else if (escolhaMisterimirFase2Bem == 2) {

            let sucessoMisterimirFase2Bem =  document.getElementById("main-container").innerHTML = `

            <h1>Fase 2 - O Contra-Ataque do Império</h1>

            <section id="content">

            <img src="../../../img/outros/drake-vs-orcs.jpg" alt="Drake vs Orcs">

            <p>Com a ajuda de Carnán, Misterimir chega a tempo de salvar Sobeck-Khor e põe fogo em uns orcs que estavam atacando Irondir e seus soldados.</p>

            </section>

            <button onclick="parte2MisterimirFase2Bem()"><p>Avançar</p></button>

            `;
            return sucessoMisterimirFase2Bem;

        } else {
            alert('Opção invalida, escolha denovo')
            
        }
    
    }
}

function parte2MisterimirFase2Bem() {
    
    let MisterimirFase2Bem =  document.getElementById("main-container").innerHTML = `

    <h1>Fase 2 - O Contra-Ataque do Império</h1>

    <section id="content">

        <img src="../../../img/outros/reforco-orc.jpg" alt="Reforço orc">

        <p>"É difícil liderar uma cidade, ainda mais com orcs como inimigos. Obrigado pela ajuda, forasteiro.", disse Irondir. Enquanto os ajudavam os feridos ali presentes, mais inimigos chegam... e oferecendo trégua.</p>

    </section>

    <button onclick="proximaFaseMisterimirFase2Bem()"><p>Próxima Fase</p></button>

    `;

    return MisterimirFase2Bem;
}

//função que me manda pra proxima fase
function proximaFaseMisterimirFase2Bem() {
    return location = ('./misterimir-fase3-bem.html');
}