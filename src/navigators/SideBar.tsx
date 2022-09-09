import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Actions as NavigationActions} from 'react-native-router-flux';

import {DrawerItem} from './NavItems';

const SideBar: React.ComponentType<any> = () => (
  <SafeAreaView>
    <DrawerItem title="Home" icon="home" onPress={NavigationActions.home} />
    <DrawerItem
      title="Schools"
      icon="school"
      onPress={NavigationActions.schools}
    />
  </SafeAreaView>
);

export default SideBar;
