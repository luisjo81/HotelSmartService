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
import ImageLocation1 from '../../assets/photos/puertoviejo1.jpg';
import ImageLocation2 from '../../assets/photos/puertoviejo2.jpg';
import ImageLocation3 from '../../assets/photos/puertoviejo3.jpg';
import ImageLocation4 from '../../assets/photos/puertoviejo4.jpg';
import ImageLocation5 from '../../assets/photos/puertoviejo5.jpg';
import ImageLocation6 from '../../assets/photos/puertoviejo6.jpg';
import ImageLocation7 from '../../assets/photos/puertoviejo7.jpg';

//Backgrounds
import BackgroundShells from '../../assets/backgrounds/shells.jpg';


export default class Location extends React.Component {
    static navigationOptions = {
        title: 'PUERTO VIEJO',
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
                key: "location1", 
                image: ImageLocation1
              },
              {
                key: "location2", 
                image: ImageLocation2
              },
              {
                key: "location3", 
                image: ImageLocation3
              },
              {
                key: "location4", 
                image: ImageLocation4
              },
              {
                key: "location5", 
                image: ImageLocation5
              },
              {
                key: "location6", 
                image: ImageLocation6
              },
              {
                key: "location7", 
                image: ImageLocation7
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
                        Puerto Viejo se ubica al sur en la costa caribeña de Costa Rica. Es un lugar perfecto 
                        para amantes de la playa, surfers y para todo aquel que busque pasarla bien. Podrá 
                        encontrar grandes posibilidades para realizar actividades turísticas en parques naturales, 
                        en el mar y siempre rodeados de una naturaleza espectacular. En Puerto Viejo, podrá 
                        disfrutar del mejor ambiente Jamaicano de Costa Rica, donde el Reggae nunca descansa.
                    </Text>
                </View>
            </ImageBackground>
        );
      }
  }
   