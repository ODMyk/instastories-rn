import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width, scale} = useWindowDimensions();

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      gap: 6,
    },
    avatar: {
      width: 76,
      height: 76,
      borderRadius: 38,
    },
    nickname: {
      fontSize: 10,
    },
  });
};
