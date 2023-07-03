import { useState } from "react"
import styles from "./CreateCarForm.module.css"

const clearData={
    price: "", 
    name: "", 
    image: "",
    about:""
}
const CreateCarForm = ({setCars}) =>{
    const [data, setData] = useState({
        price: "", name: "", image: ""
    })
    const createCar = (e) => {
        e.preventDefault()
        setCars(prev => [ {id: prev.length + 1, ...data}, ...prev])
        setData(clearData)
    }
        
    
    return (
      <div className={styles.creator}>
        <form className={styles.form} >
            <h2>Add your car</h2>
            <input placeholder="Name" onChange={e => setData(prev=>({...prev, name:e.target.value}))}
            value={data.name}/>
            <input placeholder="Price (USD)"onChange={e => setData(prev=>({...prev, price:e.target.value}))}
            value={data.price}/>
            <input placeholder="Image (URL)" onChange={e => setData(prev=>({...prev, image:e.target.value}))}
            value={data.image}/>
            <input placeholder="About" onChange={e => setData(prev=>({...prev, about:e.target.value}))}
            value={data.about}/>
            <button className="btn" onClick={e => createCar(e)}>Create</button>
        </form>
      </div>
    )
}

export default CreateCarForm