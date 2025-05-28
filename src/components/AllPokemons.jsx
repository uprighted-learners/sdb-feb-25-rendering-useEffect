import React, { useState, useEffect } from 'react'

function AllPokemons() {

	const [allPokemons, setAllPokemons] = useState([])

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setAllPokemons(data.results)
			})
	}, [])

	return (
		<div>{!allPokemons.length ? "Loading" : allPokemons.map((p, i) => (<h1 key={i}>{p.name}</h1>))}</div>
	)
}

export default AllPokemons