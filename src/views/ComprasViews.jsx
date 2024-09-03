import React, { useEffect, useState } from 'react'
import useLeadPedidosCompletos from '../hooks/useLeadPedidosCompletos'
import useLoadProductos from '../hooks/useLoadProductos';

import ProductoPedidos from '../component/Productos/ProductoPedidos';

export const ComprasViews = () => {

    const [pedidos,setPedidos] = useLeadPedidosCompletos(null);

    const [updatePage,setUpdatePage] = useState(false);

    useEffect(() => {
        setPedidos(null);
    }, [])

    useEffect(() => {
    },[updatePage])

    const lProductos = useLoadProductos();

    const cancelPedido = (id) => {
        if(id!==null){
            const pedido = pedidos.find((item ) => item.id===id);
            
            if(pedido){
                pedido.estado=2
                console.log(pedido);
                setPedidos(pedido)
                setUpdatePage(updatePage);
                window.location.reload();
            }
        }
    }

    return (
        <main className={`App__main lg:pl-32  pb-20 `}>
            <div>
                <div className="comprasViewa__div--Tittle flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl text-gray-300">TechLogo</h1>
                        <p className="text-gray-500">25 Agosto 2024</p>
                    </div>
                </div>
                <div className="comprasViewa__div--compras flex items-center justify-between mb-16">
                    <h2 className="comprasViewa__h2--productos text-xl text-gray-300">Compras</h2>
                </div>
                
                
                    {
                        pedidos !==null && pedidos.length > 0 ? (
                        
                        pedidos.map((item) =>{
                            return <ProductoPedidos key={item.id} pedidos={item} lProductos={lProductos} cancelPedido={cancelPedido} />
                        })
                    ): (<div> </div>)
                        
                    }               
               
            </div>
        </main>
    )
}
