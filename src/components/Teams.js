import React from 'react';
import '../styles/Body.css'
import boxTeamFct from './boxTeam'

function Team() {

    const dataDeMerde = [
        {
            name: 'Matériaux, Mécanique, Fluides & Energétique (2MFE)',
            nbChercheur: '7',
            nbEnseignant: '4',
            domaine:'Transport (véhicules aériens et terrestres), Optimisation énergétique et énergies renouvelables, Fabrication additive',
            projet:['Caractérisation et modélisation des matériaux composites et nano-composites (tenue mécanique des réservoirs de stockage d\'hydrogène)',
                    'Etude numérique et expérimentale des transferts de masse et de chaleur au sein d’écoulements diphasiques (caloducs et boucles diphasiques)',
                    'Etude des transferts dans les écoulements tourbillonnaires (méthode de Lattice Boltzmann)'],
    
            collaborateur: 'LaMé, Institut Pprime, GeePs',
            nomPhoto: "photo1",
    
        }
    ]



    return (
    
        <div className='MainPart'>

            <div className='CenterBox'>

                <center><h1> Nos quatre équipes de recherches : </h1></center>

                <br></br>

                {
                    dataDeMerde.map((index) => (
                        <boxTeamFct listeData={index} />
                        
                    ))

                }

            </div>

        </div>

    );
}

export default Team;


