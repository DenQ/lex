import * as Yup from 'yup';
import { fieldNames } from './constants';


export default Yup.object().shape({
	[fieldNames.PLAY_COUNT_WORDS]: Yup.number().required('Is Required'),
	[fieldNames.PLAY_MAX_COUNT_WINS]: Yup.number().required('Is Required'),
});
