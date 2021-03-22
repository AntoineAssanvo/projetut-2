import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text, Button } from 'react-native';
import ButtonCampoo from "../../components/button/ButtonCampoo";
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import InputCampooSignup from '../../components/input/InputCampooSignup';
import LabelCampoo from '../../components/LabelCampoo';

export default function MdpOResetCampoo({ navigation }) {


    return (

        <SafeAreaView style={styles.container}>

            <LogoCampoo />
            <Image style={styles.baloo} source={require("../../../assets/images/Baloo-Blob-Securité.png")} />

            <View style={styles.PswdView}>

                <View>

                    <LabelCampoo style={styles.Pswd1}>Mot de passe</LabelCampoo>
                    <Text style={styles.textMdp}>Pour ta sécurité, Baloo te recommande d’utiliser au moins 6 caractères.</Text>

                    <InputCampooSignup secure={true} style={styles.InputView1} />

                </View>

                <View>

                    <LabelCampoo style={styles.Pswd2}>Vérification</LabelCampoo>

                    <InputCampooSignup secure={true} style={styles.InputView2} />

                </View>

                <ButtonCampoo style={styles.button} onPress={() => navigation.push('MdpOResetConfirmed')}>Suivant</ButtonCampoo>

                <SecondaryButtonCampoo style={styles.retour} onPress={() => navigation.goBack()}>Retour</SecondaryButtonCampoo>

            </View>

        </SafeAreaView>

    );


}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },

    logoCampoo: {

        position: 'absolute',
        width: 115,
        height: 115,
        marginTop: 20,
        left: 260

    },

    textMdp: {
        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',


    },

    Pswd1: {

        marginBottom: 9,

    },

    Pswd2: {

        marginBottom: -18,

    },

    InputView1: {

        marginBottom: 27,

    },

    InputView2: {

        marginBottom: 57,

    },

    PswdView: {

        height: 389,
        width: 300,
        top: 118,

    },

    button: {

        alignSelf: 'center',
        marginBottom: 7,

    },

    baloo: {

        position: "absolute",
        width: 559,
        height: 438,
        left: 38,
        top: 440,

    },

    retour: {
        alignSelf: 'center',

    },
})