import { useState, useEffect } from 'react'
import Auth from './components/Auth'
import './App.css'
import AllPokemons from './components/AllPokemons'

function App() {

	/* 
		? useEffect()
		* hook allowing us to perform side-effects in React
		* these include: DOM manipulation; setTimeouts; and fetching data
		* it takes a callback fx; cleanup fx; and a dependency
		* callback fx
			* fx that runs (by default every time a re-render occurs)
		* cleanup fx
			* runs after the callback fx (optional if specified)
		* dependendencies
			* none --> runs after every render
			* [] (empty dependency) --> runs on initial page load ONLY
			* [<some_dependency>] --> runs on initial page load and if the dependency changes

	*/

	const [ ourDependency, setOurDependency ] = useState(false)

	useEffect(() => {
		console.log("use effect triggered")
	}, [ourDependency])

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
	  <button onClick={() => setOurDependency(!ourDependency)}>Dependency Switch</button>
      <Auth />
	  <AllPokemons />
    </>
  )
}

export default App
