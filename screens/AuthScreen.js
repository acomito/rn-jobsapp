import React from 'react';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends React.Component {
	componentDidMount(){
		console.log(this.props);
		this.props.facebookLogin();
		//AsyncStorage.removeItem('fb_token')
		this.onAuthComplete(this.props);
	}
	componentWillReceiveProps(nextProps){
		this.onAuthComplete(nextProps);
	}
	onAuthComplete(props){
		if (props.token) {
			this.props.navigation.navigate('map');
		}
	}
	render(){
		return (
			<View>
				<ActivityIndicator />
			</View>
		);
	}
}

function mapStateToProps({ auth }) {
	console.log(auth);
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);