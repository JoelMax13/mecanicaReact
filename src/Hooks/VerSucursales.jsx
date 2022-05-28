import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TablaSucursal from '../Components/TablaSucursal';

const VerSucursales = () => {
    const [lista, setLista] = useState([]);
    // const uri = "http://localhost:1001/api/Sucursales";
    const uri = "https://localhost:44344/api/Sucursales";
    
    useEffect(()=>{
        const getData = async () =>{
        const response = axios.get(uri);
        return response;
        }

        getData().then((response)=>{
            setLista(response.data);
        });
    }, [])

  return (
      <div class="container text-center">
            <table class="table">
                <thead>
                    <tr class="table-info">
                        <th>
                            ID SUCURSAL
                        </th>
                        <th>
                            RUC
                        </th>
                        <th>
                            DIRECCIÓN
                        </th>
                        <th>
                            NÚMERO
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((Suc, index)=>(
                            <TablaSucursal
                                key={index}
                                Suc={Suc}
                            />
                        ))
                    }
                </tbody>
            </table>
      </div>
  )
}
export default VerSucursales;