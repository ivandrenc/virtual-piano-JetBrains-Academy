document.addEventListener("keypress", function (event) {
    let audio = document.createElement("AUDIO")
    if (event.key == "A") {
        audio.src = "audios/A.mp3";
        audio.play();
    }
    else if (event.key == "S") {
        audio.src = "audios/S.mp3";
        audio.play();
    }
    else if (event.key == "D") {
        audio.src = "audios/D.mp3";
        audio.play();
    }
    else if (event.key == "F") {
        audio.src = "audios/F.mp3";
        audio.play();
    }
    else if (event.key == "G") {
        audio.src = "audios/G.mp3";
        audio.play();
    }
    else if (event.key == "H") {
        audio.src = "audios/H.mp3";
        audio.play();
    }
    else if (event.key == "J") {
        audio.src = "audios/J.mp3";
        audio.play();
    }
    else if (event.key == "W") {
        audio.src = "audios/W.mp3";
        audio.play();
    }
    else if (event.key == "E") {
        audio.src = "audios/E.mp3";
        audio.play();
    }
    else if (event.key == "T") {
        audio.src = "audios/T.mp3";
        audio.play();
    }
    else if (event.key == "Y") {
        audio.src = "audios/Y.mp3";
        audio.play();
    }
    else if (event.key == "U") {
        audio.src = "audios/U.mp3";
        audio.play();
    }
    else {
        console.log("fail key")
    }


});