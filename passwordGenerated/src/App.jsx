import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(
    () => {
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      if (numberAllowed) str += '0123456789';
      if (charAllowed) str += '!@#$%^&*()_+';

      for (let i = 1; i <= length; i++){
        let char = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)
    },
    [length, numberAllowed,charAllowed, setPassword],
  )

  const passwordRef = useRef(null)

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto p-5 m-5 bg-gray-800 rounded-sm">
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className="ouline-none w-full py-1 px-3 text-black"
          placeholder="Password"
          readOnly
          />
          <button onClick={copyPasswordClipboard} className="bg-blue-500 px-4">Copy</button>
        </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range"
              min={6}
              max={50}
              value={length}
              id="length"
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
              />
              <label htmlFor="length">Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id="charInput"
                onChange={()=>{
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
