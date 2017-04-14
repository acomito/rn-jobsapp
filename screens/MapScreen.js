import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo'
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import * as actions from '../actions';


class MapScreen extends React.Component {
	state = {
		mapLoaded: false,
		region: {
			longitude: -122,
			latitude: 37,
			longitudeDelta: 0.04,
			latitudeDelta: 0.09,
		},	
	}

	onButtonPress = () => {
		this.props.fetchJobs(this.state.region, (error, response) => {
			if (error) { return console.log(error); }
			this.props.navigation.navigate('deck');
		});
	}
	componentDidMount(){
		this.setState({ mapLoaded: true });
	}
	onRegionChangeComplete = (region) => {
		this.setState({ region });
	}
	render(){
		if (!this.state.mapLoaded) {
			return (
				<View style={{flex: 1, justifyContent: 'center'}}>
					<ActivityIndicator size='large' />
				</View>
			);
		}
		return (
			<View style={{flex: 1}}>
				<MapView 
					style={{flex: 1}} 
					region={this.state.region}
					onRegionChangeComplete={this.onRegionChangeComplete}
				/>
				<View style={styles.buttonContainer}>
					<Button 
						onPress={this.onButtonPress} 
						title='SET LOCATION' 
						large
						backgroundColor='#009688'
						icon={{ name: 'search'}} 
					/>
				</View>
			</View>
		);
		
	}
}



const styles = {
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		right: 0,
		left: 0
	}
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps, actions)(MapScreen);