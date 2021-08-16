function escolhaMisterimirFase4Bem () {

    var escolhaMisterimirFase4Bem = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Montar em Carnán \n 2 - Continuar no chão')

    if (escolhaMisterimirFase4Bem == 1) {

        let sucessoMisterimirFase4Bem =  document.getElementById("main-container").innerHTML = `
        
            <h1>Fase 4 - O Retorno de Carnán</h1>

            <section id="content">

                <img src="../../../img/outros/carnan-e-misterimir-vs-tar-goroth.jpg" alt="Carnan e Misterimir vs Tar Goroth">

                <p>Misterimir e Carnán conseguiram derrotar Tar Goroth. Sobeck-Khor pode cair, mas esse dia não é hoje! Todos da cidade gritam de alegria pela derrota do inimigo!</p>

            </section>

            <button onclick="parte2MisterimirFase4Bem()"><p>Avançar</p></button>
        `;

        return sucessoMisterimirFase4Bem;

    } else if (escolhaMisterimirFase4Bem == 2) {

        let gameOverMisterimirFase4Bem =  document.getElementById("main-container").innerHTML = `

        <h1> GAMEOVER </h1>

        <section id="content">

            <img src="../../../img/outros/sobeck-khor.jpg" alt="Sobeck-Khor em chamas">

            <p>Você achou que atacando por cima e baixo seria uma boa ideia, mas não foi. Tar Goroth conseguiu laçar e puxar Carnán para o chão, você poderia ter impedido isso. Agora Sobeck-Khor foi dizimada.</p>

        </section>

        <a href="../../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>

        `;
        return gameOverMisterimirFase4Bem;

    } else {
        alert('Opção invalida, escolha denovo') 
    }
   
}

function parte2MisterimirFase4Bem() {

    let despedidaMisterimirFase4Bem=  document.getElementById("main-container").innerHTML = `
            
    <h1>FIM</h1>

    <section id="content">

        <img src="../../../img/outros/rivendell.jpg" alt="Rivendell">

        <p>Parabéns! Você completou a Jornada de Misterimir como aliado! E agora parte para Rivendell, pois Elrond precisa de você! Obrigado por ter jogado. Quer saber o que acontece se escolher um caminho diferente ou a jornada de outro personagem? Clique no botão abaixo para jogar de novo!</p>

    </section>

    <a href="../../../../index.html#personagens" id="gameOverButton"><p>Jogar de novo</p></a>
    `;
    
    return despedidaMisterimirFase4Bem;
}