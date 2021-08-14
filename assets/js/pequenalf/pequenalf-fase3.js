function parte2PequenalfFase3() {

   

    let despedidaPequenalfFase3 =  document.getElementById("main-container").innerHTML = `
            
    <h1>FIM</h1>

    <section id="content">

        <img src="../../img/gif/gandalf-epic-sax-guy-2.gif" alt="Gandalf Epic Sax Guy Gif">

        <p>Parabéns! Você completou a Jornada de Pequenalf, O Cinzentinho! Obrigado por ter jogado. Quer saber o que acontece se escolher um caminho diferente ou a jornada de outro personagem? Clique no botão abaixo para jogar de novo!</p>

    </section>

    <audio autoplay id="myAudio"> <source src="../../audio/epic-sax-guy-2.mp3" type="audio/mpeg"></audio>

    <a href="../../../index.html#personagens" id="gameOverButton"><p>Jogar de novo</p></a>
    `;
    
    return despedidaPequenalfFase3;
}

function myAudioVolumeDown () {
    var audio = document.getElementById("myaudio");
    audio.volume = 0.2;
}