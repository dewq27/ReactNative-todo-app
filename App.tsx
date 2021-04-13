import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/store';
import ListView from './src/views/List';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={styles.loader}>
            <ActivityIndicator />
          </View>
        }
        persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <ListView />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
