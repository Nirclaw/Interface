import React from 'react'
import "./Cuerpo.css"
import { NaBSuperior } from '../NavbarSuperior/NaBSuperior'
import { CrearBorrador } from '../CrearBorrador/CrearBorrador'
import { Informacion } from '../Informacion/Informacion'
import { LoUltimo } from '../Loultimo/LoUltimo'
import { Recomendaciones } from '../Recomendaciones/Recomendaciones'
export const Cuerpo = () => {
    return (
        <>
            <div className='contCuerpo'>
                <NaBSuperior />
                <CrearBorrador />
                <Informacion />
                <LoUltimo/>
                <Recomendaciones/>
            </div>

        </>
    )
}
