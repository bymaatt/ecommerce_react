import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { traerProductos } from '../Productos/Productos'
import { useParams } from 'react-router-dom'

const ItemDetailsContainer = () => {

    const [product, setProduct] = useState({})

    const {idDetalle} = useParams ()

    useEffect (() => {
            traerProductos.then (resp => setProduct(resp.find(product => product.id===idDetalle) ))
        
    }, [idDetalle])

    console.log(product)
    console.log(idDetalle)

    return (
        <div>
            <ItemDetail product= {product}/>
        </div>
    )
}


export default ItemDetailsContainer