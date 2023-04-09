// import { useState, useEffect } from "react"
// import Square from "./squase"

// const Board = ({ children }) => {
//     const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
//     const [player, setplayer] = useState(true)
//     const [timer,setTimer]=useState(3)
//     const handlePlay = (position) => {
//         const newGame = game.map((g, index) => {
//             if (index === position) {
//                 return player ? "X" : "O"
                
//             }
//             return g
//         })
//         if(checkWinner()){
//             return true
//         }
//         setGame(newGame)
//         setplayer(!player)
//     }
//     const handleAutoPlay = () => {
//         const emptyGame = game.map((square, index) => square ? null : index).filter(item => item != null)
//         const position = emptyGame[Math.floor(Math.random()*emptyGame.length)];
//         handlePlay(position)
//         setTimer(3)
//     }
//     const listWinner = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
//     ]
//     const checkWinner = () => {
//         for (let i = 0; i < listWinner.length; i++) {
//             const [p1, p2, p3] = listWinner[i];
//             if (game[p1] === game[p2] && game[p2] === game[p3]) {
//                 return game[p1];
//             }
//         }
//         return null;
//     }
//     useEffect(() => {
//         if (timer < 0) {
//             handleAutoPlay()
//         }

//         const interval = setInterval(() => {
//             setTimer(timer - 1)
//         }, 1000)

//         return () => clearInterval(interval)
//     }, [timer])

//     const handleReset = () => {
//         setGame([null, null, null, null, null, null, null, null, null])
//     }
//     const winner = checkWinner()
//     return <><h2 className="border-3 m-5"> ❌⭕ TIC TAC TOE ⭕❌</h2>
// <h2>Time:{timer}</h2>
//         <div className="bg-cyan-100 rounded-xl m-0.5	">
           
//             <div className="grid grid-cols-3 gap-2 w-[240px] m-10	">
//                 <Square value={game[0]} position={0} handlePlay={handlePlay} />
//                 <Square value={game[1]} position={1} handlePlay={handlePlay} />
//                 <Square value={game[2]} position={2} handlePlay={handlePlay} />
//                 <Square value={game[3]} position={3} handlePlay={handlePlay} />
//                 <Square value={game[4]} position={4} handlePlay={handlePlay} />
//                 <Square value={game[5]} position={5} handlePlay={handlePlay} />
//                 <Square value={game[6]} position={6} handlePlay={handlePlay} />
//                 <Square value={game[7]} position={7} handlePlay={handlePlay} />
//                 <Square value={game[8]} position={8} handlePlay={handlePlay} />
//             </div>

//         </div>
//         {winner !== null ?
//                 <button onClick={handleReset} className="text-center bg-rose-500 rounded-xl py-3 px-5 m-3">Reset</button>
//                 :
//                 <p>No winner yet</p>
//             }
//         {winner == null ?
//             <button onClick={handleReset} className="text-center bg-rose-500 rounded-xl py-3 px-5 m-3">Reset</button>:
//             <h2 className="text-center bg-rose-500 rounded-xl py-3 px-5 m-3">Winner is: {checkWinner()}</h2>
            
//         }

//     </>
// }


// export default Board