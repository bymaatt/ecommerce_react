import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { traerProductos } from '../Productos/Productos'
import { useParams } from 'react-router-dom'

const ItemDetailsContainer = () => {

    const [product, setProduct] = useState({})

    const {idCategoria} = useParams ()
    useEffect (() => {
        traerProductos.then (resp => setProduct(resp.find(product => product.id==="1") ))
    }, [])

    console.log(product)
    console.log(idCategoria)

    return (
        <div>
            <ItemDetail product= {product}/>
        </div>
    )
}


export default ItemDetailsContainer