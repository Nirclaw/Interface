import React from 'react'
import "./Recomendaciones.css"
export const Recomendaciones = () => {
    return (
        <div className='RecomendacionesCont'>


            <div className='ContenedorFOot'>

                <div className='mensajeFoot'>Andres, nos gusta tu contenido y queremos darte los suguientes tips:</div>
                <div className="mensajesTipsFoot">
                    <ol>
                        <li>Lee los comentarios de tus lectores</li>
                        <li>Elije el genero que quieres para tu publico</li>
                        <li>Busca siempre a un editor de confianza!</li>
                    </ol>
                </div>
                <div className='fotoslibros'>
                    <img className='FotolibrosFoot' src='/src/img/ikigai-cat-is-looking-for-the-information-in-book-and-notebooks.png' />
                </div>


            </div>
        </div>
    )
}
