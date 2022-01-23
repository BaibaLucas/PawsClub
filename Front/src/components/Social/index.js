/* Package imports */
import React from 'react';
import { SocialIcon } from 'react-social-icons';

/* Local imports */

// Components

/** SocialIcon DOC
 * 
 * https://jaketrent.github.io/react-social-icons/
 * 
 * 
 * @param url = By default, pass the url of your social network, and the icon will be detected from the url
 * 
 * @param network = Social network choice
 * 
 * @param bgColor = Background Color
 * 
 * @param fgColor = icon color
 * 
 * @param label = label
 * 
 * <SocialIcon network bgColor fgColor label url />
 */

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