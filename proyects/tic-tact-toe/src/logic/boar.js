import { TURNS,WINNER_COMBO } from '../costants.js'

//revisa si hay ganador

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBO) {
        const [a, b, c] = combo

        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
          
            return boardToCheck[a] // X o O
        }

    }
    return null
}

export const checkEndGame = (newBoard) => {
    //revisamos si no hay mas espacios vacios en el tablero
    return newBoard.every((posicion) => posicion !== null)
}
