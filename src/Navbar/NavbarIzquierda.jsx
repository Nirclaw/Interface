import React from 'react'

export const NavbarIzquierda = () => {
    return (
        <>

            <div className='ContentNav'>
                <div className='icono'>
                    <div className='coticon'>
                    <img width="80" height="80" src="https://img.icons8.com/sf-regular/100/ffffff/book.png" alt="book"/></div></div>
                <div className='menu'>
                    <div className='inicio'>Inicio</div>
                    <div className='libros'>Libros</div>
                    <div className='editores'>Editores</div>
                    <div className='lectores'>Lectores</div>
                </div>

                <div className='botonCrear'>
                    <button className='crear'>Crear +</button>
                </div>
            </div>
        </>
    )
}
