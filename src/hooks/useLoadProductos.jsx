import { useEffect, useState } from 'react'

function useLoadProductos () {
    
    const [productos,setProductos] = useState([]);

    useEffect(()=> {
        fetch("json/productos.json")
        .then(response=> response.json())
        .then(datos => {
            setProductos(datos)
        })
    },[]);

    return productos
}

export default useLoadProductos