import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComboBoxDireccion from '../Components/ComboBoxDireccion';

const VerSucursalesPorId = () => {
    const [list, setList] = useState([]);
    const [lista, setLista] = useState([]);
    
    function buscarId(id){
        let idP;
        for(let i=0 ; i<= list.length; i++) {
            let a = list[i];
            if(a.direccionSuc === id){
                return idP = a.sucId;
            }
        }
    }

    function verSucursal(){
        let id = document.getElementById("IdSucursal").value;
        let idP = buscarId(id);
        const uri2 = "https://localhost:44344/api/Sucursales/"+idP;
        console.log(uri2);
        const getData = async () =>{
        const response = axios.get(uri2);
        return response;
        }

        getData().then((response)=>{
            setLista(response.data);
        });
    }

    const uri = "https://localhost:44344/api/Sucursales";
    useEffect(()=>{
        const getData = async () =>{
        const response = axios.get(uri);
        return response;
        }

        getData().then((response)=>{
            setList(response.data);
        });
    }, [])

  return (
    <>
        <div class="container-fluid">
            Escoja la Sucursal a buscar:<br/>
            <select id='IdSucursal' class="btn btn-info combo">
                {
                    list.map((Suc, index)=>(
                        <ComboBoxDireccion
                            key={index}
                            Suc={Suc}
                        />
                    ))
                }
            </select>
            &nbsp; &nbsp;
            <button
                onClick={verSucursal} class="btn btn-dark">
                    Buscar
            </button><br/><br/>
            <div>
                <label>ID: {lista.sucId}</label><br/>
                <label>RUC: {lista.rucSuc}</label><br/>
                <label>DIRECCION: {lista.direccionSuc}</label><br/>
                <label>TELEFONO: {lista.telfSuc}</label>
            </div>
        </div>
    </>
  )
}
export default VerSucursalesPorId;