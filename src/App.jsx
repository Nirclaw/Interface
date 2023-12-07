import React from 'react'
import { NavbarIzquierda } from './Navbar/NavbarIzquierda'
import { Cuerpo } from './Cuerpo/Cuerpo'
import { LoUltimo } from './Loultimo/LoUltimo'

export const App = () => {
    return (
        <>
            <div className='Home'>


                <div className='BarraLateral'>
                    <NavbarIzquierda />
                </div>

                <div className='cuerpo'>
                    <Cuerpo />
                </div>

              


            </div>
        </>
    )
}
