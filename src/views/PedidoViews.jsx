import React, { useEffect, useState } from 'react'
import useLoadPedidoActive from '../hooks/useLoadPedidoActive';
import useLoadProductos from '../hooks/useLoadProductos';
import ProductoVenta from '../component/Carrito/Carrito';
import Cabecera from '../component/Header/Cabecera';
import ProductoResumen from '../component/Productos/ProductoResumen';

export const PedidoViews = (props) => {

    const {viewCart} = props;

    const [updateFormulari, setUpdateFormulari] = useState(false);

    const [filters, setFilter] = useState({
        categoriafilter: 0,
        textFilter: ''
    });

    const handleFilters = (filter) => {
        setFilter(filter);
    };

    const tempPedido = {
        id: null,
        productos: [],
        estado: 1,
        total: 0.0
    }

    const [pedido, setPedido] = useLoadPedidoActive(null);

    const lProductos = useLoadProductos();

    useEffect(() => {

        setPedido(pedido);
        console.log("Valro inicial", pedido)
    }, [])

    const handlePedidoFinal = (productoAdd) => {
        console.log(pedido);
        if (pedido === null) {
            tempPedido.productos = [...tempPedido.productos, productoAdd]
            setPedido(tempPedido)
        } else {
            if (pedido.productos.find((item) => item.id === productoAdd.id)) {
                const productos = pedido.productos.map((item) =>
                    item.id === productoAdd.id ? { ...item, cantidad: parseInt(item.cantidad) + parseInt(productoAdd.cantidad) } : item
                )
                pedido.productos = [...productos]
                setPedido(pedido)
            } else {
                pedido.productos.push(productoAdd)
                setPedido(pedido)
            }
            setUpdateFormulari(!updateFormulari)
        }
    };

    const clearItem = (id) => {
        const propductNotClear = pedido.productos.filter((item) => item.id !== id)
        pedido.productos = propductNotClear;
        console.log(pedido);
        setPedido(pedido)
        setUpdateFormulari(!updateFormulari)
    }

    const confirmPedido = () => {
        pedido.estado = 0
        setPedido(pedido);
        setUpdateFormulari(!updateFormulari)
    }
    return (
        <><div>
            <ProductoVenta key={1} viewCarrito={viewCart}
                updateFormulari={updateFormulari}
                pedidoP={pedido}
                clearItemPedido={clearItem}
                confirmPedido={confirmPedido} />
            <main className={`pedidoView__main lg:pl-32  pb-20 ${viewCart ? "lg:pr-96" : "lg:pr-full"}`}>
                <div>
                    <Cabecera props={handleFilters} />
                    <div className="pedidoView__div--contenido flex items-center justify-between mb-16">
                        <h2 className="App__h2--productos text-xl text-gray-300">Productos</h2>
                    </div>
                    {/* contenido principal del formulario */}
                    <div className="pedidoView__div--productos p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {
                            lProductos.filter((item) => {
                                return filters.textFilter === '' || item.nameP.toLowerCase().includes(filters.textFilter.toLowerCase()) ||
                                    item.fabricante.toLowerCase().includes(filters.textFilter.toLowerCase()) ||
                                    item.resumen.toLowerCase().includes(filters.textFilter.toLowerCase())
                            }
                            ).map((item) => {
                                if (filters.categoriafilter === 0 || item.tipos === filters.categoriafilter) {
                                    return (<ProductoResumen key={item.key}
                                        id={item.key}
                                        imgen={item.imagen}
                                        description={item.nameP}
                                        price={item.precio}
                                        inventory={item.stock}
                                        separar={handlePedidoFinal}
                                    />)
                                }
                            })
                        }

                    </div>
                </div>
            </main>
        </div >
        </>
    )
}
