import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {Story} from 'src/constants/Story';
import {useStyles} from './styles';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {STORY_OPEN_DURATION} from 'src/constants';

export interface StoryViewerProps {
  story?: Story;
  offset: number;
  close: () => void;
}

export const StoryViewer = ({story, close, offset}: StoryViewerProps) => {
  const styles = useStyles();
  const scale = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));
  useEffect(() => {
    if (!story) {
      return;
    }
    scale.value = 0;
    scale.value = withTiming(1, {duration: STORY_OPEN_DURATION});
  }, [story]);

  const hide = () => {
    close();
    scale.value = withTiming(0, {duration: STORY_OPEN_DURATION});
  };
  return (
    <>
      {story && (
        <Animated.View
          style={[
            styles.container,
            style,
            {transformOrigin: `${offset}px 40px`},
          ]}>
          <ImageBackground src={story.content} style={styles.container}>
            <View style={styles.topBar}>
              <View style={styles.avatarContainer}>
                <Image style={styles.avatar} src={story.authorPic} />
                <Text style={styles.nickname}>{story.authorName}</Text>
              </View>
              <TouchableOpacity onPress={hide} style={styles.closeButton}>
                <Text style={styles.closeText}>X</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Animated.View>
      )}
    </>
  );
};
