function start () {

    while(true) {
        var personagemEscolhido = prompt('Escolha seu personagen (Digite apenas o número): \n 1 - Pequenalf \n 2 - Sam e Frodo \n 3 - Misterimir')

        if (personagemEscolhido == 1) {

            return location = ('./assets/fases/pequenalf/pequenalf-fase1.html');

        } else if (personagemEscolhido == 2) {

           return location = ('./assets/fases/frodo-sam/frodo-sam-fase1.html')

        } else if (personagemEscolhido == 3){

            return location = ('./assets/fases/misterimir/misterimir-fase1.html')

        } else {
            alert('Opção invalida, escolha denovo')
        }
    }

}

// function recomecar() {
//     return location = ('')
// }