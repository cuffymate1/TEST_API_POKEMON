import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
function PokemonDetail() {
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


  
  return (
    <>
    <Navbar />
      <div className='max-w-screen-2xl mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' >
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <div >
              <h1 className='title'>{poke?.name}</h1>
              <br />
              <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
              <button onClick={prevPoke}>Previous</button>  <button onClick={nextPoke}>Next</button>
          </div>
          <div>
            <h2 className='title mt-4 text-4xl'>Detail</h2>
            <ul className='title p-4 text-3xl'>
                  {poke?.types?.map((types, idxx) =>
                    <li key={idxx}>Type: {types?.type?.name}</li>
                  )}

                   {poke?.abilities?.map((abil, idx) => (
                    <li key={idx}>Ability: {abil.ability?.name}</li>
                  ))}

            </ul>
            <p className='title text-3xl'>Height: {poke?.height} m</p>
            <p className='title text-3xl'>weight: {poke?.weight} Kg</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonDetail
