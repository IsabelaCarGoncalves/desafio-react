import axios from 'axios'
import { useState, useEffect } from 'react'
import housesHome from '../../images/houses.jpg'




const Home = () => {
   
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    try {
      
      const response = await axios.get("https://wizard-world-api.herokuapp.com/Houses");

      const data = response.data;
      setHouses(data);

    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {
    getHouses();
  }, [])


  return (
    
    <div>
      <img src={housesHome} width='100%'/>
      <h1>Houses</h1>
      {houses.length === 0 ? <p>carregando...</p> : (
        houses.map((house) => (
          <div className='house' key={house.id}> 
            
            <h2>{house.name}</h2>
            <h3>{house.animal}</h3>
          </div>
        ))
      )}
    
      
      
    </div>
    
  )
}

export default Home