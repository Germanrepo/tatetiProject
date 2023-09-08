const btnReloadWinner = document.querySelector('#btnReloadWinner')
const btnPlayWinner = document.querySelector('#btnPlayWinner')

const btnReloadTie = document.querySelector('#btnReloadTie')
const btnPlayTie = document.querySelector('#btnPlayTie')




btnPlayWinner.addEventListener('click', () => {
    winner = false
    check = false
    tie = false
    cross.length = 0
    circle.length = 0

    cell.forEach((e, i) => {
        crossSvg[i].style = 'opacity: 0'
        circleSvg[i].style = 'opacity: 0'
        e.style = 'pointer-events: auto'
    })

    if (circleTurn.classList.value.includes('turnActive')) {
        circleTurn.classList.remove('turnActive')
        crossTurn.classList.add('turnActive')
    }
    modalWinner.close()
})

btnReloadWinner.addEventListener('click', () => {
    location.reload()
})


btnPlayTie.addEventListener('click', () => {
    tie = false
    winner = false
    check = false
    cross.length = 0
    circle.length = 0

    cell.forEach((e, i) => {
        crossSvg[i].style = 'opacity: 0'
        circleSvg[i].style = 'opacity: 0'
        e.style = 'pointer-events: auto'
    })

    if (circleTurn.classList.value.includes('turnActive')) {
        circleTurn.classList.remove('turnActive')
        crossTurn.classList.add('turnActive')
    }
    modalTie.close()
})

btnReloadTie.addEventListener('click', () => {
    location.reload()
})


