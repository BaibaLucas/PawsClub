/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */
import { buildSectionUrl } from '../../utils';

// Components

const LinesUp = ({ sections, selectedSection }) => {



  return(
    <div className='linesup'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>LINES UP</h1>
          </div>
          <div className='container__presentation__content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue ipsum finibus, tempor neque a, imperdiet lorem. Donec interdum est consectetur magna fermentum tristique. Aliquam et dignissim leo. Donec mollis commodo sollicitudin.
          </div>
        </div>
        <div className='container__box'>
          {sections.map((section => {
            return(
            <NavLink
              key={section.id} 
              className='container__box__card'
              onClick={() => {selectedSection(section.id, section.name, section.title, section.sectionurl, section.desc, section.content)}}
              to={buildSectionUrl(section.name)}>
            <div  className='container__box__card__content'>
              <img className='container__box__card__content__image' src={section.sectionurl} alt='wow illustration' />
              <div className='container__box__card__content__title'>
                {section.name}
              </div>
            </div>
          </NavLink>
          )}))}
        </div>
      </div>
    </div>
  )
};

export default LinesUp;