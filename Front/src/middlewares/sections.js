/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  getSectionsSuccess,
  getRosterSuccess,
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

    default: 
      next(action);
  }

};

export default Sections;