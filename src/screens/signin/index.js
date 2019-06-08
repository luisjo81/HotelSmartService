import React, { Component } from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Backgrounds
import BackgroundShells from '../../assets/backgrounds/shells.jpg';

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    _onEmailTextChanged = event => {
        this.setState({
            email: event.nativeEvent.text,
        });
    }

    _onFirstNameChanged = event => {
        this.setState({
            firstName: event.nativeEvent.text,
        });
    }

    _onLastNameChanged = event => {
        this.setState({
            lastName: event.nativeEvent.text,
        });
    }

    _onPasswordTextChanged = event => {
        this.setState({
            password: event.nativeEvent.text,
        });
    }

    _onUserNameTextChanged = event => {
        this.setState({
            userName: event.nativeEvent.text,
        });
    }

    //Connect with the server to create user
    _registerUser() {
    }

    _setDefaultData() {
        this.setState({
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
    }

    //Checks if all the spaces in form have information
    _verifyUserForm() {
        if (
            this.state.userName === '' ||
            this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.email === '' ||
            this.state.password === ''
        ) {
            alert("Se deben completar todos los espacios");
        } else {
            this._registerUser()
        }

    }

    render() {
        return (
            <ImageBackground style={styles.signinScreenBackground} source={BackgroundShells}>
                <KeyboardAvoidingView behavior={'padding'} style={styles.signinScreenMainContainer}>
                    <Text style={styles.signinScreenTitleText}>Registro</Text>
                    <View style={styles.signinScreenFormContainer}>
                        <View style={styles.signinScreenSecondContainer}>
                            <TextInput
                                placeholder="Usuario"
                                placeholderTextColor={colors.transparentBlack}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.userName}
                                onChange={this._onUserNameTextChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Nombre"
                                placeholderTextColor={colors.transparentBlack}
                                autoCorrect={false}
                                value={this.state.firstName}
                                onChange={this._onFirstNameChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Apellido"
                                placeholderTextColor={colors.transparentBlack}
                                autoCorrect={false}
                                value={this.state.lastName}
                                onChange={this._onLastNameChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Correo Electrónico"
                                placeholderTextColor={colors.transparentBlack}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.email}
                                onChange={this._onEmailTextChanged}
                                style={styles.signinScreenInputContainer} />
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor={colors.transparentBlack}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                                value={this.state.password}
                                onChange={this._onPasswordTextChanged}
                                style={styles.signinScreenInputContainer} />
                            <TouchableOpacity style={styles.signinScreenButtonContainer} onPress={() => { this._verifyUserForm() }}>
                                <Text style={styles.signinScreenButtonText}>LISTO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}