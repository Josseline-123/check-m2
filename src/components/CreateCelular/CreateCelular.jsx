/* 6️⃣ *** COMPONENTE CreateCelular *** 6️⃣

Implementar el componente CreateCelular. Este consistirá en un formulario controlado con estados de React.
📢¡Sigue las instrucciones de los TEST!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React from 'react';
import * as actions from '../../redux/actions/index';
import { useDispatch } from 'react-redux';

const validaciones = (state, stateErrors) => {
      const errores = {...stateErrors};

      if(!/^([a-zA-Z0-9_-]){0,30}$/.test(state.marca)) errores.marca = 'Nombre de marca demasiado largo';
      else errores.marca = '';

      if(!/^([a-zA-Z0-9_-]){0,30}$/.test(state.modelo)) errores.modelo = 'Nombre de modelo demasiado largo';
      else errores.modelo = '';

      if(state.precio < 0) errores.precio = 'El precio del celular tiene que ser mayor a 0';
      else errores.precio = '';

      return errores
}

const CreateCelular = () => {

      const dispatch = useDispatch();

      const [input, setInput] = React.useState({
            marca: '',
            modelo: '',
            precio: 0,
            descripción: '',
            sistemaOperativo: '',
            imagen: '',
            lanzamiento: '',
      })

      const [errors, setErrors] = React.useState({
            marca: '',
            modelo: '',
            precio: '',
      })

      const handleChange = (event) => {
            const propiedad = event.target.name;
            const value = event.target.value;

            setInput({...input, [propiedad]:value});
            setErrors(validaciones({...input, [propiedad]:value}, errors));
      }

      const handleSubmit = (event) => {
            event.preventDefault(); 
            if(errors.marca !== '') return 
            else if(errors.modelo !== '') return 
            else if(errors.precio !== '') return 
            else dispatch(actions.createCelular(input))
      }

   return (
      <form onSubmit={handleSubmit}>
            <div>
                  <label htmlFor="marca">Marca: </label>
                  <input type="text" name="marca" value={input.marca} onChange={handleChange} />
                  {errors.marca !== '' && <p>{errors.marca}</p>}
            </div>
            <div>
                  <label htmlFor="modelo">Modelo: </label>
                  <input type="text" name="modelo" value={input.modelo} onChange={handleChange} />
                  {errors.modelo !== '' && <p>{errors.modelo}</p>}
            </div>
            <div>
                  <label htmlFor="precio">Precio: </label>
                  <input type="number" name="precio" value={input.precio} onChange={handleChange} />
                  {errors.precio !== '' && <p>{errors.precio}</p>}
            </div>
            <div>
                  <label htmlFor="descripción">Descripción: </label>
                  <textarea name="descripción" value={input.descripcion} onChange={handleChange}></textarea>
            </div>
            <div>
                  <label htmlFor="sistemaOperativo">Sistema Operativo: </label>
                  <input type="text" name="sistemaOperativo" value={input.sistemaOperativo} onChange={handleChange} />
            </div>
            <div>
                  <label htmlFor="imagen">Imagen: </label>
                  <input type="text" name="imagen" value={input.imagen} onChange={handleChange} />
            </div>
            <div>
                  <label htmlFor="lanzamiento">Lanzamiento: </label>
                  <input type="text" name="lanzamiento" value={input.lanzamiento} onChange={handleChange}/>
            </div>
            
            <button type="submit">Crear Celular</button>

      </form>
    )
};


export default CreateCelular;
