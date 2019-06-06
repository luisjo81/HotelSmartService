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

//Icons
import IconPhone from '../../assets/icons/phone2.png';
import IconEmail from '../../assets/icons/email.png';

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
                key: "phone", 
                color: colors.transparentWhite, 
                info: "2750-3200",  
                image: IconPhone
            },
            {
                key: "email",  
                color: colors.transparentWhite, 
                info: "reservations@umamihotel.com", 
                image: IconEmail
            }
        ]
      };
    }
  
    //Selects an option depending of the list item touched
    _clickEventListener(key) {
        switch(key){
            case "phone":
                //this.props.navigation.navigate('Menu');
                break;
            case "email":
                break;
        }
    }
  
    render() {
      return (
        <ImageBackground style={styles.contactScreenBackground} source={BackgroundShells}>
          <View style={styles.contactScreenMainContainer}>
            <FlatList style={styles.contactScreenList}
              contentContainerStyle={styles.contactScreenListContainer}
              data={this.state.data}
              horizontal={false}
              scrollEnabled={false}
              numColumns={1}
              keyExtractor= {(item) => {
                return item.key;
              }}
              renderItem={({item}) => {
                return (
                  <View>
                    <Image style={styles.contactScreenCardImage} source={item.image}/>
                    <View style={styles.contactScreenCardFooter}>
                      <Text style={styles.contactScreenListInfoText}>{item.info}</Text>
                    </View>
                  </View>
                )
              }}/>
          </View>
        </ImageBackground>
      );
    }
}