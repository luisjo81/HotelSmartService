import React, { Component } from 'react';
import { 
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground
} from 'react-native';

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Backgrounds
import BackgroundUmami from '../../assets/backgrounds/umami_1.png';

//Icons
import IconUmami from '../../assets/icons/umami.png';
import IconBooking from '../../assets/icons/bell.png';
import IconLogin from '../../assets/icons/key.png';
import IconSocialMedia from '../../assets/icons/network.png';
import IconRatings from '../../assets/icons/rating.png';
import IconContact from '../../assets/icons/phone.png';
import IconLanguage from '../../assets/icons/language.png';

export default class Home extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: colors.black
        },
    };

    constructor(props) {
      super(props);
      this.state = {
        data: [
            {
                key: "info", 
                title: "¡Conozca nuestro hotel!", 
                color: colors.transparentWhite, 
                description: "Infórmese acerca de los servicios y comodidades que le ofrecemos",  
                image: IconUmami
            },
            {
                key: "login", 
                title: "Ingresar", 
                color: colors.transparentWhite, 
                description: "Reciba información útil y acceso a servicios durante su estadía", 
                image: IconLogin
            },
            {
                key: "booking", 
                title: "Reservas", 
                color: colors.transparentWhite, 
                description: "Realice una reservación online a través de nuestra página web", 
                image: IconBooking
            },
            {
                key: "social", 
                title: "Redes Sociales",   
                color: colors.transparentWhite, 
                description: "Ingrese a nuestras redes sociales para mantenerse informado",  
                image: IconSocialMedia
            },
            {
                key: "ratings", 
                title: "Calificaciones",  
                color: colors.transparentWhite, 
                description: "Observe el Muro de Calificaciones otorgadas por nuestros inquilinos",  
                image: IconRatings
            },
            {
                key: "contact", 
                title: "Contáctenos", 
                color: colors.transparentWhite, 
                description: "Consulte los diferentes medios para recibir información y asistencia", 
                image: IconContact
            },
            {
                key: "language", 
                title: "Idioma", 
                color: colors.transparentWhite, 
                description: "Cambie la configuración de idioma / Change language configuration", 
                image: IconLanguage
            },
        ]
      };
    }
  
    //Selects an option depending of the list item touched
    _clickEventListener(key) {
        switch(key){
            case "info":
                this.props.navigation.navigate('Information');
                break;
            case "login":
                this.props.navigation.navigate('Login');
                break;
            case "booking":
                break;
            case "social":
                this.props.navigation.navigate('SocialMedia');
                break;
            case "ratings":
                break;
            case "contact":
                this.props.navigation.navigate('Contact');
                break;
            case "language":
                this.props.navigation.navigate('Language');
                break;
        }
    }
  
    render() {
      return (
        <ImageBackground style={styles.homeScreenBackground} source={BackgroundUmami}>
          <View style={styles.homeScreenMainContainer}>
            <FlatList style={styles.homeScreenList}
              contentContainerStyle={styles.homeScreenListContainer}
              data={this.state.data}
              horizontal={false}
              numColumns={1}
              keyExtractor= {(item) => {
                return item.key;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={[styles.homeScreenCard, {backgroundColor:item.color}]} onPress={() => {this._clickEventListener(item.key)}}>
                    <View style={styles.homeScreenCardHeader}>
                      <Text style={styles.homeScreenListTitleText}>{item.title}</Text>
                    </View>
                    <Image style={styles.homeScreenCardImage} source={item.image}/>
                    <View style={styles.homeScreenCardFooter}>
                      <Text style={styles.homeScreenListInfoText}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}/>
          </View>
        </ImageBackground>
      );
    }
}