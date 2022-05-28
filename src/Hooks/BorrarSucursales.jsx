import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ComboBox from '../Components/ComboBox';

const BorrarSucursales = () => {
    const [lista, setLista] = useState([]);
    const uri = "https://localhost:44344/api/Sucursales/";

    function borrarSucursal(){
        let idP = document.getElementById("IdSucursalSelect2").value;
        let uri2 = uri + idP;
        var config = {
            method: 'delete',
            url: uri2
        };
        axios(config)
        .then(function (response) {
            alert("Sucursal borrada exitosamente!");
            window.location.href = window.location.href;
        })
        .catch(function (error) {
            alert("Sucursal no fue borrada");
        });
    }

    useEffect(()=>{
        const getData = async () =>{
        const response = axios.get(uri);
        return response;
        }

        getData().then((response)=>{
            setLista(response.data);
        });
    }, [])
    return(
        <>
            <select id='IdSucursalSelect2' class="btn btn-info">
                {
                    lista.map((Suc, index)=>(
                        <ComboBox
                            key={index}
                            Suc={Suc}
                        />
                    ))
                }
            </select>
            <button
                onClick={borrarSucursal} class="btn btn-dark"
            >
                Borrar
            </button>
        </>
    )
}
export default BorrarSucursales;
