import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging37550Navigator from '../features/Messaging37550/navigator';
import UserProfile47548Navigator from '../features/UserProfile47548/navigator';
import UserProfile57545Navigator from '../features/UserProfile57545/navigator';
import BlankScreen67544Navigator from '../features/BlankScreen67544/navigator';
import BlankScreen47541Navigator from '../features/BlankScreen47541/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging37550: { screen: Messaging37550Navigator },
UserProfile47548: { screen: UserProfile47548Navigator },
UserProfile57545: { screen: UserProfile57545Navigator },
BlankScreen67544: { screen: BlankScreen67544Navigator },
BlankScreen47541: { screen: BlankScreen47541Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
