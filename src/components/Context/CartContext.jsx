import React, { useState, useContext, createContext } from 'react';



const CartContext = createContext ([])



export function useCartContext (){
    return useContext (CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items){
        const index = cartList.findIndex(i => i.id=== items.id)

        if(index > -1) {
            const cantOld=cartList[index].counter 

            let cantNueva = cantOld + items.counter

            cartList[index].counter=cantNueva

            let arrAux = [...cartList]
            setCartList(arrAux)
        } else {
            setCartList([...cartList, items])
        }
    }

    function vaciarCarrito (){
        setCartList([])
    }

    console.log(cartList)

    const deleteItem = (id) => {
            const eliminarItem = cartList.filter((producto)=> producto.id !== id)
            setCartList(eliminarItem)
    }

    const total = () =>{
        const totalCart = cartList.reduce ((prev, curr) => prev + curr.precio * curr.counter,
        0
        )
        return totalCart
    }

    const cantTotal = () => {
        let cuentaCant = 0
        cartList.forEach ((producto)=>{
            cuentaCant += producto.counter 
        })
        return cuentaCant
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            deleteItem,
            vaciarCarrito,
            total,
            cantTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}


