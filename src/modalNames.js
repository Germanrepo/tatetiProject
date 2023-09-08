const modalInit = document.querySelector('#modalInit')
const namePlayers = document.querySelectorAll('.init_name')
const playButton = document.querySelector('#playBtn')
const namePlayer1 = document.querySelector('#namePlayer1')
const namePlayer2 = document.querySelector('#namePlayer2')

let players = []

modalInit.showModal()

modalInit.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        playButton.click()
    }
})

playButton.addEventListener('click', () => {
    namePlayers.forEach((e, i) => {
        let nameTrim = e.value
        e.value = nameTrim.trim()

        if(e.value.length > 12) e.value = ''

        if (e.value === '') {
            players[i] = `Jugador ${i + 1}`
            e.value = ''
        } else {
            players.push(e.value)
            e.value = ''
        }
    })

    namePlayer1.innerText = players[0]
    namePlayer2.innerText = players[1]

    modalInit.close()
})


