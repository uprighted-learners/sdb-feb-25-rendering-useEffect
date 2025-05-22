import { useState } from 'react'
import Auth from './components/Auth'
import './App.css'

function App() {

  // light switch state variable with initial value of false
  const [ lightSwitch, setLightSwitch ] = useState(false)
  console.log(lightSwitch)

  function displayLight() {
    if (lightSwitch) {
      return <h1>The light is on</h1>
    } else {
      return <h1>The light is off</h1>
    }
  }

  return (
    <>
      <button onClick={() => setLightSwitch(!lightSwitch)}>Light Switch</button>
      { lightSwitch ? <h1>The light is on</h1> : <h1>The light is off</h1>}
      {displayLight()}
      <Auth />
    </>
  )
}

export default App
