"use client"
import { useState } from "react"

export default function Input(){
    const [inputValue,setInputValue]=useState("")

    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }

    return(
        <div>
            <h2>
                Controlled Component Example
            </h2>
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}/>
            <p>YOU TYPED:{inputValue}</p>
        </div>

    )
}