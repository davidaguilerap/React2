import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx' //importamos el componente square
import { TURNS } from './costants.js'
import { checkWinner, checkEndGame } from './logic/boar.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import './App.css'


//todas las constatntes y funciones se escriben arriba del function app 
//siemrpe q sean generales


function App() {
	//los states reciben un array de dos posiciones una sera el estado en si 
	//y la otra posicion indica si se ha actuualizado de alguna forma

	const [board, setBoard] = useState(() => {
		//ponemos esta funcion anonima dentro del use state
		const boardFromStorage = window.localStorage.getItem('board')

		if (boardFromStorage) return JSON.parse(boardFromStorage)
		return Array(9).fill(null)
	})

	const [turn, setTurns] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		console.log(turnFromStorage)
		return turnFromStorage
			?? TURNS.X
	})


	const [winner, setWinner] = useState(null) // null ganador no hay ganador, false empate,

	const resteGame = () => {
		setBoard(Array(9).fill(null))
		setTurns(TURNS.X)
		setWinner(null)
		
	}

	const updateBoard = (index) => {
		// no se actualiza el board si ya tiene algo
		if (board[index] || winner)
			return
		const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X //turn X / O
		const newBoard = [...board] //recoge el board actual y hace copia, nunca se muta el original
		//[... borad] hace una copia superficial del array, para hacer una copia profunda podemos usar structuredClone(board)
		newBoard[index] = turn //le ponemos en el indice del board actual el simbolo x u o
		setBoard(newBoard)
		setTurns(newTurn) // cambia estado y actualiza turn

		//guardar partida, manejo localstorage
		window.localStorage.setItem('board', newBoard)
		window.localStorage.setItem('turn', newTurn)

		//revisa si hay ganador
		const newWinner = checkWinner(newBoard)

		if (newWinner) {
			confetti()
			setWinner(newWinner)
		}
		else if (checkEndGame(newBoard)) {
			setWinner(false)
		}

	}

	return (
		<main className='board'>
			<h1>Tic-tac-toe</h1>
			<button onClick={resteGame}>Resetea el juego</button>
			<section className='game'>
				{
					board.map((_, index) => {
						//el key se pasa por q es un array para identificarlos
						// el index no tiene porq se el campo key

						return (
							<Square
								key={index}
								index={index}
								updateBoard={updateBoard}>
								{board[index]}

							</Square>
						)
					}
					)
				}
			</section>
			<section className="turn">
				<Square isSelected={turn === TURNS.X}>
					{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>
					{TURNS.O}</Square>

			</section>

			<WinnerModal resteGame={resteGame} winner={winner}></WinnerModal>

		</main>
	)
}

export default App
