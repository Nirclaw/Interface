import React from 'react'

export const Tarjeta = ({ name, status, image }) => {



    return (
        <>
            <div className='TablaAutores'>
                <div className='fotoAutor'><img className='fotoAPi' src={image} /></div>
                <div className='nombreautor'>{name}</div>
                <div className='cargoautor'>{status}</div>
                <div className='lectoresAutor'>lectores</div>
                <div className='CantidadLEctores'>143k</div>

            </div>
            <hr />
        </>
    )
}
