import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';


import ListScreen from './src/ListScreen';
import HomeScreen from './src/HomeScreen';
import ComponentsScreen from './src/ComponentsScreen';
import ImageScreen from './src/ImageScreen';
import CounterScreen from './src/CounterScreen';
import ColorScreen from './src/ColorScreen';
import SquareColor from './src/SquareColor';
import HandledSquareColor from './src/HandledSquareColor';
import HandledCounterScreen from './src/HandledCounterScreen';
import TextScreen from './src/TextScreen';
import BoxScreen from './src/BoxScreen';

const navigator = createStackNavigator(
{
  Home: HomeScreen,
  Components: ComponentsScreen,
  List: ListScreen,
  Image: ImageScreen,
  Counter : CounterScreen,
  HandledCounter: HandledCounterScreen,
  Color: ColorScreen,
  Square: SquareColor,
  HandledSquare : HandledSquareColor,
  Text: TextScreen,
  Box : BoxScreen,
},
{
  initialRouteName : 'Home',
  defaultNavigatonOptions:{
    title:'App'
  }
}
);

export default createAppContainer(navigator);


