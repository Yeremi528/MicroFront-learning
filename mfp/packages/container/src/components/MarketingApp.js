import { mount } from 'marketing/MarketingApp'
import React, {useRef, useEffect} from 'react'
//Esto funciona con todos los frameworks
export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    })

    return <div ref={ref}/>
}