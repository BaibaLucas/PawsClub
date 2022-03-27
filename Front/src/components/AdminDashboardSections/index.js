/* Package imports */
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';


/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';
import getCanvasImage from '../../utils';
import { dataURLtoFile } from '../../utils';

// Components

const AdminDashboardSections = ({ loadSections, sections, handleChange, submitCreate, submitUpdate, selectedSection, section_id, section_name, section_title, section_desc, section_content, submitDelete, msg, success, refreshStatus, section_sectionurl }) => {

  // Loading Users
  useEffect(() => {
    loadSections();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    const canvas = await getCanvasImage(image);
    const canvasDataUrl = canvas.toDataURL('image/jpeg');
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'section-picture.jpeg');
    submitCreate(convertedUrlToFile);
  };

  const backToSection = () => {
    loadSections();
    refreshStatus();
    setImage('');
    setOpenCreate(false);
    setOpenUpdate(false);
    setOpenDelete(false);
  };

  const selectSection = (id, name, title, sectionurl, desc, content) => {
    console.log(id, name, title, sectionurl, desc, content)
    selectedSection(id, name, title, sectionurl, desc, content);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    submitUpdate();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    submitDelete();
  }

  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const openModalCreate = () => {
    setOpenCreate(!openCreate);
    console.log(openCreate);
  };
  const openModalUpdate = () => {
    setOpenUpdate(!openUpdate);
    console.log(openUpdate);
  };
  const openModalDelete = () => {
    setOpenDelete(!openDelete);
    console.log('click')
  };


const [image, setImage] = useState(null);

// Handle Value file image
const onSelectFile = async (event) => {
  if (event.target.files && event.target.files.length > 0) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.addEventListener("load", () => {
      setImage(reader.result);
    });
  };
};

  return(
    <div className='admindashboardsections'>
      <div className='container'>
        <div className='container__title'>
          <h1> SECTIONS DASHBOARD </h1>
        </div>
        <div className='container__back'>
        <NavLink to='/admin/dashboard'>
          Back to Dashboard
        </NavLink>
        </div>
          <div className='container__choice'>
          <div className='container__choice__item' onClick={openModalCreate}>
            CREATE
          </div>
          {section_id.length !== 0 && (
            <>
            <div className='container__choice__item' onClick={openModalUpdate}>
            UPDATE
          </div>
          <div className='container__choice__item' onClick={openModalDelete}>
            DELETE
          </div>
            </>
          )}
        </div>
        <div className='container__box'>
          {!sections && (
            <h1>Aucune section actuellement disponible</h1>
          )}
        {sections && (
          sections.map((section => {
              return (
                <div key={section.id}
                className='container__box__card'
                onClick={() => selectSection(section.id, section.name, section.title, section.sectionurl, section.description, section.content)}  
                >
                  <img className='container__box__card__image'
                  src={section.sectionurl}
                  alt='section_illus'/>
                  <div className='container__box__card__username'>
                    {section.name}
                  </div>
                </div>
              )
            })))}
        </div>
        {openCreate && (
          <div className='container__modal'>
            <div className='container__modal__create'>
              <div className='container__modal__create__title'>
                MODAL Create
              </div>
              <form className='container__modal__create__form' encType='multipart/form-data' >
               {image && (
                <div className='container__modal__create__form__image'>
                <img src={image} alt='section img' />
              </div>
               )} 
               {!success && (
                 <>
                 <label className='container__modal__create__form__label' htmlFor='upload__photo'>Select File</label>
                <input
                id='upload__photo'
                onChange={onSelectFile}
                className='container__modal__create__form__input'
                type='file'
                name='imgsection'
                accept="image/*"
                />
                <label>Name</label>
                <input
                className='container__modal__create__form__input'
                name='section_name'
                onChange={onChange}
                placeholder='name' 
                />
                <label>Title</label>
                <input
                className='container__modal__create__form__input'
                name='section_title'
                onChange={onChange}
                placeholder='title' 
                />
                <label>Description</label>
                <textarea
                className='container__modal__create__form__textarea'
                name='section_desc'
                onChange={onChange}
                placeholder='desc' 
                />
                <label>Content</label>
                <textarea
                className='container__modal__create__form__textarea'
                name='section_content'
                onChange={onChange}
                placeholder='content' 
                />
                  <div className='container__modal__create__button'>
                  <button onClick={handleCreate}>
                    Valider
                  </button>
                  <button onClick={openModalCreate}>
                    Annuler
                  </button>
                </div>
                 </>
               )}
                {success && (
                  <>
                  <div className='container__modal__create_msg'>
                    {msg}
                  </div>
                  <div className='container__modal__create__button'>
                  <button onClick={backToSection}>
                    Back to Sections
                  </button>
                  </div>
                  </>
                )}
              </form>
            </div>
          </div>
          )}
        {openUpdate && (
          <div className='container__modal'>
            <div className='container__modal__update'>
              <div className='container__modal__update__title'>
                MODAL UPDATE
              </div>
                <div className='container__modal__update__section'>
                {section_name}
                </div>
                <form className='container__modal__update__form'>
                  {!success && (
                    <>
                    <div className='container__modal__create__form__image'>
                    <img src={section_sectionurl} alt='section img' />
                    </div>
                    <label>Name</label>
                    <input
                    value={section_name}
                    name='section_name'
                    onChange={onChange}
                    placeholder='name' 
                    />
                    <label>Title</label>
                    <input
                    value={section_title}
                    name='section_title'
                    onChange={onChange}
                    placeholder='title' 
                    />
                    <label>Description</label>
                    <textarea
                    value={section_desc}
                    name='section_desc'
                    onChange={onChange}
                    placeholder='desc' 
                    />
                    <label>Content</label>
                    <textarea
                    value={section_content}
                    name='section_content'
                    onChange={onChange}
                    placeholder='content' 
                    />
                    
                <div className='container__modal__update__button'>
                  <button onClick={handleUpdate}>
                    Valider
                  </button>
                  <button onClick={openModalUpdate}>
                    Annuler
                  </button>
                </div>
                </>
                )}
                {success && (
                  <>
                  <div className='container__modal__update__msg'>
                    {msg}
                  </div>
                  <div className='container__modal__update__button'>
                  <button onClick={backToSection}>
                    Back to Sections
                  </button>
                  </div>
                  </>
                )}
              </form>
            </div>
          </div>
          )}
          {openDelete && (
          <div className='container__modal'>
            <div className='container__modal__delete'>
              <div className='container__modal__delete__title'>
                MODAL DELETE
              </div>
              {!success &&(
                <>
                <div className='container__modal__delete__section'>
                Êtes vous sur de vouloir supprimer cette section : {section_name} ?
                </div>
                <div className='container__modal__delete__button'>
                <button onClick={handleDelete}>
                  Oui
                </button>
                <button onClick={openModalDelete}>
                  Annuler
                </button>
                </div>
                </>
              )}
              {success && (
                  <>
                  <div className='container__modal__delete__msg'>
                    {msg}
                  </div>
                  <div className='container__modal__delete__button'>
                  <button onClick={backToSection}>
                    Back to Sections
                  </button>
                  </div>
                  </>
                )}
            </div>
          </div>
          )}
      </div>
    </div>
  )
};

export default AdminDashboardSections;