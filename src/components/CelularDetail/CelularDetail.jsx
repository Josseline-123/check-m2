/* 8️⃣ ***COMPONENTE CelularDetail*** 8️⃣

Implementar el componente CelularDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del celular.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del celular cuando se monta el componente. Luego, traer esa 
información de tu estado global.
🟢 Tendrás que renderizar algunos datos del celular correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el "id" puedes utilizar useParams.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState' 
      - 'React.useEffect'
*/

import './celularDetail.css';
import * as actions from '../../redux/actions/index'
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CelularDetail = (props) => {
      let params = useParams();
      const dispatch = useDispatch();
      const celulares = useSelector((state) => state.celularDetail);
      React.useEffect(() => {
            dispatch(actions.getCelularesDetails(params.id))
      }, [])

   return (
      <div className='detail'>
            <h1>{celulares?.modelo}</h1>
            <img src={celulares?.imagen} alt={celulares?.modelo} />
            <h3>{`Precio: $${celulares?.precio} USD`}</h3>
            <h5>Marca: {celulares?.marca}</h5>
            <h5>Lanzamiento: {celulares?.lanzamiento}</h5>
            <h5>Sistema Operativo: {celulares?.sistemaOperativo}</h5>
            <h5>Descripción: {celulares?.descripción}</h5>
      </div>
   )
};


export default CelularDetail;
