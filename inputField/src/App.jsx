import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App(){
  const  [data,setData]=useState()

  function func1(v){
    console.log(v.target.value)
    setData(v.target.value)
  }

return(
  <>
  <h3>Get input value - {data}</h3>
  <input type="text" onChange={func1}/>
  
  
  
  
  
  
  
  
  </>
)
}


export default App
