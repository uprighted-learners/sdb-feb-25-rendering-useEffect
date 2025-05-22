import React, { useState } from 'react'

function Auth() {

    const [ fullName, setFullName ] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isRegister, setisRegister] = useState(false)
    console.log(isRegister)

    function handleData(e) {
        console.log(e)
    }

  return (
    <form action="">
        { !isRegister ? null : <input type="text" name="name" id="name" placeholder="Enter Name" /> }
        <input type="email" name="email" id="email" placeholder="Enter Email" />
        <input type="password" name="pwd" id="pwd" placeholder="Enter Password" />
        <button onClick={() => setisRegister(!isRegister)} type='button'>{ isRegister ? "Already have an account? Login" : "Create Account"}</button>
        <button onClick={handleData} type='button'>Go</button>
    </form>
  )
}

export default Auth