import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging7556Navigator from '../features/Messaging7556/navigator';
import EmailAuth7555Navigator from '../features/EmailAuth7555/navigator';
import CalendarView7554Navigator from '../features/CalendarView7554/navigator';
import BlankScreen47553Navigator from '../features/BlankScreen47553/navigator';
import BlankScreen57552Navigator from '../features/BlankScreen57552/navigator';
import BlankScreen67551Navigator from '../features/BlankScreen67551/navigator';
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
Messaging7556: { screen: Messaging7556Navigator },
EmailAuth7555: { screen: EmailAuth7555Navigator },
CalendarView7554: { screen: CalendarView7554Navigator },
BlankScreen47553: { screen: BlankScreen47553Navigator },
BlankScreen57552: { screen: BlankScreen57552Navigator },
BlankScreen67551: { screen: BlankScreen67551Navigator },
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
