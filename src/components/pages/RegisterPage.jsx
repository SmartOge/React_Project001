import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from '../shared/Button'
import { useNavigate } from "react-router-dom"

function RegisterPage() {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const redirect = useNavigate()

async function registerHandler(e) {
  e.preventDefault()

  try {
    const res = await fetch(`http://localhost:3010/api/login`, {
      method: "POST",
      Headers: {
        "Content-Type": "application/json"
      },
      body: JSON.strignify({username, email, password})
    })
    const data = await res.text()

    if (data === "exit") {
      alert("User already exist")
    }else if (data !== "exit") {
      redirect("/login")
    }
    }
    catch(err) {
      console.log(err);
    }
  }


  return (
    <Card>
      <form onSubmit={registerHandler}>
        <div>
            <input type="text" placeholder='Username' onChange={(e) =>{
              setUsername(e.target.value)
            }} 
            required/>

            <input type="email" placeholder='Email' onChange={(e) =>{
                  setEmail(e.target.value)
                }} 
                required 
                />

            <input type="password" placeholder='Password' onChange={(e) =>{
                  setPassword(e.target.value)
                }} 
                required
                />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </Card>
  )
}

export default RegisterPage