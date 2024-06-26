import { Camera, CameraType, useCameraPermissions, CameraView } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { LastPhoto } from './Style';
import Spinner from '../Spinner/Spinner';


export default function CameraModal({
  navigation,
  visible,
  setShowCamera,
  setPhotoUpload,
  getMediaLibrary = false,
  ...rest
}) {
  // 
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [tipoCamera, setTipoCamera] = useState('front');
  const [lastPhoto, setLastPhoto] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  async function GetLatestPhoto() {
    const { assets } = await MediaLibrary.getAssetsAsync({ sortBy: [[MediaLibrary.SortBy.creationTime, false]], first: 1 })
    
    if (assets.length > 0) {
      setLastPhoto(assets[0].uri)
    }
  }


  useEffect(() => {
    setShowSpinner(true);

    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    })()

    if (getMediaLibrary) {
      GetLatestPhoto()
    }

    setShowSpinner(false);
  }, []);

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      setPhoto(photo.uri);

      setOpenModal(true);
    }
  }

  async function SelectImageGallery() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri)

      setOpenModal(true)
    }
  }

  function UploadPhoto() {
    setPhotoUpload(photo);

    setOpenModal(false);
    setShowCamera(false);
  }

  function ClearPhoto() {
    setPhoto(null)

    setOpenModal(false)
  }


  function toggleCameraType() {
    setTipoCamera(current => (current === 'front' ? 'back' : 'front'))
  }

  return (
    // modal
    <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
      <Spinner
        visible={showSpinner}
      />

      <View style={styles.container}>
        {/* camera */}
        <CameraView
          facing={tipoCamera}
          ref={cameraRef}
          style={styles.camera}
          ratio='16:9'
        >
          <View style={styles.viewFlip}>

          </View>
        </CameraView>

        <View style={styles.bottom}>
          {/* retornar */}
          <TouchableOpacity
            style={styles.btnReturn}
            onPress={() => setShowCamera(false)}>
            <MaterialCommunityIcons name="keyboard-return" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => SelectImageGallery()}>
            {
              lastPhoto != null
                ? (
                  <LastPhoto
                    source={{ uri: lastPhoto }}
                  />
                ) : (
                  null
                )
            }

          </TouchableOpacity>

          {/* tirar foto */}
          <TouchableOpacity
            style={styles.btnCapture}
            onPress={() => CapturePhoto()}
          >
            <FontAwesome name='camera' size={23} color={"#FFF"} />
          </TouchableOpacity>

          {/* trocar câmera */}
          <TouchableOpacity
            style={styles.btnSwitch}
            onPress={() => toggleCameraType()}
          >
            <MaterialIcons name="cameraswitch" size={24} color="#FFF" />
          </TouchableOpacity>

        </View>



        <Modal animationType='slide' transparent={false} visible={openModal}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20
          }}>
            <View style={{
              margin: 10,
              flexDirection: 'row'
            }}>
              {/* botões de controle */}
              <TouchableOpacity style={styles.btnClear} onPress={() => ClearPhoto()}>
                <FontAwesome name='trash' size={45} color={"#FF0000"} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnUpload} onPress={() => UploadPhoto()}>
                <FontAwesome name='upload' size={35} color={"#121212"} />
              </TouchableOpacity>
            </View>

            <Image
              style={{
                width: '100%',
                height: 500,
                borderRadius: 15,
              }}
              source={{ uri: photo }}
            />
          </View>
        </Modal>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottom: {
    flexDirection: 'row',

  },

  camera: {
    flex: 1,
    width: '100%',
    height: '80%',
  },

  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'center'
  },

  btnFlip: {
    padding: 20,
  },

  txtFlip: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20,
  },

  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
  },

  btnClear: {
    padding: 20,
    backgroundColor: 'center',

    justifyContent: 'center',
    alignItems: 'center',
  },

  btnUpload: {
    padding: 20,
    backgroundColor: 'transparent',

    justifyContent: 'center',
    alignItems: 'center',
  },

  btnReturn: {
    padding: 20,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignContent: 'center',
  },

  btnSwitch: {
    padding: 20,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignContent: 'center',
  }
});
