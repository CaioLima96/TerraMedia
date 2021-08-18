function escolhaMisterimirFase1 () {

    while (true) {
        var escolhaMisterimirFase1 = prompt('Digite sua escolha (Digite apenas o número): \n 1 - Aliado \n 2 - Inimigo')

        if (escolhaMisterimirFase1 == 1) {

            let caminhoBemMisterimirFase1 =  document.getElementById("main-container").innerHTML = `
            
            <h1>Fase 1.2 - Ajuda a caminho!</h1>

            <section id="content">

                <img src="../../img/outros/talion-fortaleza.jpg" alt="Talion invadindo fortaleza">

                <p>Carnán, o Espírito da Natureza, percebe que Talion está tendo dificuldades em derrubar a fortaleza Sharkhburz e pede ajuda a Misterimir, que prontamente atende ao pedido.</p>

            </section>

            <button onclick="parte2MisterimirFase1Bem()"><p>Avançar</p></button>
            `;

            return caminhoBemMisterimirFase1;

        } else if (escolhaMisterimirFase1 == 2) {

            let caminhoMalMisterimirFase1 =  document.getElementById("main-container").innerHTML = `

            <h1>Fase 1.2 - Defenda Sharkhburz!</h1>

            <section id="content">

            <img src="../../img/outros/takra-vs-talion.jpg" alt="Takra vs Talion">

            <p>Com sua ajuda, Takra-Kar consegue matar Talion e continuar na liderança da Fortaleza Sharkhburz. Carnán, o Espírito da Natureza está cada vez mais perto da derrota!</p>

            </section>

            <button onclick="parte2MisterimirFase1Mal()"><p>Avançar</p></button>

            `;
            return caminhoMalMisterimirFase1;

        } else {
            alert('Opção invalida, escolha denovo')
            
        }
    }
    
}


function parte2MisterimirFase1Bem() {
    
    let MisterimirFase1Bem =  document.getElementById("main-container").innerHTML = `

    <h1> Fase 1.2 - Ajuda a caminho! </h1>

    <section id="content">

        <img src="../../img/outros/misterimir-vs-orc-captain.jpg" alt="Misterimir vs Orc">

        <p>Felizmente Misterimir mata Shukah Khur, o Come Mosca. Com um dos capitães de Sharkhburz morto, Talion mata o líder e conquista a fortaleza.</p>

    </section>

    <button onclick="proximaFaseMisterimirFase1Bem()"><p>Próxima Fase</p></button>

    `;

    return MisterimirFase1Bem;
}

function parte2MisterimirFase1Mal() {
    
    let MisterimirFase1Mal =  document.getElementById("main-container").innerHTML = `

    <h1>Fase 1.2 - Defenda Sharkhburz!</h1>

    <section id="content">

    <img src="../../img/outros/ataque-dos-nazgul.jpg" alt="Nazgul">

        <p>Você se deixou levar pela influência de Sauron e virou um Nazgul! Vá e ajude a defender Mordor!</p>

    </section>

    <button onclick="proximaFaseMisterimirFase1Mal()"><p>Próxima Fase</p></button>

    `;

    return MisterimirFase1Mal;
}

//função que me manda pra proxima fase
function proximaFaseMisterimirFase1Bem() {
    return location = ('./fase-bem/misterimir-fase2-bem.html');
}


function proximaFaseMisterimirFase1Mal() {
    return location = ('./fase-mal/misterimir-fase2-mal.html');
}
