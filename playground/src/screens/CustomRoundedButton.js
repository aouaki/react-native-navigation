const React = require('react');
const { Component } = require('react');
const {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Platform
} = require('react-native');
const { Navigation } = require('react-native-navigation');

class CustomRoundedButton extends Component {

  constructor(props) {
    super(props);
    this.simulateLongRunningTask();
    console.log('guyca', `CRB`);
    Navigation.events().bindComponent(this);
    this.state = {};
  }

  simulateLongRunningTask = () => {
    // tslint:disable-next-line
    for (let i = 0; i < Math.pow(2, 24); i++);
  }

  componentDidAppear() {
    console.log('RNN', 'CRB.componentDidAppear');
  }

  componentDidDisappear() {
    console.log('RNN', `CRB.componentDidDisappear`);
  }

  componentDidMount() {
    console.log('RNN', `CRB.componentDidMount`);
  }

  componentWillUnmount() {
    console.log('RNN', `CRB.componentWillUnmount`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => Alert.alert(this.props.title, 'Thanks for that :)')}>
            <Text style={styles.text}>{this.props.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = CustomRoundedButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center'
  }
});
