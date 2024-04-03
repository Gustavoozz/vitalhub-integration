import { StyleSheet, View } from "react-native"
import { CityContainer, Container } from "../../components/Container/Style"
import { InputCity, InputUser } from "../../components/Input/Style"

import { SubTextQuick } from "../../components/Text/Text"
import { LabelUser, Title } from "../../components/Title/Style"
import { CancelText } from "../../components/Link/Style"

import { ActivityIndicator, Text } from 'react-native';
import
MapView,
{
  Marker,
  PROVIDER_GOOGLE
} from "react-native-maps"
import {
  requestForegroundPermissionsAsync, // Solicita a permissão de localização.
  getCurrentPositionAsync, // Captura a localização atual.
  watchPositionAsync, // Captura em tempos a localização.
  LocationAccuracy // Precisão de captura.
} from 'expo-location'
import MapViewDirections from 'react-native-maps-directions'
import { mapskey } from '../../utils/mapsKey';
import { useEffect, useState, useRef } from 'react';
import api from "../../services/Service"

export const Localization = ({
  navigation,
  route
}) => {
  const [clinica, setClinica] = useState();

  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.7141,
    longitude: -46.4137,
  })

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()

      await setInitialPosition(currentPosition)
      console.log(initialPosition)
    }
  }

  async function RecarregarVisualizacaoMapa() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        },
      );

    }
  }

  const BuscarClinica = async () => {
    await api.get(`/Clinica/BuscarPorId?id=${route.params.clinicaId}`)
      .then( response => {
        setClinica(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    CapturarLocalizacao();

    // Capturar localização em tempo real:
    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 1000,
      distanceInterval: 1
    }, async (response) => {
      await setInitialPosition(response)

      mapReference.current?.animateCamera({
        pitch: 60, // Angulação.
        center: response.coords
      })
    })

    console.log(route)
  }, [route.params])

  useEffect(() => {
    RecarregarVisualizacaoMapa();
  }, [initialPosition])
  return (
    <Container>
      {
        initialPosition != null
          ? (
            <MapView
              ref={mapReference}
              initialRegion={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              }}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
            >

              <Marker
                coordinate={{
                  latitude: initialPosition.coords.latitude,
                  longitude: initialPosition.coords.longitude,
                }}
                title="Local"
                description="Descrição do local."
              />

              <Marker
                coordinate={{
                  latitude: -23.7141,
                  longitude: -46.4137,
                }}
                title="Local"
                description="Descrição do local."
              />

              <MapViewDirections
                origin={initialPosition.coords}
                destination={{
                  latitude: -23.7141,
                  longitude: -46.4137,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005
                }}
                apikey={mapskey}
                strokeWidth={5}
                strokeColor='red'
              />
            </MapView>
          ) : (
            <>
              <Text>Locaização não encontrada!</Text>
              <ActivityIndicator />
            </>
          )
      }
      <Title style={{ marginTop: 30, marginBottom: 10 }}>Clínica Natureh</Title>
      <SubTextQuick>São Paulo, SP</SubTextQuick>

      <LabelUser>Endereço</LabelUser>
      <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
        placeholder="Rua Vicenso Silva, 987"
        placeholderTextColor="#33303E" />

      <CityContainer>
        <View>
          <LabelUser>Número</LabelUser>
          <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="578"
            placeholderTextColor="#33303E" />
        </View>

        <View>
          <LabelUser>Bairro</LabelUser>
          <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Moema-SP"
            placeholderTextColor="#33303E" />
        </View>

      </CityContainer>

      <CancelText onPress={() => navigation.replace("PacienteConsultas")} style={{ marginBottom: 40 }}>Voltar</CancelText>
    </Container>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: 60
  }
});
