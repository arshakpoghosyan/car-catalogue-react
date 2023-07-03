import { useState } from "react"
import styles from "../home.module.css"
function CarItem ({ car }){
  const [show,setShow]=useState(false)
    return            <div key={car.id}className={styles.item}>
        <div 
        className={styles.image}
        style={{
          backgroundImage:`url(${car.image})`
        }}
        />
        <div className={styles.info}>
          <h2>{car.name}</h2>
          {
          show?<h2>{car.about}</h2>:null
          }
          <p>{new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
          }).format(car.price)}
          
              </p>
          <button className="btn" onClick={() => setShow(!show)}>{show ?"Show less": "Read more"}</button>
          </div>
      </div>
}

export default CarItem