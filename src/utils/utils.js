import { AsyncStorage } from 'react-native';

export async function save(data, key) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log(e)
  }
}

export async function load(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e)
  }
}