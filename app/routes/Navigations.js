import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CAMPOO } from '../../assets/themes/ThemeCampoo';

// Icon BottomNavigation

import HomeIcon from '../../assets/svg/HomeIcon';
import EventIcon from '../../assets/svg/EventIcon';
import ProfileIcon from '../../assets/svg/ProfileIcon';
import SearchIcon from '../../assets/svg/SearchIcon';

// SignupStack

import ScreenLoginCampoo from '../screens/login/ScreenLoginCampoo';
import MailSignupCampoo from '../screens/signup/MailSignupCampoo';
import BatSignupCampoo from '../screens/signup/BatSignupCampoo';
import NameSignupCampoo from '../screens/signup/NameSignupCampoo';
import DobSignupCampoo from '../screens/signup/DobSignupCampoo';
import PseudoSignupCampoo from '../screens/signup/PseudoSignupCampoo';
import MdpSignupCampoo from '../screens/signup/MdpSignupCampoo';
import CodeVerifSignupCampoo from '../screens/signup/CodeVerifSignupCampoo';

// HomeSFeedtack

import HomeFeedCampoo from '../screens/HomeFeedCampoo';
import CommentCampoo from '../screens/CommentCampoo';
import SearchAssosCampoo from '../screens/SearchAssosCampoo';

// EventStack
import EventCampoo from '../screens/EventCampoo';
import EventUserCampoo from '../screens/EventUserCampoo';
import EventDetailCampoo from '../screens/EventDetailCampoo';

// ProfilStack

import UserProfil from '../screens/profils/UserProfil';
import SettingPage from '../screens/settings/SettingPage';
import CategoriesTags from '../screens/profils/CategoriesTags';
import UserModificationPage from '../screens/profils/UserModificationPage';
import ChooseTags from '../screens/profils/ChooseTags';
import MyTags from '../screens/profils/MyTags';

// SettingStack
import ChangeName from '../screens/settings/ChangeName';
import DeleteAccount from '../screens/settings/DeleteAccount'
import AssocRequest from '../screens/settings/AssocRequest';

// ASSOS STACK

import AssoEventCampoo from '../screens/Assos/AssoEventCampoo';
import AssosAddPost from '../screens/Assos/AssosAddPost';
import AssoFeedCampoo from '../screens/Assos/AssoFeedCampoo';
import createEventCampoo from '../screens/Assos/CreateEventCampoo';
import AssocProfil from '../screens/profils/AssocProfil';
import AssocModificationPage from '../screens/profils/AssocModificationPage';
import ViewAssocProfil from '../screens/profils/ViewAssocProfil';

// React navigation fontcionne avec un systeme de d'écran empilés 


/*========================== SIGNUP STACK =============================*/

// navigation de des étapes de creation de compte utilisateurs 
const SignupStack = createStackNavigator();
export default function SignupStackScreen() {
	return (
		<SignupStack.Navigator>
			<SignupStack.Screen name="ScreenLoginCampoo" component={ScreenLoginCampoo} options={{ headerShown: false }} />
			{/* Navigator contient le menu de navigation en postion bottom  */}
			<SignupStack.Screen name="Navigator" component={Navigator} options={{ headerShown: false }} />
			<SignupStack.Screen name="MailSignupCampoo" component={MailSignupCampoo} options={{ headerShown: false }} />
			<SignupStack.Screen name="NameSignupCampoo" component={NameSignupCampoo} options={{ headerShown: false }} />
			<SignupStack.Screen name="PseudoSignupCampoo" component={PseudoSignupCampoo} options={{ headerShown: false }} />
			<SignupStack.Screen name="DobSignupCampoo" component={DobSignupCampoo} options={{ headerShown: false }} />
			<SignupStack.Screen name="BatSignupCampoo" component={BatSignupCampoo} options={{ headerShown: false }} />
			<SignupStack.Screen name="MdpSignupCampoo" component={MdpSignupCampoo} options={{ headerShown: false }} />
			<SignupStack.Screen name="CodeVerifSignupCampoo" component={CodeVerifSignupCampoo} options={{ headerShown: false }} />
		</SignupStack.Navigator>

	);
}

/*=====================RESET PASSWORD STACK===========================*/






/*============================== AssosStack ============================*/

const AssosHomeStack = createStackNavigator();
export function AssosHomeStackScreen() {
	return (
		<AssosHomeStack.Navigator>
			<AssosHomeStack.Screen name="AssoFeedCampoo" component={AssoFeedCampoo} options={{ headerShown: false }} />
			<AssosHomeStack.Screen name="AssosAddPost" component={AssosAddPost} options={{ headerShown: false }} />

			{/* <HomeStack.Screen name="CommentCampoo" component={CommentCampoo} options={{ headerShown: false }} /> */}
		</AssosHomeStack.Navigator>
	);
}

