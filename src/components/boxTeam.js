import React from 'react';
import '../styles/Body.css'
import photo1 from '../assets/photoEquipe1.png'

function boxTeamFct(listeData){

    console.log(listeData.name);

    const name = listeData.name;
    const nbChercheur = listeData.nbChercheur;
    const nbEnseignant = listeData.nbEnseignant;
    const domaine = listeData.domaine;
    const projet = listeData.projet;
    const collaborateur = listeData.collaborateur;

    return(

        <div className='teamBox'> 

            <div className='photoBox'> 
                <center> <img src={photo1} /> </center>
            </div>

            <div>

                <h2> {name} : </h2>
                            
                <ul>
                            
                    <li> <b>{nbChercheur} enseignants-chercheurs, {nbEnseignant} doctorants</b> </li>
                    <li> <b>Domaines d'application : </b> {domaine}</li>
                    <li> <b> Exemples de sujet de recherche : </b><br></br> 
                        <ul>
                            { {projet}.map((dataProjet) => (
                                <li>{dataProjet}</li>
                            ))}
                        </ul>
                    </li>
                    <li> <b>Collaborations : </b> {collaborateur}</li>
                </ul>

            </div>

        </div>
    );

}

export default boxTeamFct;