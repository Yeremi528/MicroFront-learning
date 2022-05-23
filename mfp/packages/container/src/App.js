import React from 'react'
//Funcion que tiene una referencia HTML
//import {  mount  } from 'marketing/MarketingApp'
//Queremos hacerlo generico por lo que no podemos hacer ponerlo como componente 
//Debido a que el componente Contenedor no debe saber que Framework se esta usando por sus hijos
import MarketingApp from './components/MarketingApp'

const App = () => {
  return (
    <div>
      <MarketingApp/>
    </div>
  )
}

export default App