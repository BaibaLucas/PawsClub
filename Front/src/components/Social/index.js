/* Package imports */
import React from 'react';
import { SocialIcon } from 'react-social-icons';

/* Local imports */

// Components

const Social = () => {
  return (
    <div className='social'>
      <div className='container'>
        <div className='container__list'>
          <div className='container__list__items'>
          <SocialIcon network='twitter' bgColor='#F0FF00'  fgColor='#0000' url="https://twitter.com" />
          </div>
          <div className='container__list__items'>
          <SocialIcon network='discord' bgColor='#F0FF00' fgColor='#0000' url="https://discord.com" />
          </div>
          <div className='container__list__items'>
          <SocialIcon network='instagram' bgColor='#F0FF00' fgColor='#0000' url="https://instagram.com" />
          </div>
          <div className='container__list__items'>
          <SocialIcon network='twitch' bgColor='#F0FF00' fgColor='#0000' url="https://twitch.com" />
          </div>
          <div className='container__list__items'>
          <SocialIcon network='youtube' bgColor='#F0FF00' fgColor='#0000'url="https://youtube.com" />
          </div>
          <div className='container__list__items'>
          <SocialIcon network='facebook' bgColor='#F0FF00' fgColor='#0000' url="https://facebook.com" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Social;