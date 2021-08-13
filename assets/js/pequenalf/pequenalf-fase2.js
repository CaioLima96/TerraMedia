function escolhaPequenalfFase2 () {

    while(true) {
        var escolhaPequenalfFase2 = prompt('Digite sua escolha: \n 1 - Você não vai passar! \n 2 - Expecto Patronum \n 3 - Fugir ')

        if (escolhaPequenalfFase2 == 1) {

            let sucessopequenalfFase2 =  document.getElementById("main-container").innerHTML = `
            
            <h1>Fase 2 - A Ponte de Khazad-dûm</h1>

            <section id="content">

                <img src="../../img/outros/you-shall-not-pass.jpg" alt="Pequenalf vs Balrog">

                <p>Parabéns! Balrog foi impedido de matar seus amigos! Mas infelizmente ele te puxou para baixo, em direção à um abismo sem fim. Os 2 batalharam por 2 longos dias. Seu inimigo foi derrotado, mas você não resistiu aos ferimentos da batalha e a escuridão acabou te alcançando... </p>

            </section>

            <button onclick="proximaFasePequenalfFase2()"><p>Próxima Fase</p></button>
            `;

            return sucessopequenalfFase2;

        // } else if (escolhaPequenalfFase2 == 2) {

        //     let gameOverPequenalfFase2 =  document.getElementById("main-container").innerHTML = `

        //     <h1>Fase 1 - A Reunião</h1>

        //     <section id="content">

        //         <img src="../../img/outros/sociedade-anel-reuniao-2.jpg" alt="Sociedade do Anel">

        //         <p>Com os objetivos definidos, a Sociedade do Anel parte em direção à Montanha da Perdição!</p>

        //     </section>

        //     <button onclick="proximaFasePequenalfFase1()"><p>Próxima Fase</p></button>

        //     `;
        //     return gameOverPequenalfFase2;

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }
}


//função que me manda pra proxima fase
// function proximaFasePequenalfFase2() {
//     return location = ('./pequenalf-fase3.html');
// }