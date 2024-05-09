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
import { UserDecodeToken } from "../../utils/Auth"

export const Localization = ({
  navigation,
  route
}) => {
  // CONSTS
  const [clinica, setClinica] = useState(null);
  const [tipoUsuario, setTipoUsuario] = useState("");
  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.7141,
    longitude: -46.4137,
  })


  // FUNCTIONS
  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()

      await setInitialPosition(currentPosition)
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

  const ProfileLoad = async () => {
    const token = await UserDecodeToken();

    if (token) {
      setTipoUsuario(token.role);

      BuscarClinicaPorUsuario(token);
    }
  }

  const BuscarClinicaPorUsuario = async (token) => {
    if (token.role == "Paciente") {
      await api.get(`/Clinica/BuscarPorId?id=${route.params.clinicaId}`)
        .then(response => {
          setClinica(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      await api.get(`/Medicos/BuscarPorId?id=${token.user}`)
        .then(response => {
          const medicoClinica = response.data.medicosClinicas[0].clinicaId;

          BuscarClinica(medicoClinica);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  const BuscarClinica = async (id) => {
    await api.get(`/Clinica/BuscarPorId?id=${id}`)
      .then(response => {
        setClinica(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }



  // EFFECTS
  useEffect(() => {
    ProfileLoad();
  }, []);

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
        pitch: 3, // Angulação.
        center: response.coords
      })
    })
  }, [route.params])

  useEffect(() => {
    RecarregarVisualizacaoMapa();
  }, [initialPosition])


  if (clinica != null) {
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
                    latitude: clinica.endereco.latitude,
                    longitude: clinica.endereco.longitude,
                  }}
                  title="Local"
                  description="Descrição do local."
                />

                <MapViewDirections
                  origin={initialPosition.coords}
                  destination={{
                    latitude: clinica.endereco.latitude,
                    longitude: clinica.endereco.longitude,
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
        <Title style={{ marginTop: 30, marginBottom: 10 }}>{clinica.nomeFantasia}</Title>

        <LabelUser>Endereço</LabelUser>
        <InputUser
          placeholder={clinica.endereco.logradouro}
          placeholderTextColor="#33303E" />

        <CityContainer style={tipoUsuario != "Paciente" ? {
          marginBottom: 30
        } : null}>
          <View>
            <LabelUser>Número</LabelUser>
            <InputCity
              placeholder={clinica.endereco.numero.toString()}
              placeholderTextColor="#33303E" />
          </View>

          <View>
            <LabelUser>Cidade</LabelUser>
            <InputCity
              placeholder={clinica.endereco.cidade}
              placeholderTextColor="#33303E" />
          </View>
        </CityContainer>

        {
          tipoUsuario == "Paciente" ?
            <CancelText
              onPress={() => navigation.replace("Main")}
              style={{ marginBottom: 40 }}
            >Voltar</CancelText>
            :
            null
        }

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: 60
  }
});
