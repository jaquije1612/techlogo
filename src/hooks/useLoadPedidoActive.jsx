import { useState } from 'react'

function useLoadPedidoActive  (initialValue) {

    const [pedidolValue,setPedidoValueStore] = useState (()=>{
        try {
            const pedidos = window.localStorage.getItem("pedidos");

            return pedidos ? JSON.parse(pedidos.find)((pedido) => pedido.estado===1) : initialValue
        } catch (error) {
            return initialValue
        }
    } );

    const setPedidoValue = value => {
        try {

            const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []   ;
            if(value!==null){
                if(value.length!==0){

                    if(value.id===null){
                        value.id= pedidos.length!==0 ? pedidos.length+1:1
                    }
                    
                    if(pedidos.length !== 0){
                        const pedidosInactive = pedidos.filter((item) => item.estado===0)||[] ;
                        pedidosInactive.push(value)
                        window.localStorage.setItem("pedidos",JSON.stringify(pedidosInactive))
                    }else{
                        pedidos.push(value)
                        window.localStorage.setItem("pedidos",JSON.stringify(pedidos))
                    }

                    if(value.estado===0){
                        setPedidoValueStore(null)
                    }else{
                        setPedidoValueStore(value)
                    }
                    
                }
            }else{
                if(pedidos){
                    setPedidoValueStore(pedidos.find((item) => item.estado===1)||null );
                }
            }
            
            
        } catch (error) {
            console.error(error)
        }
    }

  return [pedidolValue,setPedidoValue]

}

export default useLoadPedidoActive