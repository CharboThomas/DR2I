import '../styles/Bottom.css'
import IPSAlogo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Bottom() {

    return (
    
        <div className='BottomBox'> 
            
            <div className='BottomSousBox'> 
                <h1> Direction Recherche et Innovation de L'IPSA </h1>
            
                <img src={IPSAlogo} />
            </div>

            <div className='BottomSousBox'> 
                <h2> Autres Pages : </h2>

                <ul> 
                    <li> <Link to="/"> Accueil </Link>  </li>
                    <li> <Link to="/team"> Equipes </Link> </li>
                    <li> Actualités </li>
                    <li> Publications </li>
                    <li> Partenariats </li>
                    <li> Emplois </li>
        
                </ul>

            </div>        

            <div className='BottomSousBox'> 
                <h2> Contact : </h2>

                <ul> 
                    <li> Mail : DR2I@ipsa.fr</li>
                    <li> Facebook </li>
                    <li> Twitter </li>
                    <li> Telephone </li>
                </ul>

            </div>

            <div className='BottomSousBox'> 
                <h2> Plus d'informations : </h2>

                <ul> 
                    <li> GitHub</li>
                    <li> Hall </li>
                    <li> IPSA web site </li>
                    <li> IONIS web site </li>
                </ul>
                
            </div>

        </div>
    
    )
}

export default Bottom