// navigation de l'oonglet evenement pour un compte associé 
const AssosEventStack = createStackNavigator();
export function AssosEventStackScreen() {
	return (
		<AssosEventStack.Navigator>
			<AssosEventStack.Screen name="AssoEventCampoo" component={AssoEventCampoo} options={{ headerShown: false }} />
			<AssosEventStack.Screen name="createEventCampoo" component={createEventCampoo} options={{ headerShown: false }} />
		</AssosEventStack.Navigator>
	);
}

// navigation de l'onglet profil pour un compte associé

const AssosProfilStack = createStackNavigator();
export function AssosProfilStackScreen() {
	return (
		<AssosProfilStack.Navigator>
			<AssosProfilStack.Screen name="AssocProfil" component={AssocProfil} options={{ headerShown: false }} />
			<AssosProfilStack.Screen name="AssocModificationPage" component={AssocModificationPage} options={{ headerShown: false }} />
		</AssosProfilStack.Navigator>
	);
}

/*=========================== User Stack ==============================*/

// navigation de l'onglet feed aussi accueil de l'application d'un compte utilisateurs classqiue 
const HomeStack = createStackNavigator();
function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="HomeFeedCampoo" component={HomeFeedCampoo} options={{ headerShown: false }} />
			<HomeStack.Screen name="CommentCampoo" component={CommentCampoo} options={{ headerShown: false }} />
			<HomeStack.Screen name="SearchAssosCampoo" component={SearchAssosCampoo} options={{ headerShown: false }} />
		</HomeStack.Navigator>
	);
}


// nav igation de la l'onglet evenement pour compte associé
const EventStack = createStackNavigator();
function EventStackScreen() {
	return (
		<EventStack.Navigator >
			<EventStack.Screen name="EventCampoo" component={EventCampoo} options={{ headerShown: false }} />
			<EventStack.Screen name="EventUserCampoo" component={EventUserCampoo} options={{ headerShown: false }} />
			<EventStack.Screen name="EventDetailCampoo" component={EventDetailCampoo} options={{ headerShown: false }} />
		</EventStack.Navigator>
	);
};

// navigation de l'onglet du profil utilisateur 
const ProfilStack = createStackNavigator();
function ProfilStackScreen() {
	return (
		<ProfilStack.Navigator   >
			<ProfilStack.Screen name="UserProfil" component={UserProfil} options={{ headerShown: false }} />
			<ProfilStack.Screen name="SettingStackScreen" component={SettingStackScreen} options={{ headerShown: false }} />
			<ProfilStack.Screen name="UserModificationPage" component={UserModificationPage} options={{ headerShown: false }} />
			<ProfilStack.Screen name="CategoriesTags" component={CategoriesTags} options={{ headerShown: false }} />
			<ProfilStack.Screen name="ChooseTags" component={ChooseTags} options={{ headerShown: false }} />
			<ProfilStack.Screen name="MyTags" component={MyTags} options={{ headerShown: false }} />
		</ProfilStack.Navigator>
	);
};

// navigation de l'onglet parametre dans

const SettingStack = createStackNavigator();
function SettingStackScreen() {
	return (

		<SettingStack.Navigator>
			<SettingStack.Screen name="SettingPage" component={SettingPage} options={{ headerShown: false }} />
			<SettingStack.Screen name="ChangeName" component={ChangeName} options={{ headerShown: false }} />
			<SettingStack.Screen name="AssocRequest" component={AssocRequest} options={{ headerShown: false }} />
			<SettingStack.Screen name="DeleteAccount" component={DeleteAccount} options={{ headerShown: false }} />
		</SettingStack.Navigator>

	);
};

/*======================== BOTTOM NAVIGATION ======================*/




const Tab = createBottomTabNavigator();
export function Navigator() {


	return (
		<Tab.Navigator
			initialRouteName="Feed"
			// change l'arrier plan de l'onglet seclectionné
			tabBarOptions={{
				activeBackgroundColor: CAMPOO.secondary,
			}}

		>
			{/*  il faut afficher la AssosHomeStackScreen si l'user est assoscié */}
			<Tab.Screen
				name="accueil"
				component={HomeStackScreen}
				options={{
					// enleve le text sous l'icon dans la BOTTOM NAV
					tabBarLabel: () => { return null },
					tabBarIcon: () => {
						return (
							<HomeIcon />


						);
					},
				}}
			/>

			<Tab.Screen
				name="Rechercher des assos"
				component={SearchAssosCampoo}
				options={{
					// enleve le text sous l'icon dans la BOTTOM NAV
					tabBarLabel: () => { return null },
					tabBarIcon: () => {
						return (
							<SearchIcon />

						);
					},
				}}
			/>
			{/*  il faut afficher la AssosEventStackScreen si l'user est assoscié */}
			<Tab.Screen
				name="Evenement"
				component={EventStackScreen}
				options={{
					tabBarLabel: () => { return null },
					tabBarIcon: () => {
						return (
							<EventIcon />

						);
					},
				}}

			/>

			<Tab.Screen
				name="mon profil"
				component={ProfilStackScreen}
				options={{
					tabBarLabel: () => { return null },
					tabBarIcon: () => {
						return (
							<ProfileIcon />

						);
					},
				}}

			/>
		</Tab.Navigator>
	);
}



