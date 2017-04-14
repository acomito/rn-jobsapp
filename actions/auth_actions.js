import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL
} from './types';


//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');

const doFacebookLogin = async dispatch => {
	let { token, type } = await Facebook.logInWithReadPermissionsAsync('878679165608283', {
		permissions: [ 'public_profile' ],
	});

	if (type === 'cancel') { return dispatch({ type: FACEBOOK_LOGIN_FAIL }); }

	await AsyncStorage.setItem('fb_token', token);
	dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});

};


export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	
	if (token) { return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token}); }
	
	doFacebookLogin(dispatch);

};
	


