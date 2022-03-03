/* Package imports */
import React from 'react';

/* Local imports */


// Components

const ImgProfil = ({}) => {
  return(
    <div className='imgprofil'>
      <div className='imgprofil__container'>
        <div className='imgprofil__container__title'>
          Upload Profil Pic
        </div>
        <form className='imgprofil__container__form' encType='multipart/form-data'>
        <label className='imgprofil__container__form__label'>Upload Profile Photo</label>
          <input
          id='upload__photo'
          className='imgprofil__container__form__input'
          type='file'
          name='imgprof'
          accept="image/*"
          />
          <button className='imgprofil__container__form__button' type='submit'>
            Valider
          </button>
        </form>
      </div>
    </div>
  )
};

export default ImgProfil;