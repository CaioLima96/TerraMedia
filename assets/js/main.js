function start () {

    while(true) {
        var personagemEscolhido = prompt('Escolha seu personagen (Digite apenas o número): \n 1 - Pequenalf \n 2 - Sam e Frodo \n 3 - Misterimir')

        if (personagemEscolhido == 1) {

            return location = ('./assets/fases/pequenalf/pequenalf-fase1.html');

        // } else if (personagemEscolhido == 2) {

        //     return location = ('')

        // } else if (personagemEscolhido == 3){

        //     return location = ('')

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }

}

// function recomecar() {
//     return location = ('')
// }