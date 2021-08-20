import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  return (
    <View>
      <TextInput
        placeholder="Type Here..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText('');
        }}>
        <Icon name="plus" size={30} color={'hsl(120, 100%, 100%)'} />
        <Text style={styles.text}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    height: 60,
    padding: 5,
  },
  btn: {
    borderRadius: 100 / 8,
    margin: 20,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'hsl(120, 100%, 30%)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 15,
    fontSize: 30,
  },
});
