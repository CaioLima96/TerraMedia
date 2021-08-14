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

        <img src="../../img/personagens/pequenalf-o-branquinho-banner.jpg" alt="Pequenalf, O Branquinho">

        <p>Parabéns! Você completou a Jornada de Pequenalf, O Cinzentinha! Obrigado por ter jogado. Quer saber o que acontece se escolher um caminho diferente ou a jornaada de outro personagem? Clique no botão abaixo para jogar de novo!</p>

    </section>

    <a href="../../../index.html#personagens" id="gameOverButton"><p>Jogar de novo</p></a>
    `;

    return despedidaPequenalfFase3;
}