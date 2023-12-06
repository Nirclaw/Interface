import React from 'react'
import "./Informacion.css"
export const Informacion = () => {
    return (
        <>
            <div className='InformacionCont'>
                <div className='contenedorInfo'>
                    <div className='cuadrosLikes'>
                        <div className='cuadoInfo'><div className='tituloInfoCuadro'>Libreria</div><div className='NumeroInfoCuadro'>150</div></div>
                        <div className='cuadoInfo'><div className='tituloInfoCuadro'>Me gusta</div><div className='NumeroInfoCuadro'>155k</div></div>
                        <div className='cuadoInfo'><div className='tituloInfoCuadro'>Lectores</div><div className='NumeroInfoCuadro'>8k</div></div>
                        <div className='cuadoInfo'><div className='tituloInfoCuadro'>Opiniones</div><div className='NumeroInfoCuadro'>163k</div></div>
                    </div>

                    <div className='Autores'>

                        <div className='contenedorautores'>
                            <div className='TituloAutores'>
                                <div className='tituloCuadroAutor'>Autores</div>
                                <div className='TituloVertodoAutor'><div className='fondoTexto'>ver todo</div></div>
                            </div>

                            <div className='ListaAutores'>
                                <div className='TablaAutores'>
                                    <div className='fotoAutor'>foto</div>
                                    <div className='nombreautor'>Nicolas</div>
                                    <div className='cargoautor'>Disenoador</div>
                                    <div className='lectoresAutor'>lectores</div>
                                    <div className='CantidadLEctores'>143k</div>

                                </div>
                                <hr />
                                <div className='TablaAutores'>
                                    <div className='fotoAutor'>foto</div>
                                    <div className='nombreautor'>Nicolas</div>
                                    <div className='cargoautor'>Disenoador</div>
                                    <div className='lectoresAutor'>lectores</div>
                                    <div className='CantidadLEctores'>143k</div>

                                </div>
                                <hr />

                                <div className='TablaAutores'>
                                    <div className='fotoAutor'>foto</div>
                                    <div className='nombreautor'>Nicolas</div>
                                    <div className='cargoautor'>Disenoador</div>
                                    <div className='lectoresAutor'>lectores</div>
                                    <div className='CantidadLEctores'>143k</div>

                                </div>


                            </div>

                        </div>
                    </div>
                    <div className='Recientes'>

                        <div className='TituloReciente'>
                            <div>Reciente</div>
                            <div>ver todo</div>
                        </div>

                        <div className='ListaReciente'>
                            <div className='nombreycargo'>
                                <div className='comentario'>
                                    <div className='nombreusuario'>Nicolas</div>
                                    <div className='comentariousuario'>me ha gustado</div>
                                </div>
                                <div className='fecha'>may 7</div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>

    )
}
