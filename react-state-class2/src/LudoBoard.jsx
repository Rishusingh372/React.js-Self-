import {useState} from "react";

export default function LudoBoard(){
    let [moves,setMoves] = useState({blue: 0 , yellow: 0 , green: 0 , red: 0});

    let updateBlue = () => {
        moves.blue += 1;
        console.log(moves);
        setMoves({...moves});
    };

    let updateYellow = () => {
        moves.yellow += 1;
        console.log(moves);
        setMoves({...moves});
    };

    let updateGreen = () => {
        moves.green += 1;
        console.log(moves);
        setMoves({...moves});
    };

    let updateRed = () => {
        moves.red += 1;
        console.log(moves);
        setMoves({...moves});
    };

    return(
    <div>
        <p>Game Begins!</p>
        <div className="board">
            <p>Blue moves= {moves.blue} </p>
            <button style={{ backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves= {moves.yellow} </p>
            <button style={{ backgroundColor: "Yellow"}} onClick={updateYellow}>+1</button>
             <p>Green moves= {moves.green} </p>
            <button style={{ backgroundColor: "Green"}} onClick={updateGreen}>+1</button>
             <p>Red moves= {moves.red} </p>
            <button style={{ backgroundColor: "Red"}} onClick={updateRed}>+1</button>

        </div>
    </div>
    );
}