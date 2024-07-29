import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: width,
      height: height,
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 50,
      width: '100%',
      padding: 5,
    },
    avatarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    nickname: {
      fontSize: 12,
    },
    closeButton: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeText: {
      color: '#fff',
      fontSize: 15,
    },
  });
};
