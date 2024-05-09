import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';	

// Importar os recursos do Expo Notification: 
import * as Notifications from "expo-notifications"


// Solicitação de permissão ao iniciar o App:
Notifications.requestPermissionsAsync();

// Define como as notificações devem ser tratadas quando recebidas:
Notifications.setNotificationHandler({
  handleNotification: async () => ({

    // Mostrar o alerta quando a notificação for recebida:
    shouldShowAlert: true,

    // Reproduz som ao receber a notificação:
    shouldPlaySound: false,

    // Número de notificações no ícone do App: 
    shouldSetBadge: false,
  })
});

export default function App() {

  // Função que vai executar a notificação:
  const handleCallNotifications = async () => {
    async function playSound() {
      const soundObject = new Audio.Sound();
      try {
         await soundObject.loadAsync(require('./assets/paysandu.mp3'));
         await soundObject.playAsync();
      } catch (error) {
         console.log('Error playing sound:', error);
      }
     }
    
    // Obtém o status da permissão:
    const {status} = await Notifications.getPermissionsAsync();

    // Verifica se o usuário concedeu permissão:
    if (status !== "granted") {
      alert("Você não deixou as notificação ativas!")
      return;
    }

     await playSound();

    // Agenda uma notificação:
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem-vindo ao SENAI!",
        body: "Notificação recebida.",
      },
      
      trigger: null
    })
  }
}