// src/components/LLMQuery.jsx
import React, { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { db } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';


const HealthReco = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [other, setOther] = useState(false);
  const [disease,setDisease] = useState('');

  const navigate = useNavigate()
  const diseases = [
    "Celiac Disease",
    "Lactose Intolerance",
    "Familial Hypercholesterolemia",
    "Galactosemia",
    "Hereditary hemochromatosis",
    "Fructose Intolerance",
    "MTHFR gene mutation",
    "Sucrase-isomaltase deficiency",
    "Heart disease",
    "Diabetes",
    "obesity ",
    "high BP",
    "Iron deficiency anemia",
    "Vitamin A deficiency",
    "Vitamin D deficiency",
    "Iodine deficiency",
    "Vitamin B12 deficiency",
    "Zinc deficiency",
    "Calcium deficiency",
    "Vitamin E deficiency",
    "Magnesium deficiency"
  ]


  const diseases_list = diseases.map(disease => {
    return <option value={disease}>{disease}</option>
  })

  const logOut = async () => {
    await signOut(auth)
    navigate("/")
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    setError(null);
    setResponse('');
    console.log(auth.currentUser.uid)
    const docRef = doc(db, "UserData", auth.currentUser.uid)
    const data = await getDoc(docRef);
    const user_doc = data.data()
    const all_diseases = Object.keys(user_doc).reduce((acc, key) => {
      if (typeof user_doc[key] === 'boolean') {
        acc[key] = user_doc[key];
      }
      return acc;
    }, {});
    const post = {
      recipy: query,
      diseases: all_diseases
    }
    console.log(post)
    try {
      console.log(post)
      const res = await fetch('http://127.0.0.1:5000/food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log(data.response)
      setResponse(data.response);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-tomato bg-cover p-10">
      <div className="h-auto w-full p-4 shadow-md bg-transparent backdrop-blur rounded-xl border-4 border-white">
        <div className='flex justify-between'>
          <h1 className="text-white text-3xl font-bold mb-4">LLM Query Interface</h1>
          <button className="rounded-xl bg-orange-600 font-roboto w-20 h-10 text-white font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" onClick={logOut}>Log out</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex flex-row justify-between items-center">
              <h2 className="block font-medium text-lg text-white">Dish Name</h2>
              {error && <p className="font-medium text-lg text-red-500">Error: {error}</p>}
            </div>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="mt-1 mb-2 block w-full bg-gray-900 text-white p-2 border border-gray-300 rounded-md sm:text-sm"
              placeholder="Enter your query here"
              required
            />
          </div>
          <div className="flex">
          <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={other} onChange={()=>setOther(prevOther=>!prevOther)} className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
            <span className="ms-3 text-sm text-white font-medium dark:text-gray-300">{other?"for others":"for me"}</span>
          </label>
          {other && ( 
            <select
               value={disease}
               onChange={(e)=>setDisease(e.target.value)}
               className='ml-6 pl-3 rounded-md border scrollbar-hide border-white text-white bg-gray-900'
               id="cars"
            >
              {diseases_list}
            </select> )}
            </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
        {response && (
          <div className="mt-6 p-3 h-64 bg-gray-900 text-white rounded-md border-4 border-orange-600 overflow-y-auto scrollbar-hide">
            <h2 className="text-lg font-semibold">Response:</h2>
            <p className="text-white">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthReco;
