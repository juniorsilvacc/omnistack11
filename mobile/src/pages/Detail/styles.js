import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incidentList:{
    marginTop: 32,
  },
  incident:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },
  incidentPropertyValue:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  ongTitleText:{
    marginLeft: 100,
  },
  incidentProperty:{
    fontSize: 14,
    color: "#41414D",
    fontWeight: 'bold',
  },
  incidentValue:{
    marginTop: 4,
    fontSize: 15,
    marginBottom: 20,
    color: "#737380",
  },
  contactTitle:{
    fontSize: 20,
    color: '#13131A',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  contactText:{
    marginTop: 18,
    fontSize: 15,
    color: "#737380",
  },
  actions:{
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action:{
    backgroundColor: "#E02041",
    borderRadius: 8,
    height: 48,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText:{
    color: "#FFF",
    fontSize: 15,
    fontWeight: 'bold',
  }
});