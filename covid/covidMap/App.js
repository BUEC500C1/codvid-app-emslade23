import React, { Component } from 'react';
import {StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {Callout} from 'react-native-maps';




export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      USConfirmedCases: '',
      USCovidDeathsTotal: '',
      DateLastUpdate:'',

      UnitedKingdomConfirmedCases: '',
      UnitedKingdomCovidTotalDeaths: '',

      ChinaConfirmedCases: '',
      ChineCovidDeathsTotal: '',

      MexicoConfirmedCases: '',
      MexicoCovidTotalDeaths: '',

      AustraliaConfirmedCases: '',
      AustraliaCovidTotalDeaths: '',

      IndiaConfirmedCases: '',
      IndiaCovidTotalDeaths: '',

      CanadaConfirmedCases: '',
      CanadaCovidTotalDeaths: '',

      RussiaConfirmedCases: '',
      RussiaCovidTotalDeaths: '',

      BrazilConfirmedCases: '',
      BrazilCovidTotalDeaths: '',

      JapanConfirmedCases: '',
      JapanCovidTotalDeaths: '',

      GermanyConfirmedCases: '',
      GermanyCovidTotalDeaths: '',
      
      GlobalConfirmedCases: '',
      GlobalCovidTotalDeaths: '',
      GlobalCovidTotalRecovered: '',
    };
  } 

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then(responseJson => {
        console.log(responseJson['Global']['TotalConfirmed']);
        this.setState({
          GlobalConfirmedCases: responseJson['Global']['TotalConfirmed'],
          GlobalCovidTotalDeaths: responseJson['Global']['TotalDeaths'],
          GlobalCovidTotalRecovered: responseJson['Global']['TotalRecovered'],
        }),
        this.setState({
          USConfirmedCases: responseJson['Countries'][235]['TotalConfirmed'],
          USCovidDeathsTotal: responseJson['Countries'][235]['TotalDeaths'],
        }),
        this.setState({
          UnitedKingdomConfirmedCases: responseJson['Countries'][234]['TotalConfirmed'],
          UnitedKingdomCovidTotalDeaths: responseJson['Countries'][234]['TotalDeaths'],
        }),
        this.setState({
          ChinaConfirmedCases: responseJson['Countries'][45]['TotalConfirmed'],
          ChineCovidDeathsTotal: responseJson['Countries'][45]['TotalDeaths'],
        }),
        this.setState({
          MexicoConfirmedCases: responseJson['Countries'][142]['TotalConfirmed'],
          MexicoCovidTotalDeaths: responseJson['Countries'][142]['TotalDeaths'],
        }),
        this.setState({
          AustraliaConfirmedCases: responseJson['Countries'][13]['TotalConfirmed'],
          AustraliaCovidTotalDeaths: responseJson['Countries'][13]['TotalDeaths'],
        });
        this.setState({
          IndiaConfirmedCases: responseJson['Countries'][101]['TotalConfirmed'],
          IndiaCovidTotalDeaths: responseJson['Countries'][101]['TotalDeaths'],
        });
        this.setState({
          CanadaConfirmedCases: responseJson['Countries'][39]['TotalConfirmed'],
          CanadaCovidTotalDeaths: responseJson['Countries'][39]['TotalDeaths'],
        });
        this.setState({
          RussiaConfirmedCases: responseJson['Countries'][181]['TotalConfirmed'],
          RussiaCovidTotalDeaths: responseJson['Countries'][181]['TotalDeaths'],
        });
        this.setState({
          BrazilConfirmedCases: responseJson['Countries'][30]['TotalConfirmed'],
          BrazilCovidTotalDeaths: responseJson['Countries'][30]['TotalDeaths'],
        });
        this.setState({
          JapanConfirmedCases: responseJson['Countries'][110]['TotalConfirmed'],
          JapanCovidTotalDeaths: responseJson['Countries'][110]['TotalDeaths'],
        });
        this.setState({
          GermanyConfirmedCases: responseJson['Countries'][81]['TotalConfirmed'],
          GermanyCovidTotalDeaths: responseJson['Countries'][81]['TotalDeaths'],
        });

      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>
        <MapView style={styles.mapStyle}
          Region={{
            latitude: 50,
            longitude: 150,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 40,
            longitude: -80}}>
              <Callout>
              <Text style = {styles.title}>  Country: United States</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.USConfirmedCases}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.USCovidDeathsTotal}</Text>
              
              </Callout>
            </MapView.Marker>

        <MapView.Marker
          coordinate={{latitude: 55,
          longitude: -3}}>
            <Callout>
            <Text style = {styles.title}>  Country: UK</Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.UnitedKingdomConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.UnitedKingdomCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>
          

          <MapView.Marker
            coordinate={{latitude: 30,
            longitude: 115}}>
              <Callout>
              <Text style = {styles.title}>  Country: China</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.ChinaConfirmedCases}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.ChineCovidDeathsTotal}</Text>
              </Callout>
            </MapView.Marker>


          <MapView.Marker
            coordinate={{latitude: 19,
            longitude: -99}}>
              <Callout>
              <Text style = {styles.title}>  Country: Mexico</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.MexicoConfirmedCases}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.MexicoCovidTotalDeaths}</Text>
              </Callout>
            </MapView.Marker>

          <MapView.Marker
          coordinate={{latitude: -23,
          longitude: 133}}>
            <Callout>
            <Text style = {styles.title}>  Country: Australia</Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.AustraliaConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.AustraliaCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>
          <MapView.Marker
          coordinate={{latitude: 28.6139,
            longitude: 77.2090}}>
            <Callout>
            <Text style = {styles.title}>  Country: India </Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.IndiaConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.IndiaCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>

          <MapView.Marker
          coordinate={{latitude: 45.4215,
            longitude: -75.6972}}>
            <Callout>
            <Text style = {styles.title}>  Country: Canada</Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.CanadaConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.CanadaCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>

          <MapView.Marker
          coordinate={{latitude: 61.5240,
            longitude: 105.3188}}>
            <Callout>
            <Text style = {styles.title}>  Country: Russia</Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.RussiaConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.RussiaCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>

          <MapView.Marker
          coordinate={{ latitude: -15.8267,
            longitude: -47.9218}}>
            <Callout>
            <Text style = {styles.title}>  Country: Brazil</Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.BrazilConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.BrazilCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>

          <MapView.Marker
          coordinate={{ latitude: 35.6762,
            longitude: 139.6503}}>
            <Callout>
            <Text style = {styles.title}>  Country: Japan</Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.JapanConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.JapanCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>

          <MapView.Marker
          coordinate={{latitude: 51.1657,
            longitude: 10.4515}}>
            <Callout>
            <Text style = {styles.title}>  Country: Germany</Text>
            <Text style = {styles.text}>Total Confirmed Cases: {this.state.GermanyConfirmedCases}</Text>
            <Text style = {styles.text}>Total Death Cases: {this.state.GermanyCovidTotalDeaths}</Text>
            </Callout>
          </MapView.Marker>


         
      </MapView>
      <View style={styles.view}>
        <Text style={styles.title}>
          Total COVID-19 Cases in the World:
        </Text>
        <Text style={styles.globalstyle} > Total Confirmed: {this.state.GlobalConfirmedCases} </Text>
        <Text style={styles.globalstyle} > Total Deaths: {this.state.GlobalCovidTotalDeaths} </Text>
        <Text style={styles.globalstyle} > Total Recovered: {this.state.GlobalCovidTotalRecovered} </Text>
      </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  view: {
    position:'absolute', 
    backgroundColor: 'white', 
    height: 150,
    top: Dimensions.get('window').height-150, 
    width: Dimensions.get('window').width,
  },
  text:{
    color: 'blue',
    marginTop: 20,
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center', 
    marginTop: 20,
    color: 'blue'
  },
  globalstyle: {
    left: 100,
    top: 30,
    color: 'blue'
  }
});