import React from 'react'
import "./Cuerpo.css"
import { NaBSuperior } from '../NavbarSuperior/NaBSuperior'
import { CrearBorrador } from '../CrearBorrador/CrearBorrador'
import { Informacion } from '../Informacion/Informacion'
export const Cuerpo = () => {
    return (
        <>
            <div className='contCuerpo'>

                <NaBSuperior />
                <CrearBorrador />
                <Informacion />




            </div>

        </>
    )
}
