import {createDrawerNavigator} from 'react-navigation-Drawer'
import CustomSideBarMenu from './customSideBarMenu'
import SettingScreen from '../screens/SettingScreen'
const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:TabNavigator
    },
  Setting:{
      screen:SettingScreen
  }
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:'Home'}
)