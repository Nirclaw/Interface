import React, { useEffect, useState } from 'react'
import "./Informacion.css"
import { Tarjeta } from './components/tarjeta'
export const Informacion = () => {


    const [datos, setDatos] = useState({
        datos: []
    })
    const [informacion, setinformacion] = useState([])
    const [cargar, setCargar] = useState(false)

    useEffect(() => {
        const Peticion = async () => {
            fetch('https://rickandmortyapi.com/api/character/[1,2,3]')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return response.json();
                })
                .then(data => {
                    setDatos(data)
                    const informa = data.map((info) => (
                        <Tarjeta key={data.id} {...info} />
                    ))
                    setinformacion(informa)

                })

        };

        Peticion()



    }, [])

    useEffect(() => {

        setCargar(true)
    }, [informacion])




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
                                {cargar == true ? informacion : <>cargando...</>}
                            </div>

                        </div>
                    </div>
                    <div className='Recientes'>

                        <div className='TituloReciente'>
                            <div className='Recientetitulo'>Reciente</div>
                            <div className='RecienteVertodo'><div className='vertodotexto'>ver todo</div></div>
                        </div>

                        <div className='ListaReciente'>
                            <div className='nombreycargo'>
                                <div className='comentario'>
                                    <div className='nombreusuario'>Nicolas</div>
                                    <div className='comentariousuario'>Le ha gustado este libro</div>
                                </div>
                                <div className='fecha'>may 7</div>

                            </div>
                            <hr />
                            <div className='nombreycargo'>
                                <div className='comentario'>
                                    <div className='nombreusuario'>Nicolas</div>
                                    <div className='comentariousuario'>Le ha gustado este libro</div>
                                </div>
                                <div className='fecha'>may 7</div>

                            </div>
                            <hr />
                            <div className='nombreycargo'>
                                <div className='comentario'>
                                    <div className='nombreusuario'>Nicolas</div>
                                    <div className='comentariousuario'>Le ha gustado este libro</div>
                                </div>
                                <div className='fecha'>may 7</div>

                            </div>
                            <hr />
                            <div className='nombreycargo'>
                                <div className='comentario'>
                                    <div className='nombreusuario'>Nicolas</div>
                                    <div className='comentariousuario'>Le ha gustado este libro</div>
                                </div>
                                <div className='fecha'>may 7</div>

                            </div>
                            <hr />
                            <div className='nombreycargo'>
                                <div className='comentario'>
                                    <div className='nombreusuario'>Nicolas</div>
                                    <div className='comentariousuario'>Le ha gustado este libro</div>
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
