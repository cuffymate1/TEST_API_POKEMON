import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'




function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=400');
  const [poc, setPoc] = useState([]);
  const [id, setId] = useState('https://pokeapi.co/api/v2/pokemon/${pokemon?.id}');
  


  const getAllPokemons = async() => {
    const res = await fetch(loadMore);
    const data = await res.json();
    

    setLoadMore(data.next);
    

    function createPokemonObject (results){
        results.forEach( async (pokemon)=> {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await res.json()

            setAllPokemons(currentlist => [...currentlist, data])
            
            
        })
    }
    createPokemonObject(data.results);
    await console.log(allPokemons)
   
  }

  useEffect (()=>{
    getAllPokemons();
  },[])
  
  const viewDe = () => {
    this.props.onClick(this.props.id)

  }

  return (
    <>
    <Navbar />
    
    <div className='wrapper'>
      
        <div className="wrapper1" >
          {allPokemons.map((pokemon, index) => 
            <div key={index} className='grid-item' poc={poc}>
              <small className='title'>#0{pokemon?.id}</small>
              <p className='title'>{pokemon?.name}</p>
              <div className='container'>
                <img src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon.name} />

                <Link to={"/PokemonDetail/" + pokemon?.id} id={id}>
                    <button value={id} onClick={viewDe.id} className='mt-5'>More Detail</button>
                </Link>
                
              </div>
              
              
            </div>
            
           
          )}
          
        </div>
        
        <button className='load-more'>Load More</button>
      </div>
   
     
    </>
  
  )
}

export default App



