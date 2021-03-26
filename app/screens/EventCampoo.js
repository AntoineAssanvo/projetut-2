import React from 'react'
import { ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CAMPOO } from '../../assets/themes/ThemeCampoo';
import EventButtonCampoo from '../components/button/EventButtonCampoo';
import EventUserItem from '../components/EventUserItem';


export default function EventCampoo({ navigation }) {





	return (




		// lq sqfeareaview permet d' eviter les probleme d'affichage du au telphone avec encoche (iphone x et certain android )
		<SafeAreaView style={styles.container}>

			{/* stylise automatiquement la barre de status en fonction des couleurs de l'application  */}
			<StatusBar style='auto' />
			<View style={styles.headerContainer}>

				<TouchableOpacity style={styles.mainButton}>
					<EventButtonCampoo >
						<Text style={styles.titleButton1}>Evenement du campus</Text>

					</EventButtonCampoo>

				</TouchableOpacity>


				<TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('EventUserCampoo')}>
					<EventButtonCampoo >
						<Text style={styles.titleButton2} >Tes evenements</Text>
					</EventButtonCampoo>
				</TouchableOpacity>



			</View>
			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

				<View style={styles.eventContainer}>

				</View>

				<TouchableOpacity onPress={() => navigation.push('EventDetailCampoo')}>
					<EventUserItem

						image={require("../../assets/images/imagePost-Test.png")}
						title="TITRE DE L'EVENEMENT"

						eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

						date='17/05/2020'

						hours='18h20'

						location='2 rue ta soeur tire au flanc'

					/>

				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.push('EventDetailCampoo')}>
					<EventUserItem

						image={require("../../assets/images/imagePost-Test.png")}
						title="TITRE DE L'EVENEMENT"

						eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

						date='17/05/2020'

						hours='18h20'

						location='2 rue ta soeur tire au flanc'

					/>

				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.push('EventDetailCampoo')}>
					<EventUserItem

						image={require("../../assets/images/imagePost-Test.png")}
						title="TITRE DE L'EVENEMENT"

						eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

						date='17/05/2020'

						hours='18h20'

						location='2 rue ta soeur tire au flanc'

					/>

				</TouchableOpacity>

			</ScrollView>



		</SafeAreaView>

	);








}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		//  pour detecter la platform
		paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 40,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',


	},
	userButton: {
		backgroundColor: CAMPOO.secondary,
		flex: 0,
		flexDirection: 'row',
		width: '45%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		height: 50,

	},

	titleButton2: {
		height: 50,

		fontSize: 16,
		color: CAMPOO.primary,



	},

	mainButton: {
		backgroundColor: CAMPOO.primary,
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '45%',
		borderRadius: 5,
		height: 50,
		paddingHorizontal: 40,
		textAlign: 'center',



	},
	titleButton1: {

		height: 50,
		fontSize: 15,
		color: 'white',
	},

	scrollContainer: {
		width: '90%',
	},

	eventContainer: {
		width: '100%',


	},


	headerContainer: {
		width: '90%',
		height: 60,
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',






	},








})
