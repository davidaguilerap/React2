import { Square } from './Square'

export function WinnerModal ({winner, resteGame}) {
    if (winner === null) return null
    const winnerText = winner ===false ? 'Empate':'Ganó'
    
    return (
        
        
            <section className='winner'>
                <div className='text'>
                    <h2>
                        {winnerText}
                    </h2>
                    <header>
                        {winner && <Square>{winner}</Square>} 
                    </header>
                    <footer>
                        <button onClick={resteGame}>Emprezar de nuevo</button>
                    </footer>

                </div>
            </section>


    )
}