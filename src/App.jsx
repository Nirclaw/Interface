import React from 'react'
import { NavbarIzquierda } from './Navbar/NavbarIzquierda'
import { Cuerpo } from './Cuerpo/Cuerpo'

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
