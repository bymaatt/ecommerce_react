import React, { useState } from 'react';
import './Cart.css'
/* import purchaseForm from '../purchaseForm/purchaseForm'; */
import { useCartContext } from '../Context/CartContext'
import { getFirestore,  addDoc, collection, documentId, getDocs, writeBatch, where, query} from 'firebase/firestore';


const CartItem = () => {

    const {cartList, deleteItem, vaciarCarrito, total, cantTotal} =useCartContext()

    const [dataForm, setDataForm] = useState ({
        name:'',
        apellido:'',
        email:'',
        tel: '',
    }) 

    const realizarCompra = async (e) => {
        e.preventDefault()


        const orden= {}

        orden.buyer = dataForm
        orden.total = total ();

        orden.items = cartList.map(CartItem => {
            const id = CartItem.id;
            const nombre = CartItem.title;
            const precio = CartItem.precio * CartItem.cantTotal;
            const cantidad = CartItem.cantTotal;

            return {id, nombre, precio, cantidad}
        })

        const db = getFirestore ()
        const ordenCollection = collection (db, 'ordenes')
        await addDoc(ordenCollection, orden)
        .then (resp => console.log (resp.id))
        .catch (err => console.log(err))
        .finally(() => console.log('cargando'))

        const queryCollection = collection (db, 'items')

        const queryActualizarStock = query (
            queryCollection, where (documentId(), 'in', cartList.map (it => it.id))
        )

        const batch = writeBatch (db)

        await getDocs(queryActualizarStock)
        .then (resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantTotal
            })
        ))
        .catch(err => console.log(err))
        .finally (() => console.log ('stock actualizado'))

        batch.commit()

    }

    function handleChange(e){

        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value

        })
    }
    console.log(dataForm)

  return (
    <div className='contenedor_master'>
        <div className='contenedor_detalle'>
            {cartList.map(productos =><ul className=" item card-title"><li key={productos.id}>{productos.nombre} - cant: {productos.counter} <li className='boton'><button className='btns1' onClick={() => deleteItem(productos.id)}>x</button></li></li></ul>)}
        </div>
        <div className='totales'>
            <div className='precio_total'>
                <h3>Total: $ {total()}</h3>
            </div>
            <div className='unidades_totales'>
                <p>Unidades totales: {cantTotal()}</p>
            </div>
        </div>
        <div className='butt_master'>
            <button className='btn-dark butt' onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
        <div>
            <form action="" onSubmit={realizarCompra} //onChange={handleChange}
            >
                <input type="text" name='name' placeholder='*Nombre' onChange={handleChange} value={dataForm.name} required
                />
                <br/>
                <input type="text" name='apellido' placeholder='*Apellido' onChange={handleChange} value={dataForm.apellido} required
                />
                <br/>
                <input type="text" name='tel' placeholder='*Teléfono' onChange={handleChange} value={dataForm.tel} required
                />
                <br/>
                <input type="email" name='email' placeholder='*email' onChange={handleChange} value={dataForm.email} required
                />
                <br />
                
                <div className='butt_master'>
                    <button className='btns btn-danger'>Confirmar compra</button>
                </div>

            </form>
            
        </div>
        
    </div>
  )
}

export default CartItem;
