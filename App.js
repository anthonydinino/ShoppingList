import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';
import {_storeData, _getData} from './_localstorage';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedData = await _getData();
    setItems(fetchedData);
  };

  const deleteItem = id => {
    let newItems = items.filter(item => {
      return item.id !== id;
    });
    setItems(newItems);
    _storeData(newItems);
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      let newItems = [{id: uuid.v4(), text}, ...items];
      setItems(newItems);
      _storeData(newItems);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Mum's Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 50,
  },
});

export default App;
