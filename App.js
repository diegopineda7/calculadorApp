import React from 'react';
import { StyleSheet, Text, TextInput, Alert, Keyboard, View, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const currencies = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBLE: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      resultValue: '0.0'
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === '') {
      Alert.alert('Enter some value to convert to ' + currency);
    } else {
      let result = parseFloat(this.state.inputValue) * currencies[currency];
      this.setState({resultValue: result.toFixed(2) + ' ' + currency})
    }
  }

  render() { 
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenView}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputValue}
                selectionColor="#fff"
                keyboardType='numeric'
                placeholder='Enter Value'
                placeholderTextColor="rgba(255, 255, 255, .7)"
                value={this.state.inputValue}
                onChangeText={inputValue => this.setState({inputValue})}
              />
            </View>
            <View style={styles.converterContainer}>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('DOLLAR')}
              >
                <Text style={styles.converterButtonText}>US $</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('EURO')}
              >
                <Text style={styles.converterButtonText}>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('POUND')}
              >
                <Text style={styles.converterButtonText}>POUND</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('RUBLE')}
              >
                <Text style={styles.converterButtonText}>RUBLE</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('AUSDOLLAR')}
              >
                <Text style={styles.converterButtonText}>AUS $</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('CANDOLLAR')}
              >
                <Text style={styles.converterButtonText}>CAN $</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('YEN')}
              >
                <Text style={styles.converterButtonText}>YEN</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('DINAR')}
              >
                <Text style={styles.converterButtonText}>DINAR</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.converterButton}
                onPress={() => this.buttonPressed('BITCOIN')}
              >
                <Text style={styles.converterButtonText}>BITCOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFBB'
  },
  screenView: {
    flex: 1,
    marginTop: 20
  },
  resultContainer: {
    height: 80,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#E68B02',
    alignItems: 'center'
  },
  resultValue: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  },
  inputContainer: {
    height: 80,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E68B02'
  },
  inputValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  converterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E68B02',
    height: 100,
    width: '32.2%',
    marginHorizontal: 2,
    marginVertical: 3,
    borderRadius: 30

  },
  converterButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  }
});
