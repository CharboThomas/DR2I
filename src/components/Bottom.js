import '../styles/Bottom.css'
import IPSAlogo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Bottom() {

    return (
        <div>

            <div class="Logos">

                <a href="https://www.ipsa.fr"><img src="../assets/ipsaLogo.png"/></a>
                <a href=""><img src="../assets/Logo-cyb'air.png" /></a> 
                <a href="https://iboussaa.gitlabpages.inria.fr/partial-pole-placement-via-delay-action/P3d-Home.html"><img src="../assets/P3Delta.png"/></a>
                <a href="https://www.c2n.universite-paris-saclay.fr/fr/"><img src="../assets/C2N.png"/></a>
                <a href="https://www.centralesupelec.fr/"><img src="../assets/centraleSupelec.PNG"/></a>
                <a href="https://www.em2c.com/"><img src="../assets/EM2C.PNG"/></a>
                <a href="https://www.univ-evry.fr/accueil.html"><img src="../assets/evry_universite.PNG"/></a>
                <a href="http://www.fast.u-psud.fr/"><img src="../assets/FAST.PNG"/></a>
                <a href="https://www.geeps.centralesupelec.fr/"><img src="../assets/GEEPS.png"/></a>
                <a href="https://www.inria.fr/fr"><img src="../assets/inria.PNG"/></a>
                <a href="https://www.ipsl.fr/"><img src="../assets/IPSL.PNG"/></a> 
                <a href="https://samovar.telecom-sudparis.eu/"><img src="../assets/samovar.PNG"/></a> <!-- à vérifier -->
                <a href="https://l2s.centralesupelec.fr/"><img src="../assets/L2S.PNG"/></a>
                <a href="https://www.latmos.ipsl.fr/index.php/fr/"><img src="../assets/LATMOS.PNG"/></a>
                <a href="https://hal-centralesupelec.archives-ouvertes.fr/LGI"><img src="../assets/lGi.PNG"/></a> <!-- à vérifier -->
                <a href="https://www.limsi.fr/fr/"><img src="../assets/limsi.PNG"/></a>
                <a href="https://www.univ-evry.fr/recherche/unites-de-recherche/sciences-exactes/laboratoire-de-mecanique-denergetique-devry-lmee.html"><img src="../assets/LME_Evry.PNG"/></a>
                <a href="https://www.locean-ipsl.upmc.fr/index.php?lang=fr"><img src="../assets/LOCEAN.PNG"/></a>
                <a href="https://hal-centralesupelec.archives-ouvertes.fr/LPQM"><img src="../assets/LPQM.PNG"/></a> <!-- à vérifier -->
                <a href="https://www.lps.u-psud.fr/"><img src="../assets/LPS.PNG"/></a>
                <a href="https://www.telecom-paris.fr/fr/recherche/laboratoires/laboratoire-traitement-et-communication-de-linformation-ltci"><img src="../assets/LTCI.PNG"/></a>
                <a href="http://mssmat.centralesupelec.fr/"><img src="../assets/Mssmat.PNG"/></a>
                <a href="https://www.universite-paris-saclay.fr/"><img src="../assets/Saclay_universite.PNG"/></a>
                <a href="http://satie.ens-paris-saclay.fr/"><img src="../assets/SATIE.PNG"/></a>

            </div>
        
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

        </div>
    
    )
}

export default Bottom