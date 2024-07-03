import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
function FavPoke() {
    const [fav, setFav] = useState(false);
    const toggleFav = () => {
        setFav((check) => !check)
    }
  return (
    <div>
      <button onClick={toggleFav}>
        {fav ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}

export default FavPoke
 