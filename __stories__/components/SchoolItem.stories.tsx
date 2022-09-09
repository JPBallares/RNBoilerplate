// stories/MySchoolItem.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import SchoolItem from '@/src/components/SchoolItem';

// TODO: add action for onPress
export default {
  title: 'components/SchoolItem',
  component: SchoolItem,
  argTypes: {onPress: {action: 'onPress'}},
} as ComponentMeta<typeof SchoolItem>;

const Template: ComponentStory<typeof SchoolItem> = args => (
  <SchoolItem {...args} />
);

export const Item: ComponentStory<typeof SchoolItem> = Template.bind({});

Item.args = {
  school: {
    school_id: 13,
    subdomain: 'Trojans',
    name: 'Downers Grove North HS',
    address: '4436 Main Street',
    city: 'Downers Grove',
    state: 'IL',
    zip: '60515',
    phone: '(630) 795-8417',
    fax: '(630) 795-8099',
    latitude: 41.80727,
    longitude: -88.01106,
    mascot: 'Trojans',
    motto: 'Trojan Pride ',
    url: 'http://il.8to18.com/trojans',
    color1: '#4F2170',
    color2: '#0f1000',
    facebook_url: 'https://www.facebook.com/DownersGroveNorth',
    twitter_url: 'https://twitter.com/dgnathletics',
    color_icon: '#4F2170',
    color_primary_text: '#000000',
    color_secondary_text: '#000000',
    color_slide_menu: '#0f1000',
    color_slide_menu_text: '#FFFFFF',
    color_theme: '#4F2170',
    ad_school: true,
    enrollment: null,
    pricing_tier: null,
    kind: 'High School',
    vnn: false,
  },
};
