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
import IconEnglish from '../../assets/icons/english.png';
import IconSpanish from '../../assets/icons/spanish.png';

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
                key: "es", 
                title: "Español",  
                image: IconSpanish
            },
            {
                key: "en", 
                title: "English", 
                image: IconEnglish
            }
        ]
      };
    }
  
    //Selects an option depending of the list item touched
    _clickEventListener(key) {
        switch(key){
            case "es":
                //this.props.navigation.navigate('Menu');
                break;
            case "en":
                break;
        }
    }
  
    render() {
      return (
        <ImageBackground style={styles.languageScreenBackground} source={BackgroundShells}>
          <Text style={styles.languageScreenTitleText}>IDIOMA</Text>
          <View style={styles.languageScreenMainContainer}>
            <FlatList style={styles.languageScreenList}
              contentContainerStyle={styles.languageScreenListContainer}
              data={this.state.data}
              horizontal={true}
              scrollEnabled={false}
              numColumns={1}
              keyExtractor= {(item) => {
                return item.key;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={[styles.languageScreenCard]} onPress={() => {this._clickEventListener(item.key)}}>
                    <View style={styles.languageScreenCardHeader}>
                      <Text style={styles.languageScreenListTitleText}>{item.title}</Text>
                    </View>
                    <Image style={styles.languageScreenCardImage} source={item.image}/>
                  </TouchableOpacity>
                )
              }}/>
          </View>
        </ImageBackground>
      );
    }
}