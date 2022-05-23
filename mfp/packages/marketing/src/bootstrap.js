import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
//Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(<App/>,el)
}

//Si nosotros estamos en desarrollo y isolation,
//llamar Mount de inmediato
if(process.env.NODE_ENV === 'development'){
    const devRoot  = document.querySelector('#_marketing-dev-root')

    if(devRoot){
        mount(devRoot)
    }
}

//Estamos corriendo atravez del contenedor
//Y nosotros deberiamos exportar la mount function

export {mount}