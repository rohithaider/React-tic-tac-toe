import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));  //creating state for the parent and filling it up with array of 9 elements with null
  const [xIsNext,setXIsNext]=useState(true);  //creating state for holding the value  for 'X' and 'O'

  function handleClick(i) {
    const nextSquares = squares.slice();   //copy the array for not mutating the original squares
    if(xIsNext){
      nextSquares[i]="X";
    }else{
      nextSquares[i]="O";
    }
    setSquares(nextSquares);   //updating state and rendering 
    setXIsNext(!xIsNext); //since it is a primitive value, we don't need to copy it
  }

  return (
    <>
      <div className="flex">
        {/* /Passing arrow function to the onSquareClick so that it does not trigger. */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />   
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
