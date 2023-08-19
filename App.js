import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'
import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'

export default function App() {
  return (
    <View style={styles.container}>
       <RandomUsersScreen/>
       {/* <RandomUsersScreen/> */}
       {/* <FlatList_Example1/> */}
       <FlatList_HeaderFooter/>

    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});