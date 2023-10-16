import React, { Component } from 'react';
import { View, ProgressViewIOS, Platform, StyleSheet } from 'react-native';

class IOSProgressViewApp extends Component {
  
  render() {
    // If this isn't an iOS device, we won't show anything
    if (Platform.OS !== 'ios') return null;

    return (
      <View style={styles.container}>
        {/* Display a simple progress bar with 50% completion */}
        <ProgressViewIOS progress={0.5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default IOSProgressViewApp;
