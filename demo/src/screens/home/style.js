import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    flex: 1,
    backgroundColor: 'skyblue',
    width: 160,
    height: 100,
    borderRadius: 10,
    marginLeft: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stateView: {
    marginHorizontal: 20,
  },
  increaseView: {
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  countText: {
      textAlign: 'center',
      fontSize: 20,
  },
  flatCardView: {
    backgroundColor: '#00dffc',
    width: 220,
    height: 100,
    borderRadius: 10,
    marginLeft: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imgView: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  movieCardView: {
    backgroundColor: '#00dffc',
    width: 220,
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieImage: {
    width: 220,
    height: 100,
    marginLeft: 20,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
