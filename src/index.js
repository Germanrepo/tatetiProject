const cell = document.querySelectorAll('.cell')
const crossTurn = document.querySelector('.cross')
const circleTurn = document.querySelector('.circle')
const crossSvg = document.querySelectorAll('.crossSvg')
const circleSvg = document.querySelectorAll('.circleSvg')

const modalWinner = document.querySelector('#modalWinner')
const modalTie = document.querySelector('#modalTie')
const winnerName = document.querySelector('#winnerName')

let turnPlayer
const cross = []
const circle = []
let winner = false
let check = false
let tie = false

const combinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [3, 5, 7]
]

cell.forEach((e, i) => {
    e.addEventListener('click', () => {

        if (check) {
            turnPlayer = 1
        } else {
            turnPlayer = 0
        }

        if (turnPlayer === 0) {
            crossSvg[i].style = 'opacity: 1'
            e.style = 'pointer-events: none'

            crossTurn.classList.remove('turnActive')
            circleTurn.classList.add('turnActive')

            cross.push(i + 1)
            check = true
        }

        if (turnPlayer === 1) {
            circleSvg[i].style = 'opacity: 1'
            e.style = 'pointer-events: none'

            circleTurn.classList.remove('turnActive')
            crossTurn.classList.add('turnActive')

            circle.push(i + 1)
            check = false
        }

        for (let i = 0; i < combinations.length; i++) {
            let containteCross = 0
            let containteCircle = 0
            cross.forEach(position => {
                if (combinations[i].includes(position)) containteCross++
            })
            circle.forEach(position => {
                if (combinations[i].includes(position)) containteCircle++
            })

            if (containteCross === 3 || containteCircle === 3) {
                winner = true
                break
            }
        }

        if (cross.length === 5 || circle.length === 5) tie = true

        if (tie && !winner) {
            modalTie.showModal()
        }

        if (winner) {
            modalWinner.showModal()
            winnerName.innerHTML = players[turnPlayer]
        }


    })
})
