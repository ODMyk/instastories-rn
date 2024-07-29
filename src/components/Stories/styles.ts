import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    page: {
      backgroundColor: '#2C3335',
      height: '100%',
    },
    container: {
      paddingHorizontal: 16,
      marginTop: 4,
      borderBottomWidth: 0.5,
      borderBottomColor: '#616C6F',
      height: '12%',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 6,
    },
  });
};
