import React from 'react'
import {useEffect, useState} from 'react'
import { traerProductos } from '../../../../arch/Productos/Productos'

const ItemDetailsContainer = () => {

    const [producto, setproducto] = useState({})

    useEffect (() => {
        traerProductos
        .then (resp => setproducto(resp.find(productos => productos=> productos.id === "1")))
    }, [])

    console.log(producto)

    return (
        <div>
            <ItemDetail producto = {producto}/>
        </div>
    )
}

export default ItemDetailsContainer
