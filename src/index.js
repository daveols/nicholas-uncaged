import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';

export default class E2ETest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: null,
    };
  }

  handleButtonClick(buttonName) {
    this.setState({ buttonName });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          {this.state.buttonName === '1' &&
            <Text accessibilityLabel="text1" style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
          }
          {this.state.buttonName === '2' &&
            <Text accessibilityLabel="text2" style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
          }
          <Button accessibilityLabel="button1" title="1" style={styles.button} onPress={() => this.handleButtonClick('1')} />
          <Button accessibilityLabel="button2" title="2" style={styles.button} onPress={() => this.handleButtonClick('2')} />
          <View style={styles.space}>
            <Text accessibilityLabel="text3">
              Scroll Text
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 200,
    height: 200,
  },
  space: {
    marginTop: 1000
  },
});
