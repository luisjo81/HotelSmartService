import React, { Component } from 'react';
import { 
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    Linking
} from 'react-native';

//Constants
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Backgrounds
import BackgroundShells from '../../assets/backgrounds/shells.jpg';

//Icons
import IconFacebook from '../../assets/icons/facebook.png';
import IconWebpage from '../../assets/icons/webpage.png';

export default class Language extends Component {
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
                key: "facebook", 
                image: IconFacebook,
            },
            {
                key: "webpage", 
                image: IconWebpage
            }
        ]
      };
    }
  
    //Selects an option depending of the list item touched
    _clickEventListener(key) {
        switch(key){
            case "facebook":
                Linking.canOpenURL('https://www.facebook.com/umamihotel').then(supported => {
                    if (supported) {
                      Linking.openURL('https://www.facebook.com/umamihotel');
                    } else {
                      console.log("URL inválido, intente luego");
                    }
                });
                break;
            case "webpage":
                    Linking.canOpenURL('https://www.umamihotel.com/').then(supported => {
                        if (supported) {
                          Linking.openURL('https://www.umamihotel.com/');
                        } else {
                          console.log("URL inválido, intente luego");
                        }
                    });
                break;
        }
    }
  
    render() {
      return (
        <ImageBackground style={styles.socialMediaScreenBackground} source={BackgroundShells}>
          <Text style={styles.socialMediaScreenTitleText}>REDES SOCIALES</Text>
          <View style={styles.socialMediaScreenMainContainer}>
            <FlatList style={styles.socialMediaScreenList}
              contentContainerStyle={styles.socialMediaScreenListContainer}
              data={this.state.data}
              horizontal={true}
              scrollEnabled={false}
              numColumns={1}
              keyExtractor= {(item) => {
                return item.key;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={[styles.socialMediaScreenCard]} onPress={() => {this._clickEventListener(item.key)}}>
                    <Image style={styles.socialMediaScreenCardImage} source={item.image}/>
                  </TouchableOpacity>
                )
              }}/>
          </View>
        </ImageBackground>
      );
    }
}