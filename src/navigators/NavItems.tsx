import React from 'react';
import {Icon, ListItem} from '@rneui/themed';
import {TouchableOpacity, View} from 'react-native';
import {Actions as NavigationActions} from 'react-native-router-flux';
import styles from './styles';

export const BackButton = () => (
  <TouchableOpacity onPress={() => NavigationActions.pop()}>
    <View style={styles.headerIconContainer}>
      <Icon name="arrow-left" type="feather" style={styles.navIcon} />
    </View>
  </TouchableOpacity>
);

export type DrawerItemProps = {
  title: string;
  icon: string;
  onPress?: () => void;
};

export const DrawerItem = ({title, icon, onPress}: DrawerItemProps) => (
  <ListItem Component={TouchableOpacity} onPress={onPress}>
    <Icon name={icon} style={styles.navIcon} />
    <ListItem.Content>
      <ListItem.Title>{title}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
);
