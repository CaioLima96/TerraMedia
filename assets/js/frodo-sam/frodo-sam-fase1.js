function escolhaFrodoSamFase1 () {

    while(true) {
        var escolhaFrodoSamFase1 = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Ir \n 2 - Ficar')

        if (escolhaFrodoSamFase1 == 1) {

            let sucessoFrodoSamFase1 =  document.getElementById("main-container").innerHTML = `

            <h1>Fase 1 - A Visita</h1>

            <section id="content">

                <img src="../../img/personagens/sam.jpg" alt="Sam">

                <p>Samwise, mais conhecido como Sam, é pego bisbilhotando Pequenalf e ouve a conversa sobre o Um Anel. Mas jura que não vai falar nada do que ouviu e decidi ir com os 2 para Rivendell.</p>

            </section>

            <button onclick="proximaFaseFrodoSamFase1()"><p>Próxima Fase</p></button>

            `;
            return sucessoFrodoSamFase1;

            

        } else if (escolhaFrodoSamFase1 == 2) {

            let parte2FrodoSamFase1 =  document.getElementById("main-container").innerHTML = `
            
            <h1> FIM? </h1>

            <section id="content">

                <img src="../../img/gif/now-the-world-wont-move.gif" alt="Fim? Fase 1 do Frodo e Sam">

                <p>"Nah! Moh paz!", pensa Frodo. E assim nosso pequeno hobbit decide ficar em casa, ao invés de sair em uma perigosa e mortal jornada.</p>

            </section>

            <audio autoplay id="myAudio"> <source src="../../audio/now-the-world-wont-move-2.mp3" type="audio/mpeg"></audio>

            <button onclick="parte2FrodoSamFase1()"><p>Avançar</p></button>
            `;

            return parte2FrodoSamFase1;

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}

function parte2FrodoSamFase1() {
    let gameOverFrodoSamFase1 = document.getElementById("main-container").innerHTML = `
            
    <h1> GAMEOVER </h1>

    <section id="content">

        <img src="../../img/personagens/sauron.jpg" alt="Gameover Fase 1 do Frodo e Sam">

        <p>Parabéns! Você escolheu não ir! Mas isso custou o destino da Terra Média, já que você não foi ajudar a queimar o anel de Sauron...</p>

    </section>

    <a href="../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>
    `;

    return gameOverFrodoSamFase1;
}

//função que me manda pra proxima fase
function proximaFaseFrodoSamFase1() {
    return location = ('./frodo-sam-fase2.html');
}