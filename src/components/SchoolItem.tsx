import React from 'react';
import {ListItem, Avatar} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {School} from '../types/School';
import {generateAvatar} from '../utils/avatar';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type SchoolItemProps = {
  school: School;
  onPress?: () => void;
};

const SchoolItem = ({school, onPress}: SchoolItemProps) => (
  <ListItem
    Component={TouchableOpacity}
    onPress={onPress}
    style={styles.itemContainer}>
    <Avatar
      source={{
        uri: generateAvatar(school.name, '#fff', school.color_icon),
      }}
      size="medium"
      rounded
    />
    <ListItem.Content style={styles.itemContent}>
      <ListItem.Title>{school.name}</ListItem.Title>
      <ListItem.Title>{school.address}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
);

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
  itemContent: {
    padding: 10,
  },
});
export default SchoolItem;
