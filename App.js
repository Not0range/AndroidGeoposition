import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    

    Location.requestForegroundPermissionsAsync()
    .then(p => {
      if(p.granted){
        Location.requestBackgroundPermissionsAsync()
        .then(perm => {
            if(perm.granted)
              Location.startLocationUpdatesAsync('getPosition', {accuracy: 6});
            else
              console.error("aaa!!");
        }, err => console.error(err));
      }
    })
    
    // Location.requestForegroundPermissionsAsync()
    // .then(perm => {
    //   if(perm.granted)
    //     return Location.watchPositionAsync({accuracy: 6}, 
    //         pos => {
    //           this.setState({
    //             latitude: pos.coords.latitude,
    //             longitude: pos.coords.longitude,
    //             error: null,
    //           });
    //           console.log(`${pos.coords.latitude} ${pos.coords.longitude}`);
    //       });
    //   else
    //     return Promise.reject("dsadas");
    // })
    // .then(pos => this.watchId = pos,
    //   err => this.setState({
    //     latitude: null,
    //     longitude: null,
    //     error: err,
    //   }));
  }

  componentWillUnmount() {
    //this.watchId.remove();
  }

  render() { 
    return (
      <View style={styles.container}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;