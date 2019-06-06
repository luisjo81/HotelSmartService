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
import ImageRestaurant1 from '../../assets/photos/restaurant1.jpg';
import ImageRestaurant2 from '../../assets/photos/restaurant2.jpg';
import ImageRestaurant3 from '../../assets/photos/restaurant3.jpg';
import ImageRestaurant4 from '../../assets/photos/restaurant4.jpg';
import ImageFood1 from '../../assets/photos/food1.jpg';
import ImageFood2 from '../../assets/photos/food2.jpg';
import ImageFood3 from '../../assets/photos/food3.jpg';
import ImageFood4 from '../../assets/photos/food4.jpg';

//Backgrounds
import BackgroundShells from '../../assets/backgrounds/shells.jpg';

export default class Restaurant extends React.Component {
    static navigationOptions = {
        title: 'MAR & SAL',
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
                key: "restaurant1", 
                image: ImageRestaurant1
              },
              {
                key: "restaurant2", 
                image: ImageRestaurant2
              },
              {
                key: "restaurant3", 
                image: ImageRestaurant3
              },
              {
                key: "restaurant4", 
                image: ImageRestaurant4
              },
              {
                key: "food1", 
                image: ImageFood1
              },
              {
                key: "food2", 
                image: ImageFood2
              },
              {
                key: "food3", 
                image: ImageFood3
              },
              {
                key: "food4", 
                image: ImageFood4
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
                        Atrévete a probar en nuestro restaurante MAR & SAL innovadores platos de cocina 
                        internacional, acompañados de una excelente variedad de vinos en un ambiente 
                        tranquilo y acogedor. O bien disfruta de un almuerzo ligero en la piscina quizás 
                        seguido de algún cóctel en nuestra terraza con vistas al jardín.
                    </Text>
                </View>
            </ImageBackground>
        );
      }
  }
   