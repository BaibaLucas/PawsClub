/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  getNewsSuccess,
} from '../store/action';


/* Paws API News MiddleWare */
const News = (store) => (next) => (action) => {

  switch (action.type) {

    case 'GET_NEWS': {
      axios.get(`${apiUrl}/news`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(getNewsSuccess(response.data.data));
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

export default News;