/* Package imports */
import React from 'react';

/* Local imports */
import pawsLogo from '../../assets/images/pawswhite.png';
// Components


const About = () => {
  return(
    <div className='about'>
      <div className='container'>
        <div className='container__title'>
          <h1>Qui sommes-nous ?</h1>
        </div>
        <div className='container__content'>
          <img className='container__content__image' alt='illustration about' src={pawsLogo}/>
          <div className='container__content__text'>
          Le club des Patounes est une communauté créer durant l'été 2021 (Juillet 2021) suite à une rencontre de plusieurs personnes sur World Of Warcraft. Nous avons vu le jour sur le serveur Archimonde côté Alliance, puis nous avons agrandi nos rangs via une période de recrutement. Beaucoup de monde nous on rejoint et a adopté le projet de notre communauté. Plusieurs line-ups virent les jours suite au mois qui précède la création de la communauté. Nous avons pour objectif de créer une communauté afin de se regrouper autour de notre passion les jeux vidéo. Que tu sois débutant ou vétéran notre objectif reste avant tout de s'amuser tous ensemble ! 
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;