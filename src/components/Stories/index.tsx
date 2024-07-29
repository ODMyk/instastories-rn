import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {Story} from 'src/constants/Story';
import {getStories} from 'src/data/db';
import {StoryCircle} from '@components/StoryCircle';
import {StoryViewer} from '@components/StoryViewer';
import {STORY_OPEN_DURATION} from 'src/constants';
import {useSharedValue, withTiming} from 'react-native-reanimated';

export const Stories = () => {
  const styles = useStyles();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState<Story | undefined>();
  const origin = useSharedValue<{x: number; y: number}>({x: 0, y: 0});
  useEffect(() => {
    (async () => {
      const storiesData = await getStories();
      setTimeout(() => {
        setStories(storiesData);
        setLoading(false);
      }, 250);
    })();
  }, []);

  const createStoryOpener = (index: number) => {
    return () => setStory(stories[index]);
  };

  const storyCloser = () =>
    setTimeout(() => setStory(undefined), STORY_OPEN_DURATION);

  return (
    <SafeAreaView>
      <View style={styles.page}>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator style={{alignSelf: 'center', flex: 1}} />
          ) : (
            stories.map((s, i) => (
              <StoryCircle key={i} story={s} handle={createStoryOpener(i)} />
            ))
          )}
        </View>
        <StoryViewer
          story={story}
          close={storyCloser}
          offset={story ? stories.indexOf(story) * 82 + 54 : 0}
        />
      </View>
    </SafeAreaView>
  );
};
