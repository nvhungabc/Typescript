import Avatar from "./components/avatar"
import { useState } from "react"
import Square from "./components/squase"
import Board from "./components/board"
const App = () => {
    // const [couter, setcouter] = useState(1)
    // function insert() {
    //     setcouter(couter + 1)
    // }
    // function item() {
    //     setcouter(couter - 1)
    // }
    // var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // const [times, setTime] = useState(today.getSeconds())
    // function Show() {
    //     setTime(times + 1);
    // }
    // return <div className="h-[100vh] flex flex-col justify-center items-center">
    //     <div>
    //         <button onClick={Show} className="border hover:bg-pink-500">Show</button>
    //         <h1>{time}</h1>
    //     </div>


    //     <div>
    //         <div className="h-[100vh] flex flex-col justify-center items-center">
    //             <button onClick={insert} className="border hover:bg-pink-500">🔼</button>
    //             <h1>{couter}</h1>
    //             <button onClick={item} className="border hover:bg-pink-500">🔽</button>
    //         </div>
    //     </div>
    // </div>
    return <div
        className="h-[100vh] flex flex-col justify-center items-center">
        <Board>
         
        </Board>
    </div>
}
export default App