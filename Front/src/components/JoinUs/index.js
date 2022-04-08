/* Package imports */
import React from 'react';

/* Local imports */

// Components

const JoinUs = () => {

  return(
    <div className='joinus'>
      <div className='container'>
        <div className='container__title'>
          <h1>Nous rejoindre</h1>
          <h2> Pour nous rejoindre rien de plus simple, n'hésite pas à te connecter à notre discord puis nous t'invitons à te rendre auprès d'un de nos officiers.</h2>
        </div>
        <div className='container__discord'>
         <iframe title='discord server' src="https://discord.com/widget?id=874991073070563369&theme=dark" width="80%" height="80%" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
    </div>
  )
};

export default JoinUs;