import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { traerProductos } from '../Productos/Productos'

const ItemDetailsContainer = () => {

    const [product, setProduct] = useState({})


    useEffect (() => {
        traerProductos.then (resp => setProduct(resp.find(product => product.id==="1") ))
    }, [])

    console.log(product)

    return (
        <div>
            <ItemDetail product= {product}/>
        </div>
    )
}


export default ItemDetailsContainer