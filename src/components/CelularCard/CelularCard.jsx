/* 7️⃣ *** COMPONENTE CelularCard *** 7️⃣

Implementar el componente CelularCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un celular específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './celularCard.css';
import React from 'react';
import * as actions from '../../redux/actions/index';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CelularCard = (props) => {
   const dispatch = useDispatch();
   const cerrar = () => {
      dispatch(actions.deleteCelular(props.id))
   }
   return (
      <div className='card'>
         <button onClick={cerrar}>x</button>
         <Link to={`/celulares/${props.id}`}>
            <h3>{props.modelo}</h3>
         </Link>
         <img src={props.imagen} alt={props.modelo} />
         <p>Marca: {props.marca}</p>
         <h4>${`${props.precio} USD`}</h4>
      </div>
   )
};


export default CelularCard;
