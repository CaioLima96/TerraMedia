function escolhaMisterimirFase3Bem () {

    while (true) {
        var escolhaMisterimirFase3Bem = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Aceitar \n 2 - Trégua de cu é rola!')

        if (escolhaMisterimirFase3Bem == 1) {

            let gameOvercaminhoBemMisterimirFase3 =  document.getElementById("main-container").innerHTML = `
            
            <h1> GAMEOVER </h1>

            <section id="content">

                <img src="../../../img/outros/sobeck-khor.jpg" alt="Sobeck-Khor em chamas">

                <p>Você aceitou a trégua e deu as 50 oferendas. Mas com o diabo não se negocia, os orcs voltaram bem depois na calada da noite e inceneraram Sobeck-Khor.</p>

            </section>

            <a href="../../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>
            `;

            return gameOvercaminhoBemMisterimirFase3;

        } else if (escolhaMisterimirFase3Bem == 2) {

            let sucessoMisterimirFase3 =  document.getElementById("main-container").innerHTML = `

            <h1>Fase 3 - A Batalha de Sobeck-Khor</h1>

            <section id="content">

            <img src="../../../img/personagens/tar-goroth.jpg" alt="Tar Goroth">

            <p>"Trégua de cu é rola!", grita Ironmir. E uma feroz batalha se inicia. Aliadaos e inimigos sucumbem. Misterimir, Ironmir e alguns soldados ainda estavam de pé, quando o trunfo dos ocs aparece: Tar Goroth, antigo general de Morgoth na Primeira Era.</p>

            </section>

            <button onclick="proximaFaseMisterimirFase3Bem()"><p>Próxima Fase</p></button>

            `;
            return sucessoMisterimirFase3;

        } else {
            alert('Opção invalida, escolha denovo')
            
        }
    }
   
}

//função que me manda pra proxima fase
function proximaFaseMisterimirFase3Bem() {
    return location = ('./misterimir-fase4-bem.html');
}