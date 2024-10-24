
import './App.css'
import { useState } from 'react'
export default function Board() {
  const Array = ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
  const [squares, setSquares] = useState(Array(9).fill(null));

  function Square(){
    const [value, setValue] = useState(null)
    function handleClick(){
      setValue('✘')
    }
    return <button onClick={handleClick} className='square'>{value}</button>
  }
  return (<>

    <div className='flex'>
      <Square value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
    </div>
    <div className='flex'>
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
    </div>
    <div className='flex'>
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
    </div>
     </>
  )

}
