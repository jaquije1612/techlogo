import React, { useState } from 'react'

const useLeadPedidosCompletos = (initialValue) => {
    const [pedidoslValue, setPedidosValueStore] = useState(() => {
        try {
            const pedidos = window.localStorage.getItem("pedidos");

            return pedidos ? JSON.parse(pedidos) : initialValue
        } catch (error) {
            return initialValue
        }
    });

    const setPedidoValue = value => {
        try {

            const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || [];
            if (value !== null) {
                const pedidosInactive = pedidos.filter((item) => item.id !== value.id) || [];
                console.log(pedidosInactive);
                pedidosInactive.push(value)
                console.log(pedidosInactive);
                window.localStorage.setItem("pedidos", JSON.stringify(pedidosInactive))

            } else {
                if (pedidos) {
                    setPedidosValueStore(pedidos);
                }
            }


        } catch (error) {
            console.error(error)
        }
    }

    return [pedidoslValue, setPedidoValue]

}

export default useLeadPedidosCompletos