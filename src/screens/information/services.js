import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    FlatList
} from 'react-native';
import colors from '../../constants/colors';
import styles from '../../constants/styles';

//Images
import ImageService1 from '../../assets/photos/spa.jpg';
import ImageService2 from '../../assets/photos/pool.jpg';
import ImageService3 from '../../assets/photos/cleaning.jpg';

//Backgrounds
import BackgroundShells from '../../assets/backgrounds/shells.jpg';

export default class Services extends React.Component {
    static navigationOptions = {
        title: 'SERVICIOS',
        headerStyle: {
            backgroundColor: colors.black
          },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white
        },
      };

      constructor(props) {
        super(props);
        this.state = {
          data: [
              {
                key: "service1", 
                image: ImageService1
              },
              {
                key: "service2", 
                image: ImageService2
              },
              {
                key: "service3", 
                image: ImageService3
              }
          ]
        };
      }
    
      render() {
        return (
            <ImageBackground style={styles.genericInfoScreenBackground} source={BackgroundShells}>
                 <View style={styles.genericInfoScreenMainContainer}>
                    <FlatList style={styles.genericInfoScreenList}
                    contentContainerStyle={styles.genericInfoScreenListContainer}
                    data={this.state.data}
                    horizontal={true}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({item}) => {
                        return (
                        <View style={[styles.genericInfoScreenCard]}>
                            <Image style={styles.genericInfoScreenCardImage} source={item.image}/>
                        </View>
                        )
                    }}/>
                </View>
                <View style={styles.genericInfoScreenOptionContainer}>
                    <Text style={styles.genericInfoScreenText}>
                        En UMAMI le ofrecemos una variedad de servicios que incluye:
                        - Spa
                        - Piscina
                        - Limpieza de habitación
                        - Aire acondicionado
                        - TV con cable
                        - WiFi
                    </Text>
                </View>
            </ImageBackground>
        );
      }
  }
   