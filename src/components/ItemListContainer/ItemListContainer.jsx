import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { traerProductos } from '../Productos/Productos'


const ItemListContainer = ({greeting}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState (true)

    const {idCategoria} = useParams ()

    useEffect(() => {
        if (idCategoria){
            traerProductos.then(res => setProduct(res.filter(product => product.categoria === idCategoria)))
            .finally(() => setLoading(false))
        }else{
            traerProductos.then(res => setProduct(res))
            .finally(() => setLoading(false))
        }
    }, [idCategoria]);
    


    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <h2>Cargando...</h2> : <ItemList productos ={product}/>}
        </div>
    )
}

export default ItemListContainer
