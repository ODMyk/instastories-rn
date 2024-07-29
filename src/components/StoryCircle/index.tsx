import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useStyles} from './styles';
import {Story} from 'src/constants/Story';

export interface StoryCircleProps {
  story: Story;
  handle: () => void;
}

export const StoryCircle = ({story, handle}: StoryCircleProps) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handle}>
        <Image style={styles.avatar} src={story.authorPic} />
      </TouchableOpacity>
      <Text style={styles.nickname}>{story.authorName}</Text>
    </View>
  );
};
