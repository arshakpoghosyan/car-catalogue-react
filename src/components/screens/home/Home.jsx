import { useState } from "react"
import CarItem from "./car-item/CarItem.jsx"
import {cars as carsData} from "./cars.data"
import CreateCarForm from "./create-car-form/CreateCarForm.jsx"
function Home() {
    const[cars, setCars] = useState(carsData)
    return (
      <div className="background">
        <h1>Catalogue</h1>
        <hr></hr>
        <CreateCarForm setCars={setCars}/>
        <div>
          {cars.map(car =>(
              <CarItem key={car.id} car={car}/>
          ))}
          
        </div>
      </div>
    )
  }
  
  export default Home
  