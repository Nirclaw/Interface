import React from 'react'
import "./CrearBorrador.css"
export const CrearBorrador = () => {
    return (
        <div className='CrearBorrador'>

            <div className='CuadroFondo'>
                <div className='titluloCuadro'>Hola, Nicolas! Tienes ideas Sobre un nuevo libro?</div>
                <div className='preguntas'><div>Vuelve tus libros tendencias mundial</div>
                    <div>Quieres empezar a escribir una vez mas?</div></div>
                <div className='contBotonBorrador'><button className='CrearBorradorBoton'>Crear Borrador +</button></div>
                <div className='imagenBorrador'><img className='imglibros' src='/src/img/img.png' /></div>

            </div>

        </div>
    )
}
