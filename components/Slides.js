import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends React.Component {
	renderLastSlide(index){

		if (index === this.props.data.length - 1) {
			return (
				<Button 
					title='I am Done'
					raised
					buttonStyle={styles.buttonStyle}
					textStyle={{color: '#666'}}
					onPress={this.props.onSlidesComplete}
				/>
			);
		}

	}
	renderSlides(){
		return this.props.data.map((slide, index) => {
			return (
				<View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			);
		})
	}
	render(){

		return (
			<ScrollView horizontal style={{flex: 1}} pagingEnabled>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slideStyle: {
		flex: 1,
		width: SCREEN_WIDTH,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonStyle: {
		marginTop: 25,
		backgroundColor: '#fff',
	},
	textStyle: {
		textAlign: 'center',
		fontSize: 21,
		color: '#fff'
	}
}

export default Slides;