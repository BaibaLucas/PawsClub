/* Package imports */
import React from 'react';
import ReactPlayer from 'react-player';


/* Local imports */

// Components

const Streams = ({ streams }) => {
  return (
    <div className='streams'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>STREAM</h1>
          </div>
          <div className='container__presentation__content'>
            Retrouvez les streamers de la communauté.
          </div>
        </div>
        <div className='container__streambox'>
            {!streams && (
              <>
              NULL
              </>
            )}
            {streams && (
              streams.map((stream => {
                return (
                  <div className='container__streambox__card'>
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