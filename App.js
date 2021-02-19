import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Result from './Result.js'
import Search from './Search.js'
import Book from './Book.js'
import Confirm from './Confirm.js'



  const appNavigator = createStackNavigator(
    {
      Home: Search,
      FlightResult: Result,
      UserDetails: Book,
      ConformationPage: Confirm,
    },
    
  );

export default createAppContainer(appNavigator);


