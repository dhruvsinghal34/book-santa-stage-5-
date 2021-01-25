import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/bookRequestingScreen'

const TabNavigator = createBottomTabNavigator ({ 
    BookDonate:{screen:BookDonateScreen},
    BookRequest:{screen:BookRequestScreen}
})
export default TabNavigator;