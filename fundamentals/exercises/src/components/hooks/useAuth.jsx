import React, { useEffect, useState } from 'react'

const useAuth = () => {
  const [login, setLogin] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
      setLogin(true)
    },5000)
  }, )
  
 return login
}

export default useAuth