import React, { useEffect, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import ProductoCarrito from '../Productos/ProductoCarrito';
import useLoadProductos from '../../hooks/useLoadProductos';

const ProductoVenta = (props) => {

    const { viewCarrito,updateFormulari,pedidoP,clearItemPedido,confirmPedido} = props;

    const lProductos = useLoadProductos();

    const productoventa__button_active = "productoventa__button--active bg-[#ec7c6a] text-white py-2 px-4 rounded-xl";

    const productoventa__button_disable = "productoventa__button--disable text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500";

    const [activo, setEnvioAgencia] = useState(false);

    useEffect(()=>{

    },[updateFormulari])

    useEffect(() => {
    }, [viewCarrito])

    const clearItem = (id) => {

        clearItemPedido(id)
    }

    const confirmPedidoLocal= () =>{
        confirmPedido();
    }

    const calculateSubTotal = (productos) =>{
       let total = 0.0;
       productos.map((item) => {
        total = total+ (parseFloat(item.cantidad)*parseFloat(item.precio) )
       })
       return Math.round(total,2)
    };

    return (
        <div
            className={`Carrito__div lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${!viewCarrito ? "left-full" : ""} `}

        >
            {/* Ordenes */}
            <div className="Carrito__div--relativo relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
                <RiCloseLine
                    className="Carrito__button--close lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
                />
                <h1 className="text-2xl my-4">Pedido N° {pedidoP !==null ? pedidoP.id: '' }</h1>
                {/*  Tipo de Envio -- Terminar despues */}
                <div className="Carrito__button--inviar flex items-center gap-4 flex-wrap mb-8">
                    <button onClick={() => setEnvioAgencia(!activo)}
                        className={`${activo ? productoventa__button_active : productoventa__button_disable} `}>
                        Envio
                    </button>
                </div>
                {/* Carrito de productos */}
                <div>
                    <div className="Carrito__div--Carrito grid grid-cols-6 mb-4 p-4">
                        <h5 className="col-span-4">Item</h5>
                        <h5>Cant</h5>
                        <h5>Precio</h5>
                    </div>
                    {/* Productos */}
                    <div className="Carrito__div-productos h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
                        {                       
                            pedidoP !==null && pedidoP.productos  && pedidoP.productos.length > 0 ? (
                                pedidoP.productos.map((producto) => {
                                let productoItem = lProductos.find(item => item.key === producto.id)
                                return (
                                    <ProductoCarrito 
                                        key={producto.id}
                                        id={productoItem?.key}
                                        img={productoItem?.imagen}
                                        description={productoItem?.nameP}
                                        price={productoItem?.precio}
                                        cantidad={producto?.cantidad}
                                        clearItem={clearItem}
                                        />
                                )
                            }
                            )): (<div> Sin Productos Pedidos </div>)                 
                        }

                    </div> 
                </div>
                {/* Confirmacion de pedido */}
                <div className="Carrito__div--ConfirmarPedido bg-[#262837] absolute w-full bottom-0 left-0 p-4">
                    <div className="Carrito__div--SubTotal flex items-center justify-between mb-6">
                        <span className="text-gray-400">Subtotal</span>
                        <span>{calculateSubTotal(pedidoP !==null && pedidoP.productos ? pedidoP.productos : [])}</span>
                    </div>
                    <div>
                        <button 
                            onClick={() => confirmPedidoLocal()}
                            className="Carrito__button--CanfirmarPedido bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                            Confirmar Pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductoVenta