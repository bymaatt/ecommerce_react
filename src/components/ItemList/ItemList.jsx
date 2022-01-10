import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}) {
    return (
        <div>
            {productos.map((productos)=>(
                <Item key ={productos.nombre} productos ={productos} />
            ))};
        </div>
    )
}

export default ItemList
