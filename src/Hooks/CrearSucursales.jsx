import React from 'react';
import axios from 'axios';

const CrearSucursales = () => {
    const uri = "https://localhost:44344/api/Sucursales";
    
    function crearSucursal(){
        let ruc = document.getElementById("idRuc").value;
        let dir = document.getElementById("idDir").value;
        let telf = document.getElementById("idTelf").value;
        var data = JSON.stringify({
            "rucSuc": ruc,
            "direccionSuc": dir,
            "telfSuc": telf
        });
        
        var config = {
            method: 'post',
            url: uri,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
        axios(config)
        .then(function (response) {
            alert("Sucursal creada correctamente!");
            window.location.href = window.location.href;
        })
        .catch(function (error) {
            alert("Sucursal no fue creada correctamente!");
        });
    }
  return (
    <>
        {/* <form> */}
            <p>RUC: <br/><input id='idRuc' type={"text"}></input></p>
            <p>Dirección: <br/><input id='idDir' type={"text"}></input></p>
            <p>Telefono: <br/><input id='idTelf' type={"text"}></input></p>
            <button
                onClick={crearSucursal} class="btn btn-dark">
                    Crear
            </button>
        {/* </form> */}
    </>
  )
}
export default CrearSucursales;