import React, { useState, useContext, createContext } from 'react';



const CartContext = createContext ([])



export function useCartContext (){
    return useContext (CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    /* function globalCarrito(){
        const totalProductos= cartList.map (productoCart=>productoCart.cant).reduce ((prev, curr)=> prev+curr,0)
        return totalProductos
    } */

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

    return (
        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}


