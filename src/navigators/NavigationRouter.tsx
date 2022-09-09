import React from 'react';
import {Scene, Router, Drawer} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';

import Home from '@/src/screens/Home';
import Login from '@/src/screens/Login';
import Schools from '@/src/screens/Schools';

import {BackButton} from './NavItems';
import styles from './styles';
import SideBar from './SideBar';

const NavigationRouter = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Drawer
          key="drawer"
          drawerIcon={<Icon name="menu" style={styles.navIcon} />}
          contentComponent={SideBar}>
          <Scene key="home" title="Home" component={Home} initial />
          <Scene key="schools" title="Schools" component={Schools} />
        </Drawer>
        <Scene
          key="login"
          title="Login"
          component={Login}
          renderLeftButton={BackButton}
        />
      </Scene>
    </Router>
  );
};

export default NavigationRouter;
