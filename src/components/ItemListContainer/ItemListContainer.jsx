import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
/* import { traerProductos } from '../Productos/Productos' */


const ItemListContainer = ({greeting}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState (true)

    const {idCategoria} = useParams ()

    useEffect(() => {

        if(idCategoria){
            
            const db = getFirestore()

            const queryCollection =  query (collection (db, 'productos'), where('categoria', '==', idCategoria))
            
            getDocs(queryCollection)
            .then(res => setProduct( res.docs.map((prod) => ({ id: prod.id, ...prod.data() })) ))
            .catch(err => err)
            .finally (() => setLoading(false))

        }else {
            const db = getFirestore()

        const queryCollection =  collection (db, 'productos')
        
        getDocs(queryCollection)
        .then(res => setProduct( res.docs.map((prod) => ({ id: prod.id, ...prod.data() })) ))
        .catch(err => err)
        .finally (() => setLoading(false))
        }

        

        /* if (idCategoria){
            traerProductos.then(res => setProduct(res.filter(product => product.categoria === idCategoria)))
            .finally(() => setLoading(false))
        }else{
            traerProductos.then(res => setProduct(res))
            .finally(() => setLoading(false))
        } */
    }, [idCategoria]);
    


    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <h2>Cargando...</h2> : <ItemList productos ={product}/> }
        </div>
    )
}

export default ItemListContainer
