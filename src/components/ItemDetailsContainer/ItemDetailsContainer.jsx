import React from 'react'
import {useEffect, useState} from 'react'
import { traerProductos } from '../Productos/Productos'
import ItemDetail from '../ItemDetailsContainer/ItemDetail/ItemDetail'

const ItemDetailsContainer = () => {

    const [producto, setproducto] = useState({})

    useEffect (() => {
        traerProductos
        .then (resp => setproducto(resp.find(productos => productos=> productos.id === "1")))
    }, [])

    console.log(producto)

    return (
        <div>
            
        </div>
    )
}

export default ItemDetailsContainer
