import AsyncStorage from '@react-native-async-storage/async-storage';

const _storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('shopping-list', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

const _getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('shopping-list');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(e);
  }
};

export {_storeData, _getData};
