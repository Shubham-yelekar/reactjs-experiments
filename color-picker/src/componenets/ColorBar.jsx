import React from 'react'

const ColorBar = ({setColor}) => {

  const colorList = {
    Red: 'bg-red-500',
    Orange: 'bg-orange-500',
    Blue: 'bg-blue-500',
    Green: 'bg-green-500',
    Pink: 'bg-pink-500'
  }

  return (
    <div className='bg-white p-1 flex flex-wrap gap-1 rounded-full '>
        
        {Object.entries(colorList).map(([name, color]) => (
        <button
          key={name}
          className={`px-4 py-2 rounded-full ${color}`}
          
          onClick={() => setColor(color)}
        >
          {name}
        </button>
      ))}
        
    </div>
  )
}

export default ColorBar