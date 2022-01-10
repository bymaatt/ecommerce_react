import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { traerProductos } from '../Productos/Productos'


const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])


    useEffect(() => {
        traerProductos.then ((respuesta)=>{
            setData(respuesta);
        })
        .catch((error)=> {
            console.error(error);
        });
    }, []);
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos ={data}/>
        </div>
    )
}

export default ItemListContainer
