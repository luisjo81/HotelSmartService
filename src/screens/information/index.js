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
import BackgroundShells from '../../assets/backgrounds/shells.jpg';

//Images
import ImageLocation from '../../assets/photos/puertoviejo1.jpg';
import ImageRestaurant from '../../assets/photos/food1.jpg';
import ImageRoom from '../../assets/photos/room1.jpg';
import ImageServices from '../../assets/photos/spa.jpg';
import ImageActivities from '../../assets/photos/canopy.jpg';
import ImageWeather from '../../assets/photos/sunny.jpg';


export default class Information extends Component {
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
                key: "location", 
                title: "Puerto Viejo", 
                color: colors.transparentAqua,  
                image: ImageLocation
            },
            {
                key: "rooms", 
                title: "Habitaciones", 
                color: colors.transparentPurple, 
                image: ImageRoom
            },
            {
                key: "restaurant", 
                title: "Restaurante", 
                color: colors.transparentPurple, 
                image: ImageRestaurant
            },
            {
                key: "services", 
                title: "Servicios",   
                color: colors.transparentAqua,  
                image: ImageServices
            },
            {
                key: "activities", 
                title: "Actividades",  
                color: colors.transparentAqua,   
                image: ImageActivities
            },
            {
                key: "weather", 
                title: "Clima", 
                color: colors.transparentPurple, 
                image: ImageWeather
            }
        ]
      };
    }
  
    //Selects an option depending of the list item touched
    _clickEventListener(key) {
        switch(key){
            case "location":
                this.props.navigation.navigate('Location');
                break;
            case "restaurant":
                this.props.navigation.navigate('Restaurant');
                break;
            case "room":
                break;
            case "services":
                this.props.navigation.navigate('Services');
                break;
            case "activities":
                break;
            case "weather":
                break;
        }
    }
  
    render() {
      return (
        <ImageBackground style={styles.informationScreenBackground} source={BackgroundShells}>
          <View style={styles.informationScreenMainContainer}>
            <FlatList style={styles.informationScreenList}
              contentContainerStyle={styles.informationScreenListContainer}
              data={this.state.data}
              horizontal={false}
              numColumns={2}
              keyExtractor= {(item) => {
                return item.key;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={[styles.informationScreenCard, {backgroundColor:item.color}]} onPress={() => {this._clickEventListener(item.key)}}>
                    <View style={styles.informationScreenCardHeader}>
                      <Text style={styles.informationScreenListTitleText}>{item.title}</Text>
                    </View>
                    <Image style={styles.informationScreenCardImage} source={item.image}/>
                    <View style={styles.informationScreenCardFooter}>
                    </View>
                  </TouchableOpacity>
                )
              }}/>
          </View>
        </ImageBackground>
      );
    }
}