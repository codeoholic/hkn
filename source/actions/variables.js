import { CHANGE_VARIABLE } from './type';
export const change_variable = (key, value) => {
  	return ({
    	type:CHANGE_VARIABLE,
    	payload:{ key, value }
  	});
}
