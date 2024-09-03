import React, { useState } from 'react'
const ProductoResumen = (props) => {

    const {id, imgen, description, price, inventory,separar } = props;

    const [cantidad,setCantidad] = useState(0);

    const tempPedido = {
        id : null,
        cantidad:0,
        precio:0.0
    }

    const handleCantidad = (event) =>{
        if(event.target.value <= inventory){
            setCantidad(event.target.value)
        }else{
            setCantidad(inventory);
        }
    }

    const handleAdd = (id,precio) =>{
        tempPedido.id=id;
        tempPedido.cantidad=cantidad
        tempPedido.precio=precio
        separar(tempPedido);
        setCantidad(0)
    }

    return (
        <div className="productoResumen__div--principal bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src={imgen}
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
            />
            <p className="text-xl">{description}</p>
            <span className="text-gray-400">S./{price}</span>
            <p className="text-gray-600">{inventory} Unidades</p>
            <div className='grid grid-cols-2 mb-4 p-4 text-black'>
                <input className='' key={id} type='number' max={inventory} value={cantidad} onChange={handleCantidad}></input>
                <button disabled={inventory===0} className='text-gray-600' onClick={() => handleAdd(id,price)}>Añadir</button>
            </div>

        </div>
    )
}

export default ProductoResumen