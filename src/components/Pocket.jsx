import React, { useEffect, useState } from 'react'
import NavPoc from './NavPoc'
import axios from 'axios'
import Poc from './Poc';



  function Pocket() {
    const [poke, setPoke] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [number, setNumber] = useState(1);
    const [add, setAdd] = useState([]);

    useEffect(()=>{
      let abortController = new AbortController();

      const loadPoke = async () => {
        try {
          setLoading(true);
          let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
            signal: abortController.signal
          });
          
          setPoke(response.data);
          setError("");


        }catch(error){
          setError("Something Went Wrong", error);
        }finally{
          setLoading(false);
        }
      }

      loadPoke();

      return () => abortController.abort();

      
    }, [number])

    console.log(poke);

    const prevPoke = () => {
      setNumber((number)=> number - 1);
    }

    const nextPoke = () => {
      setNumber((number)=> number + 1);
    }

    const addPoc = () => {
      setAdd((oldState) => [...oldState, poke])
    }

  return (
    <div>
      <NavPoc />
      <div className='max-w-screen-2xl mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "'>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div >
          <h1 className='title'>{poke?.name}</h1>
          <br />
          <button onClick={addPoc}>Add to pocket</button>
          <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
          <button onClick={prevPoke}>Previous</button>  <button onClick={nextPoke}>Next</button>
        </div>
          <div>
            <h2 className='title'>Your Pocket</h2>
            <Poc add={add}/> 
          </div>
    </div>
    </div>
    </div>
  )
}

export default Pocket
