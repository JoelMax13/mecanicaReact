import React from 'react'

const TablaSucursal = ({Suc}) => {
  return (
      <>
      <tr>
      <td>
          {Suc.sucId}
        </td>
        <td>
          {Suc.rucSuc}
        </td>
        <td>
          {Suc.direccionSuc}
        </td>
        <td>
          {Suc.telfSuc}
        </td>
      </tr>
      </>
  )
}
export default TablaSucursal;