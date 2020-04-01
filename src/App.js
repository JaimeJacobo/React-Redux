import React from 'react';
import './App.css';
// 13. Importar useSelector y useDispatch de 'react-redux'
import {useSelector, useDispatch} from 'react-redux';



function App() {

  //14. Llamar al estado de Redux y guardarlo en este componente con el nombre de 'stateFromRedux'
  const stateFromRedux = useSelector((state) => state)

  //15. Crear una variable que llame al useDispatch()
  const dispatch = useDispatch()

  //16. Crear las acciones que quiero llevar a cabo en este componente
  const increment = ()=>{
    return {
      type: 'INCREMENT'
    }
  }
  
  const decrement = ()=>{
    return {
      type: 'DECREMENT'
    }
  }

  //17. Conectar los dispatch de las acciones con los botones
  return (
    <div className="App">
      <h1>Counter: {stateFromRedux.counter}</h1>
      <button onClick={()=>dispatch(increment())}>SUMAR 1</button>
      <button onClick={()=>dispatch(decrement())}>RESTAR 1</button>
    </div>
  );
}

export default App;
