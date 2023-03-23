
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://wizard-world-api.herokuapp.com/'
})
// import { useState, useEffect } from 'react'


// const Api = () => {
   
//   const [houses, setHouses] = useState([])

//   const getHouses = async () => {
//     try {
      
//       const response = await axios.get("https://wizard-world-api.herokuapp.com/Houses");

//       const data = response.data;
//       setHouses(data);

//     } catch (error) {
//       console.log(error)
      
//     }
//   }

//   useEffect(() => {
//     getHouses();
//   }, [])


//   return (
    
//     <div>
     
//       {houses.length === 0 ? <p>carregando...</p> : (
//         houses.map((house) => (
//           <div className='house' key={house.id}> 
            
//             <h2>{house.name}</h2>
//             <h3>{house.animal}</h3>
//           </div>
//         ))
//       )}
    
      
      
//     </div>
    
//   )
// }


export default api
