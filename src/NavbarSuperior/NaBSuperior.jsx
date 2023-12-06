import React from 'react'

export const NaBSuperior = () => {
    return (
        <div className='Contnavar'>
            <div className='navegador'> <div className='contnasearch'> <img className='lupa' width="20" height="20" src="https://img.icons8.com/ios-filled/50/858282/search--v1.png" alt="search--v1" /> <input className='buscador' placeholder='Buscar por libros, Personas o articulos ' /></div></div>

            <div className='contNotificaciones'>
                <div className='campana'><img className="fondocampana" width="30" height="30" src="https://img.icons8.com/sf-regular/96/E9A763/appointment-reminders.png" alt="appointment-reminders" /></div>
                <div className='mensaje'><img  className="fondoMensaje" width="30" height="30" src="https://img.icons8.com/sf-regular/96/7DA870/secured-letter.png" alt="secured-letter" /></div>
            </div>

            <div className='usuario'>
                <div className='nombre'>Nicolas Mauricio Caicedo rueda</div>
                <div className='FotoPerfil'><img className='fotoImgane' width="60" height="60" src='https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/321902244_5896171670447306_4658209510799076797_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEGJcqr26aMkHBsFaQ-9DC2kgguHL10qj2SCC4cvXSqPQJUs6q41wWxlSD-VvbCgfpiTxqJ15T1aF2uCQjE541_&_nc_ohc=L_p2yOPVp2IAX-s_15P&_nc_ht=scontent.fbga2-1.fna&oh=00_AfCd4Rgr_MW9qPK0h1Hn0jbtX2t84-8OThoshnvsbW3HQA&oe=65756EFA'/></div>
            </div>
        </div>
    )
}
