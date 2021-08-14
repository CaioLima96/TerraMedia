// function escolhaPequenalfFase3 () {

//     let avancarPequenalfFase3 = document.getElementById("main-container").innerHTML = `
            
//     <h1>Fase 3 - Resurrección</h1>

//     <section id="content">

//         <img src="../../img/personagens/pequenalf-o-branquinho-banner.jpg" alt="Pequenalf, O Branquinho">

//         <p>Pequenalf, O Branquinho</p>

//     </section>

//     <button onclick="parte2PequenalfFase3()"><p>Próxima Fase</p></button>
//     `;

//     return avancarPequenalfFase3;
// }


//função que me manda pra parte 2 do pequenalf fase 3
function parte2PequenalfFase3() {


    let despedidaPequenalfFase3 =  document.getElementById("main-container").innerHTML = `
            
    <h1>FIM</h1>

    <section id="content">

        <img src="../../img/outros/gandalf-epic-sax-guy.gif" alt="Gandalf Epic Sax Guy">

        <p>Parabéns! Você completou a Jornada de Pequenalf, O Cinzentinho! Obrigado por ter jogado. Quer saber o que acontece se escolher um caminho diferente ou a jornada de outro personagem? Clique no botão abaixo para jogar de novo!</p>

    </section>

    <audio autoplay> <source src="../../music/epic-sax-guy.mp3" type="audio/mpeg"></audio>

    <a href="../../../index.html#personagens" id="gameOverButton"><p>Jogar de novo</p></a>
    `;

    return despedidaPequenalfFase3;
}