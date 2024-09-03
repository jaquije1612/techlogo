import { useEffect, useState } from 'react'


function useLoadTiposProductos () {

    const [tiposProductos,setTiposProductos] = useState([]);

    useEffect(()=> {
        fetch("json/tiposProductos.json")
        .then(response=> response.json())
        .then(datos => {
            console.log(datos)
            setTiposProductos(datos)
        })
    },[]);

    return tiposProductos
}

export default useLoadTiposProductos