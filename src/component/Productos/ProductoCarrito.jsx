import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';

const ProductoCarrito = (props) => {
    const { id,img, description, price, cantidad,clearItem } = props;

    const clearLocalProduct =(value)=>{
        clearItem(value)
    }

    return (
        <div className="productoventa__div--producto bg-[#262837] p-4 rounded-xl mb-4">
            <div className="productoventa__div--productodesc grid grid-cols-6 mb-4">
                {/* Descripcion del producto */}
                <div className="productoventa__div--descripcion col-span-4 flex items-center gap-3">
                    <img src={img} className="w-10 h-10 object-cover" />
                    <div>
                        <h5 className="text-sm">{description}</h5>
                        <p className="text-xs text-gray-500">{price}</p>
                    </div>
                </div>
                {/* Cantidad */}
                <div>
                    <span>{cantidad}</span>
                </div>
                {/* Precio redondeado */}
                <div>
                    <span>{Math.round(parseFloat(price) * parseFloat(cantidad))}</span>
                </div>
            </div>
            <div className="productoventa__div--BorrarProducto  grid grid-cols-6 items-center">
                <div>
                    <button 
                    onClick={()=>{
                        clearLocalProduct(id)
                    }}
                    className="productoventa__button--delate border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductoCarrito