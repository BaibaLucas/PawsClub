/* Package imports */
import React from 'react';
import ReactPlayer from 'react-player';


/* Local imports */

// Components

const Streams = ({ streams }) => {
  return (
    <div className='streams'>
      <div className='streams__container'>
        <div className='streams__container__presentation'>
          <div className='streams__container__presentation__title'>
            <h1>STREAM</h1>
          </div>
          <div className='streams__container__presentation__content'>
            Retrouvez les streamers de la communauté.
          </div>
        </div>
        <div className='streams__container__streambox'>
            {!streams && (
              <>
              NULL
              </>
            )}
            {streams && (
              streams.map((stream => {
                return (
                  <div key={stream.id} className='streams__container__streambox__card'>
                    <ReactPlayer 
                      url={stream.stream}
                      height='100%'
                      width='100%'
                    />
                  </div>
                )
              }))
            )}
        </div>
      </div>
    </div>
  )
};

export default Streams;