import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import ProductoDetalle from './ProductoDetalle';

const ProductoPedidos = (props) => {

    const {pedidos,lProductos,cancelPedido} = props;

    const estadoTexto = (values)=>{
        switch (values) {
            case 1:
                return 'Pendiente'
                break;
            case 0:
                return 'Confirmado'
                break;
            case 2:
                return 'Cancelado'
                break;    
            default:
                break;
        }
    }

    const cancelPedidoLocal = (id) =>{
        cancelPedido(id)
    }

    return (
        <div>
            <div className="productoventa__div--producto bg-[#1F1D2B] p-4 rounded-xl mb-4 text-white">
            <h1 className="text-2xl my-4">Pedido N° {pedidos?.id} - {estadoTexto(pedidos.estado)}</h1>
            <div className="productoventa__div--tittles grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Cant</h5>
                <h5>Precio</h5>
            </div>
           
                {/* Descripcion del producto */}
                {
                    pedidos !== null && pedidos.productos && pedidos.productos.length > 0 ? (
                        pedidos.productos.map((producto) => {
                            let productoItem = lProductos.find(item => item.key === producto.id)
                            return (
                                <ProductoDetalle
                                    key={producto?.id}
                                    id={productoItem?.key}
                                    imge={productoItem?.imagen}
                                    namep={productoItem?.nameP}
                                    precio={productoItem?.precio}
                                    cantidad={producto?.cantidad}
                                />
                            )
                        }
                        )) : (<div>  </div>)
                }
            <div className="productoventa__div--buttons grid grid-cols-full justify-items-end">
                <div>
                    <button 
                        onClick={() => {
                            cancelPedidoLocal(pedidos.id)
                        }}
                        className="productoventa__button--delate border border-red-500 p-2 rounded-lg grid grid-cols-2 justify-items-center items-center ">
                        <MdOutlineCancel  className="text-red-300 flex-auto" />
                        <p className="text-red-300">Cancelar</p> 
                    </button>
                </div>
            </div>
            </div>
        </div>

    )
}

export default ProductoPedidos