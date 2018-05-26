import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.1756822,
      longitude: 115.1175816,
      latitudeDelta: 0.22,
      longitudeDelta: 0.21,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.122846,
          longitude: 115.071893
        },
        title: 'Metro Sport Singaraja',
        subtitle: 'Kecamatan Buleleng, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:2,
        latlng: {
          latitude:-8.115096,
          longitude: 115.090532
        },
        title: 'Singaraja Futsal',
        subtitle: 'Jl. Udayana, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81113'
      },
      {
        key:3,
        latlng: {
          latitude:-8.099678,
          longitude: 115.101628
        },
        title: 'G2 Futsal',
        subtitle: 'Jl. Surapati No.140, Banyuning, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.086804,
          longitude: 115.148121
        },
        title: 'ARI FUTSAL',
        subtitle: 'Jl. Raya Desa, Giri Emas, Sawan, Kabupaten Buleleng, Bali 81171'
      },
      {
        key:5,
        latlng: {
          latitude:-8.141596,
          longitude: 115.179284
        },
        title: 'Gonk futsal',
        subtitle: 'Jl. Raya Bebetin, Bebetin, Sawan, Kabupaten Buleleng, Bali 81171'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Lapangan Futsal di Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Gusti Ayu Mariani </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#e84393',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#e84393',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
