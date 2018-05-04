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
  },
  {
    image: 'https://cdn.flickeringmyth.com/wp-content/uploads/2018/01/nicolas-cage-ghost-rider-transformation-208622-600x300.jpg',
    quote: 'Shoot him again... His soul\'s still dancing.'
  },
  {
    image: 'http://1.bp.blogspot.com/-4x8LvBUopUg/UP_3v-hRgcI/AAAAAAAAC90/rerm6FhEJ4I/s1600/Anthony+Lamb+-+Nick+Cage+as+Salvador+Dali.jpg',
    quote: 'What are these fuckin\' iguanas doing on my coffee table?'
  },
  {
    image: 'http://flowjournal.org/wp-content/uploads/2011/05/Nic-Cage-Bad-Lieutenant.png',
    quote: 'Everything I take is prescription - except for the heroin.'
  },
  {
    image: 'https://www.thefamouspeople.com/profiles/images/nicolas-cage-2.jpg',
    quote: 'I love pressure. I eat it for breakfast.'
  },
  {
    image: 'https://www.space.ca/wp-content/uploads/2015/12/Not-the-Bees.jpg',
    quote: 'OH, NO! NOT THE BEES! NOT THE BEES! AAAAAHHHHH! OH, THEY\'RE IN MY EYES! MY EYES! AAAAHHHHH! AAAAAGGHHH!'
  }
]

export default class App extends Component {
  state = {
    index: 6
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
        <Image style={styles.image} resizeMode="contain" source={{ uri: image }} />
        <Text style={styles.quote} accessibilityLabel="quote">{formattedQuote}</Text>
        <View style={styles.button}>
          <Button onPress={this.onNext} title="More wisdom" accessibilityLabel="button" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    height: 400,
    width: 400
  },
  quote: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    margin: 20
  }
});
