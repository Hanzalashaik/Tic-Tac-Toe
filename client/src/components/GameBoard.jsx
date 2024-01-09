export default function GameBoard({ onSelectSquare, Board }) {
    // const [gameBoard,setgameBoard] = useState(initialBoard);
    // function handleClick(rowIndex,colIndex){
    //     setgameBoard((previousBoard)=>{
    //         const updatedBoard = [...previousBoard.map((innerArray)=>[...innerArray])];
    //         updatedBoard [rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {Board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}