function escolhaFrodoSamFase2() {

    while(true) {
        var escolhaFrodoSamFase2 = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Se voluntariar \n 2 - Ficar quieto')

        if (escolhaFrodoSamFase2 == 1) {

            let parte2FrodoSamFase2 =  document.getElementById("main-container").innerHTML = `
            
            <h1> Fase 2 - Inicio de uma jornada </h1>

            <section id="content">

                <img src="../../img/outros/eu-lavarei-anel.jpg" alt="eu levarei o anel">

                <p>
                    "Eu levarei o anel!", disse Frodo. Mas como o amigável Hobbit não sabia o caminho e nem conseguiria passar sozinho por todos os perigos, Pequenalf, Sam e amigos decidem acompanhá-lo até Mordor, lar da Montanha da Perdição.
                </p>

            </section>

            <button onclick="parte2FrodoSamFase2()"><p>Avançar</p></button>
            `;

            return parte2FrodoSamFase2;

        } else if (escolhaFrodoSamFase2 == 2) {

            let gameOverFrodoSamFase2 = document.getElementById("main-container").innerHTML = `
            
            <h1> GAMEOVER </h1>

            <section id="content">

                <img src="../../img/outros/nazgul-1.jpg" alt="Gameover Fase 2 Sam e Frodo">

                <p>Pequenalf que ficou responsável por carregar o Um Anel. Mas sucumbiu à influência e poder do objeto e virou servo de Sauron, agora O Cinzentinho é um Nazgul!</p>

            </section>

            <a href="../../../index.html#personagens" id="gameOverButton"><p>Recomeçar</p></a>
            `;

            return gameOverFrodoSamFase2;

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}

function parte2FrodoSamFase2() {
    
    let sucessoFrodoSamFase2 =  document.getElementById("main-container").innerHTML = `

    <h1>Fase 2 - Inicio de uma jornada</h1>

    <section id="content">

        <img id="familia-meme" src="../../img/outros/familia-meme.jpg" alt="famila meme">

        <div id="img-container">

            <div id="img-card">
                <img src="../../img/outros/vc-tem-minha-espada.jpg" alt="Você tem minha espada">
            </div>
            <div id="img-card">
                <img src="../../img/outros/e-meu-arco.jpg" alt="e meu arco">
            </div>
            <div id="img-card">
                <img src="../../img/outros/e-meu-machado.jpg" alt="e meu machado">
            </div>
            <div id="img-card">
                <img src="../../img/outros/e-a-familia.jpg" alt="e a familia">
            </div>

        </div>

        <p>E assim o novo grupo faz sua partida rumo ao perigo.</p>

    </section>

    <button onclick="proximaFaseFrodoSamFase2()"><p>Próxima Fase</p></button>

    `;

    return sucessoFrodoSamFase2;
}


//função que me manda pra proxima fase
function proximaFaseFrodoSamFase2() {
    return location = ('./frodo-sam-fase3.html');
}