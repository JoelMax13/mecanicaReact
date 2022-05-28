import React from 'react';
import BorrarSucursales from '../Hooks/BorrarSucursales';
import CrearSucursales from '../Hooks/CrearSucursales';
import EditarSucursales from '../Hooks/EditarSucursales';
import VerSucursales from '../Hooks/VerSucursales';
import VerSucursalesPorId from '../Hooks/VerSucursalesPorId';

function Crud() {
  return (
    <>
      <div class="container">
        <br/><h1>Sucursales</h1><br/><br/>
        <VerSucursales/><br/><br/>
        <hr/>
        <div><h1>Buscar Sucursal</h1><br/></div>
        <VerSucursalesPorId/>
        <hr/>
        <div><h1>Crear Sucursal</h1><br/></div>
        <CrearSucursales/>
        <hr/>
        <div><h1>Editar Sucursal</h1><br/></div>
        <EditarSucursales/>
        <hr/>
        <div><h1>Borrar Sucursal</h1><br/></div>
        <BorrarSucursales/>
      </div>
    </>
  )
}
export default Crud;