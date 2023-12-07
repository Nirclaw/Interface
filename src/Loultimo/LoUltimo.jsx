import React from 'react'
import "./Loultimo.css"
export const LoUltimo = () => {
  return (

    <>

      <div className='LoultimoContendor'>
        <div className='contenedorDeLoultimo'>
          <div className='cabeceraLoultimo'>
            <div className='LoUltimoTitulo'>Lo ultimo</div>
            <div className='vermasLoultimo'><div className='fondoTexto'>ver todo</div></div>
          </div>
          <div className='navLoUltimo'>
            <div className='RecienteLoUltimo'>Reciente</div>
            <div className='PolularLoUltimo'>Polular</div>
          </div>

          <div className='CardLoultimo'>

            <div className='cardContendor'>
              <div className='Foto'><img className="imgaenREciuente" src='/src/img/arboles.jpg' /></div>
              <div className='CardCuerpo'>
                <div className='titulocard'>La ciudadela</div>
                <div className='DetallesCard'>Descubre
                  las maravillas escondidas en los bosquesde estados
                  unidos</div>
              </div>

              <div className='PieCard'>
                <div className='CardFotopie'>
                  <img className='PersonaFOto' src='/src/img/fotoPerfil.jpg' />
                </div>
                <div className='fechaCard'>
                  <div >David Jones</div>
                  <div>May 6,2020</div>
                </div>
              </div>
            </div>
            <div className='cardContendor'>
              <div className='Foto'><img className="imgaenREciuente" src='/src/img/arboles.jpg' /></div>
              <div className='CardCuerpo'>
                <div className='titulocard'>La ciudadela</div>
                <div className='DetallesCard'>Descubre
                  las maravillas escondidas en los bosquesde estados
                  unidos</div>
              </div>

              <div className='PieCard'>
                <div className='CardFotopie'>
                  <img className='PersonaFOto' src='/src/img/fotoPerfil.jpg' />
                </div>
                <div className='fechaCard'>
                  <div >Lauren Murphy</div>
                  <div>May 3, 2020</div>
                </div>
              </div>
            </div>



          </div>


        </div>

      </div>
    </>
  )
}
