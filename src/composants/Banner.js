import '../styles/Banner.css'
import {Link} from 'react-router-dom'

function Banner() {

    return (
    
        <div className='banner'>

            <div> 
                <h1 className='titre'> Direction Recherche et Innovation de L'IPSA </h1>
            </div>

            <div className='linkBox'>
                <div className='link'> <Link to="/"> Accueil </Link> </div>
                <div className='link'> <Link to="/team"> Equipes </Link> </div>
                <div className='link'> Actualités </div>
                <div className='link'> Publications </div>
                <div className='link'> Partenariats </div>
                <div className='link'> Emplois </div>
            </div>

        </div>

    )
}

export default Banner