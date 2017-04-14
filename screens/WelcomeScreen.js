import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides'
import _ from 'lodash';
import { AppLoading } from 'expo';

const SLIDE_DATA = [
	{
		text: 'Welcome to JobApp',
		color: '#663399'
	},
	{
		text: 'Use this to get a job.',
		color: '#00B16A'
	},
	{
		text: 'Set your location, then slide away.',
		color: '#E67E22'
	},
];

class WelcomeScreen extends React.Component {

	state = { token: null }

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	}

	async componentWillMount(){
		let token = await AsyncStorage.getItem('fb_token');
		if (token) {
			this.props.navigation.navigate('map');
			this.setState({ token: true });
		} else {
			this.setState({ token: false });
		}
		
	}

	render(){

		if (_.isNull(this.state.token)) return <AppLoading />

		return (
			<Slides 
				data={SLIDE_DATA}
				onSlidesComplete={this.onSlidesComplete}
			/>
		);
	}
}

export default WelcomeScreen;