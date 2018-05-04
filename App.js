import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

const Cages = [
  {
    image: 'https://39m9vk1z5i3x15rspj43y7k8-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Nicolas-Cage-1300x813.jpg',
    quote: 'Did I ever tell ya that this here jacket represents a symbol of my individuality, and my belief in personal freedom?'
  },
  {
    image: 'https://i.kinja-img.com/gawker-media/image/upload/s--y0OM6BOQ--/c_scale,f_auto,fl_progressive,q_80,w_800/iwpzjy3ggdpapoagr8av.jpg',
    quote: 'Tool up, honey bunny. It\'s time to get bad guys.'
  },
  {
    image: 'https://i.pinimg.com/originals/af/a9/3e/afa93eed58d0e4d014b9e9ef5a11a0fe.png',
    quote: 'I love pressure. I eat it for breakfast.'
  }
]

export default class App extends Component {
  state = {
    index: 0
  }

  onNext = () => {
    let randomIndex
    while (Cages.length !== 0) {
      randomIndex = Math.floor(Math.random() * Cages.length)
      if (randomIndex !== this.state.index) {
        break
      }
    }
    this.setState({ index: randomIndex })
  }

  render() {
    const cage = Cages[this.state.index]
    const image = cage.image
    const quote = cage.quote
    const formattedQuote = `\"${quote}\" - Nicholas Cage`

    return (
      <View style={styles.container} accessibilityLabel="testview">
        <Image style={{ height: 400, width: 400 }} source={{ uri: image }} />
        <Text style={styles.quote} accessibilityLabel="quote">{formattedQuote}</Text>
        <Button onPress={this.onNext} title="More wisdom" accessibilityLabel="button" />
      </View>
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
  quote: {
    padding: 20,
    fontSize: 16,
    textAlign: 'center'
  }
});
