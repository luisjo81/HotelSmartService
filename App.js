//React Navigation Components
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

//Screen Components
import ActivitiesScreen from './src/screens/activities';
import BookingScreen from './src/screens/booking';
import ContactScreen from './src/screens/contact';
import HomeScreen from './src/screens/home';
import InformationScreen from './src/screens/information';
import LanguageScreen from './src/screens/language';
import LoginScreen from './src/screens/login';
import RatingsScreen from './src/screens/ratings';
import SigninScreen from './src/screens/signing';
import SocialScreen from './src/screens/social';
import WeatherScreen from './src/screens/weather';

//Stack Navigator
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  //Login: { screen: LoginScreen },
  //Signin: { screen: SigninScreen },
});

const App = createAppContainer(MainNavigator);
export default App