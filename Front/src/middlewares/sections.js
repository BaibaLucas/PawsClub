/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  getSectionsSuccess,
  getRosterSuccess,
  createSectionSuccess,
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
          console.log('Savage error Appeared', error);
        });
        break;
    }

    case 'GET_ROSTER': {
      axios.get(`${apiUrl}/user`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log(response.data);
            store.dispatch(getRosterSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log('Savage error Appeared', error);
        });
        break;
    }

    case 'CREATE_SECTION': {
      const { 
        sections: { section_name, section_title, section_desc, section_content },
      } = store.getState();
      const config = {
        method: 'post',
        url: `${apiUrl}/lineup`,
        headers: {
          'Content-Type': 'application/json',
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
            console.log('response.data', response.data);
            store.dispatch(createSectionSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error, 'ERROR');
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
          console.log('ICI');
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log(response.data);
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
        break;
    }

    case 'DELETE_SECTION': {
      const { sections: { section_id } } = store.getState();
      const config = {
        method: 'delete',
        url: `${apiUrl}/lineup/${section_id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !==200) {
            throw response.error;
          } else {
            // store.dispatch(deleteUserSuccess(response.data));
            console.log(response.data);
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
        break;
    }

    default: 
      next(action);
  }

};

export default Sections;