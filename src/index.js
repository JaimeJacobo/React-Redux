import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//1. Instalar redux y react-redux en la terminal con npm
//2. Importar createStroe de 'redux'
import { createStore } from 'redux'
//11. Importar Provider de 'react-redux'
import {Provider} from 'react-redux'

//3. Crear mi "estado" local
const myState = {
  counter: 0
}

//4. Crear el reducer (embudo)
//REDUCER
const counterReducer = (state = myState, action)=>{
  //9. Crear la logica para que el reducer haga una cosa y otra dependiendo de la accion que esta recibiendo
  if(action.type === 'INCREMENT'){
    return {
      ...store,
      counter: state.counter + 1
    }
  } else if(action.type === 'DECREMENT'){
    return {
      ...store,
      counter: state.counter -1
    }
  }
  return state;
}

//5. Crear nuestro store/almacen
//STORE

//10. Añadir la extension de Redux DevTools
let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//6. Crear las acciones de increment y decrement
//ACTIONS

// const increment = ()=>{
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = ()=>{
//   return {
//     type: 'DECREMENT'
//   }
// }

//8. Crear las subscribtions
//SUBSCRIPTIONS

store.subscribe(()=>console.log(store.getState().counter))


//7. Activar las acciones con dispatch
//ACTIONS DISPATCH
// store.dispatch(increment())
// store.dispatch(decrement())



//12. Envolver App con el Provider y pasarle el store como argumento
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
