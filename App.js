import React from 'react';

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

//Components
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import Dashboard from './src/containers/dashboard';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000',
    accent: '#bdc3c7',
  },
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
              <Dashboard />
            </View>
          </SafeAreaView>
        </PaperProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

