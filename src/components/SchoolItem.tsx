import React from 'react';
import {ListItem, Avatar, Icon, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
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
      <ListItem.Title style={styles.title}>{school.name}</ListItem.Title>
      <View style={styles.subtitleContainer}>
        <Icon name="map-pin" type="feather" />
        <ListItem.Subtitle style={styles.subtitle}>
          <View>
            <Text>{school.address}</Text>
          </View>
          <View>
            <Text>
              {school.city}, {school.state} {school.zip}
            </Text>
          </View>
        </ListItem.Subtitle>
      </View>
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
  title: {
    marginBottom: 10,
  },
  subtitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  subtitle: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
  },
});

export default SchoolItem;
