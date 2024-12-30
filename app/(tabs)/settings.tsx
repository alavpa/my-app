import { getLimit, saveLimit } from '@/src/services/StorageUtils';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [text, setText] = useState("");

  useEffect(() => {  
    getLimit().then((data) => {
      setText(data);
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Limit:</Text>
      <TextInput
        style={styles.input} 
        value={text}
        onChangeText={setText}
        onBlur={() => saveLimit(text)}
        placeholder='Enter a limit'
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginTop: 8,
  },
});
