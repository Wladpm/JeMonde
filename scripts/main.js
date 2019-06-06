const lecteur = document.getElementById('lecteur')
const buttonmute = document.getElementById('buttonmutesound')
const iconMute = document.getElementById('iconMute')

buttonmute.addEventListener('click', () => {
    if (lecteur.paused) {
        lecteur.play()
        iconMute.src = "./images/on.png"
    } else {
        lecteur.pause()
        iconMute.src = "./images/mute.png"
    }
})