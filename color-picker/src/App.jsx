import { useState } from 'react'
import './App.css'
import ColorBar from './componenets/ColorBar'

function App() {
  const [color, setColor ] = useState('bg-red-500')

  return (
    <body className={`w-full h-[100vh] pb-8 flex flex-col justify-end items-center duration-200 ${color}`}>
      <ColorBar setColor={setColor} />
    </body>
  )
}

export default App
