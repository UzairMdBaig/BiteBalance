import React from "react"
import { useState } from "react"
import {auth} from "./config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "./config/firebase"
import { setDoc, doc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

export default function Signin(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formData, setFormData] = useState({

        name: "",
        age: "",
        weight: "",
        height: "",
        gender: "male",
        isDiabetic: false,
        isHighBP: false,
        isHeartDisease: false,
        isObese: false,
        isHF: false,
        isCelicDisease: false,
        isLactoseInt: false,
        isFructoseInt: false,
        isMTHFR: false,
        isGalactosemia: false,
        isHH: false,
        isSIDeficient: false,
        isIronDeficient: false,
        isVitADeficient: false,
        isVitDDeficient: false,
        isVitB12Deficient: false,
        isVitEDeficient: false,
        isZincDeficient: false,
        isCalciumDeficient: false,
        isMagnesiumDeficient: false
    })
    const navigate = useNavigate()

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        if (name == "email"){
            setEmail(value)
        }
        else if (name == "password"){
            setPassword(value)
        }
        else {
            setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        }
    }

    const handleSubmit = async (e)=>{
        try{
            e.preventDefault()
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user
            await setDoc(doc(db,"UserData",user.uid),{...formData, userID:user.uid})
            navigate("/rag-recipy-gen")
        }
        catch(error){
            console.log(error.message)
        }
    }

    return(
        <div className="flex flex-col justify-center bg-gray-700 items-center p-14 h-full sm:bg-avocado_dark sm:bg-cover" >
            <form className="sm:grid sm:grid-cols-2 sm:gap-14"  onSubmit={handleSubmit}>
                <div className="flex flex-col bg-transparent rounded-xl border-4 border-white h-full w-full p-8 mb-8 sm:backdrop-blur">
                <h2 className="text-white text-4xl font-bold mb-8 sm:mb-16">Sign Up</h2>
                <input 
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        className="p-2 bg-transparent rounded-lg border-4 text-white border-white mb-4 w-full sm:mb-12"  
                        onChange={handleChange}
                        value={formData.name}
                        required

                    />
                <input 
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        className="p-2 bg-transparent rounded-lg border-4 text-white border-white mb-4 w-full sm:mb-14"  
                        onChange={handleChange}
                        value={email}
                        required

                    />
                <input 
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        className="p-2 bg-transparent rounded-lg border-4 text-white border-white mb-4 w-full sm:mb-12"  
                        onChange={handleChange}
                        value={password}
                        required

                    />
                <input 
                        type="number"
                        placeholder="Enter Age"
                        name="age"
                        className="p-2 bg-transparent rounded-lg border-4 text-white border-white mb-4 w-full sm:mb-12"  
                        onChange={handleChange}
                        value={formData.age}
                        required

                    />
                <input 
                        type="number"
                        placeholder="Enter Weight (in Kg)"
                        name="weight"
                        className="p-2 bg-transparent rounded-lg border-4 text-white border-white mb-4 w-full sm:mb-12"   
                        onChange={handleChange}
                        value={formData.weight}
                        required

                    />
                <input 
                        type="number"
                        placeholder="Enter Height (in cm)"
                        name="height"
                        className="p-2 bg-transparent rounded-lg border-4 text-white border-white mb-4 w-full sm:mb-12"   
                        onChange={handleChange}
                        value={formData.height}
                        required
                    />
                <fieldset className="flex gap-2 sm:mt-4">
                    <h3 className="text-xl text-white mr-8">Specify gender: </h3>
                    <input 
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                    />
                    <label 
                        className="text-lg text-white"
                        htmlFor="male">Male
                    </label>

                    <input 
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="female"
                        className="text-lg text-white">Female
                    </label>
                </fieldset>
                </div>
                <div className="flex flex-col bg-transparent rounded-xl border-4 border-white h-full w-full p-8 sm:backdrop-blur">
                <h2 className="text-white text-4xl font-bold mb-8">Please specify your health concerns: </h2>
                <div className="grid grid-cols-2 gap-4 s sm:gap-8">
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isDiabetic" 
                            name="isDiabetic"
                            checked={formData.isDiabetic}
                            onChange={handleChange}
                        />
                        <label className="text-white" htmlFor="isDiabetic">Diebetes</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isHighBP" 
                            name="isHighBP"
                            checked={formData.isHighBP}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isHighBP">High BP</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isHeartDisease" 
                            name="isHeartDisease"
                            checked={formData.isHeartDisease}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isHeartDisease">Heart Disease</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isObese" 
                            name="isObese"
                            checked={formData.isObese}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isObese">Obesity</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                        type="checkbox" 
                        id="isHF" 
                        name="isHF"
                        checked={formData.isHF}
                        onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isHF">Familial Hypercholesterolemia</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isCelicDisease" 
                            name="isCelicDisease"
                            checked={formData.isCelicDisease}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isCelicDisease">Celiac Disease</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isLactoseInt" 
                            name="isLactoseInt"
                            checked={formData.isLactoseInt}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isLactoseInt">Lactose Intolerance</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isFructoseInt" 
                            name="isFructoseInt"
                            checked={formData.isFructoseInt}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isFructoseInt">Fructose Intolerance</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isMTHFR" 
                            name="isMTHFR"
                            checked={formData.isMTHFR}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isMTHFR">MTHFR gene mutation</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isGalactosemia" 
                            name="isGalactosemia"
                            checked={formData.isGalactosemia}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isGalactosemia">Galactosemia</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isHH" 
                            name="isHH"
                            checked={formData.isHH}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isHH">Hereditary hemochromatosis</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isSIDeficient" 
                            name="isSIDeficient"
                            checked={formData.isSIDeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isSIDeficient">Sucrase-isomaltase deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isIronDeficient" 
                            name="isIronDeficient"
                            checked={formData.isIronDeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isIronDeficient">Iron deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isVitADeficient" 
                            name="isVitADeficient"
                            checked={formData.isVitADeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isVitADeficient">Vitamin A deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isVitDDeficient" 
                            name="isVitDDeficient"
                            checked={formData.isVitDDeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isVitDDeficient">Vitamin D deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isVitB12Deficient"
                            name="isVitB12Deficient" 
                            checked={formData.isVitB12Deficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isVitB12Deficient">Vitamin B12 deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isVitEDeficient" 
                            name="isVitEDeficient"
                            checked={formData.isVitEDeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isVitEDeficient">Vitamin E deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isZincDeficient" 
                            name="isZincDeficient"
                            checked={formData.isZincDeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isZincDeficient">Zinc deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isCalciumDeficient" 
                            name="isCalciumDeficient"
                            checked={formData.isCalciumDeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isCalciumDeficient">Calcium deficiency</label>
                    </div>
                    <div className="flex gap-4">
                        <input 
                            type="checkbox" 
                            id="isMagnesiumDeficient" 
                            name="isMagnesiumDeficient"
                            checked={formData.isMagnesiumDeficient}
                            onChange={handleChange}
                        />
                        <label className="text-lg text-white" htmlFor="isMagnesiumDeficient">Magnesium deficiency</label>
                    </div>
                </div>
                <button className="border-4 mt-6 w-full rounded-md p-1 text-white" onClick={handleSubmit}>done</button>
                </div>
            </form>
        </div>
    )
}
