import React from 'react'

const ProductoDetalle = (props) => {

    const {id,imge,cantidad,namep,precio} = props

    return (
        
        <div className="grid grid-cols-6 mb-4">
            {/* Descripcion del producto */}
            <div className="productoventa__div--descripcion col-span-4 flex items-center gap-3">
                <img src={imge} className="w-12 h-12 object-cover" />
                <div>
                    <h5 className="text-sm">{namep}</h5>
                    <p className="text-xs text-gray-500">{precio}</p>
                </div>
            </div>
            {/* Cantidad */}
            <div>
                <span>{cantidad}</span>
            </div>
            {/* Price */}
            <div>
                <span>{Math.round( parseFloat(precio)*parseFloat(cantidad)) }</span>
            </div>
        </div>
    )
}

export default ProductoDetalle