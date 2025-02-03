import React from "react"
import { useState } from "react"
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"

export default function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleChange(event) {
        const {name, value} = event.target
        name == "email" ? setEmail(value):setPassword(value)
    }

    const handleSubmit = async ()=> {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/rag-recipy-gen")
        }
        catch(error){
            alert("Error: ",error)
        }
    }

    return(
        <div className="flex flex-col p-5 gap-6 h-96 w-96 bg-transparent backdrop-blur rounded-xl border-4 border-white">
            <h2 className=" text-center font-roboto text-4xl font-bold text-white">Sign in</h2>
            <input 
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    className="p-2 bg-transparent rounded-lg border-4 text-white border-white"  
                    onChange={handleChange}
                    value={email}

                />
            <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="p-2 bg-transparent rounded-lg border-4 text-white border-white"  
                    onChange={handleChange}
                    value={password}
            />
            <button className="p-2 bg-transparent rounded-lg border-4 border-white text-white" onClick={handleSubmit}>Sign In</button>
            <Link to="/signup" className="text-white pt-3">Not a member ? Sigh Up here</Link>
        </div>
    )
}