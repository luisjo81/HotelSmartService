//React Components
import React, { Component } from 'react';

//React Native Components
import {
    ImageBackground,
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';
import BackgroundShells from '../../assets/backgrounds/shells.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            password: '',
            dataSource: ''
        };
    }

    //Listener depending of the option
    _clickEventListener() {
        this._getData();
    }

    _onPasswordTextChanged = event => {
        this.setState({
            password: event.nativeEvent.text,
        });
    };

    _onUserNameTextChanged = event => {
        this.setState({
            userName: event.nativeEvent.text,
        });
    };

    //Get info from the server when user is login
    _getData() {
        
    }

    render() {
        return (
            <ImageBackground style={styles.loginScreenBackground} source={BackgroundShells}>
                <KeyboardAvoidingView behavior={'padding'} style={styles.loginScreenMainContainer}>
                    <Text style={styles.loginScreenTitleText}>UMAMI</Text>
                    <View style={styles.loginScreenFormContainer}>
                        <View style={styles.loginScreenBackContainer}>
                            <TextInput
                                placeholder="Usuario"
                                placeholderTextColor={colors.transparentBlack}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={this.state.userName}
                                onChange={this._onUserNameTextChanged}
                                style={styles.loginScreenInputContainer} />
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor={colors.transparentBlack}
                                secureTextEntry
                                value={this.state.password}
                                onChange={this._onPasswordTextChanged}
                                style={styles.loginScreenInputContainer} />
                            <TouchableOpacity style={styles.loginScreenButtonContainer} onPress={() => { this._clickEventListener() }}>
                                <Text style={styles.loginScreenButtonText}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signin') }}>
                                <Text style={styles.loginScreenSigninLinkText}>¿No tienes cuenta? REGÍSTRATE AQUÍ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}