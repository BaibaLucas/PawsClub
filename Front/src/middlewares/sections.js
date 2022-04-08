/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  getSectionsSuccess,
  getRosterSuccess,
  createSectionSuccess,
  deleteSectionSuccess,
  updateSectionSuccess,
  sectionDetailsSuccess,
} from '../store/action';


/* Paws API Sections MiddleWare */
const Sections = (store) => (next) => (action) => {

  switch (action.type) {

    case 'GET_SECTIONS': {
      axios.get(`${apiUrl}/lineup`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(getSectionsSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'GET_ROSTER': {
      axios.get(`${apiUrl}/roster/${action.id}`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(getRosterSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'CREATE_SECTION': {
      const { 
        auth : { token }, 
        sections: { section_name, section_title, section_desc, section_content },
      } = store.getState();
      const formData = new FormData();
      formData.append('myImage', action.formData);
      const config = {
        method: 'post',
        url: `${apiUrl}/lineup`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`,
        },
        data: {
          section_name,
          section_title,
          section_desc,
          section_content,
        }
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            const config2 = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Baerer ${token}`,
              } 
            };
            axios.post(`${apiUrl}/lineup/image/${response.data.data.id}`, formData, config2)
            .then((response) => {
              store.dispatch(createSectionSuccess(response.data, response.data.message));
            }).catch((error) => {
              console.log(error);
            });
          }
        }).catch((error) => {
          console.log(error);
        });
      break;
    };

    case 'UPDATE_SECTION': {
      const { sections: { section_id, section_name, section_title, section_desc, section_content }
    } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/lineup/${section_id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          section_name,
          section_title,
          section_desc,
          section_content,
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(updateSectionSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'DELETE_SECTION': {
      const { 
        sections: { section_id },
        auth : { token },  } = store.getState();
      const config = {
        method: 'delete',
        url: `${apiUrl}/lineup/${section_id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !==200) {
            throw response.error;
          } else {
            store.dispatch(deleteSectionSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'GET_SECTION_DETAILS': {
      axios.get(`${apiUrl}/lineup/${action.id}`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(sectionDetailsSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
      }

      case 'GET_SECTION_DETAILS_BY_SLUG': {
        axios.get(`${apiUrl}/lineup/${action.slug}`)
          .then((response) => {
            if (response.status !== 200) {
              throw response.error;
            } else {
              store.dispatch(sectionDetailsSuccess(response.data));
            }
          }).catch((error) => {
            console.log(error);
          });
          break;
        }

    default: 
      next(action);
  }

};

export default Sections;