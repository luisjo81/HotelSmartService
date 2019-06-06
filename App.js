//React Navigation Components
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

//Screen Components
import ContactScreen from './src/screens/contact';
import HomeScreen from './src/screens/home';
import InformationScreen from './src/screens/information';
import LanguageScreen from './src/screens/language';
import LocationScreen from './src/screens/information/location';
import LoginScreen from './src/screens/login';
import RestaurantScreen from './src/screens/information/restaurant';
import ServicesScreen from './src/screens/information/services';
import SigninScreen from './src/screens/signin';
import SocialMediaScreen from './src/screens/social';

//Stack Navigator
const MainNavigator = createStackNavigator({
  //Home: { screen: HomeScreen },
  Information: { screen: InformationScreen},
  //Contact: { screen: ContactScreen },
  //Languages: { screen: LanguageScreen }
  Location: { screen: LocationScreen},
  //Login: { screen: LoginScreen },
  Restaurant: { screen: RestaurantScreen},
  Services: { screen: ServicesScreen},
  //Signin: { screen: SigninScreen },
  //SocialMedia: { screen: SocialMediaScreen },
});

const App = createAppContainer(MainNavigator);
export default App