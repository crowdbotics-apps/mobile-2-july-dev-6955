import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth17570Navigator from '../features/EmailAuth17570/navigator';
import EmailAuth27569Navigator from '../features/EmailAuth27569/navigator';
import EmailAuth27566Navigator from '../features/EmailAuth27566/navigator';
import EmailAuth37565Navigator from '../features/EmailAuth37565/navigator';
import EmailAuth17560Navigator from '../features/EmailAuth17560/navigator';
import EmailAuth37557Navigator from '../features/EmailAuth37557/navigator';
import EmailAuth7555Navigator from '../features/EmailAuth7555/navigator';
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
EmailAuth17570: { screen: EmailAuth17570Navigator },
EmailAuth27569: { screen: EmailAuth27569Navigator },
EmailAuth27566: { screen: EmailAuth27566Navigator },
EmailAuth37565: { screen: EmailAuth37565Navigator },
EmailAuth17560: { screen: EmailAuth17560Navigator },
EmailAuth37557: { screen: EmailAuth37557Navigator },
EmailAuth7555: { screen: EmailAuth7555Navigator },
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
