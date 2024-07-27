import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useStyles} from './styles';

export const Stories = () => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Stories</Text>
      </View>
    </SafeAreaView>
  );
};
