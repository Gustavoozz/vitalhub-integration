
import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"

import { useEffect, useState } from "react"
import { ListComponent } from "../../components/List/List"
import ClinicCard from "../../components/ClinicCard/ClinicCard"
import { TextReenviar } from "../../components/Link/Style"
import api from "../../services/Service"


export const ClinicSelect = ({ navigation, route, selected }) => {
    // const animation = new Animated.Value(0);
    // const inputRange = [0, 1];
    // const outputRange = [0.95, 1.0];
    // const scale = animation.interpolate({inputRange, outputRange});
   
   const [clinicaLista, setClinicaLista] = useState([]);
   const [clinica, setClinica] = useState();
   //  async function GetClinic() {
   //    await api.get('/Clinica/ListarTodas')
   //    .then( response => {
   //       setClinicaLista(response.data)
   //    }). catch( error => {
   //       console.log(error)
   //    })
   // }

    function handleContinue() {

      navigation.replace("DoctorSelect", { agendamento: {
         ...route.params.agendamento,
         ...clinica
      }
   })
  }

   async function GetClinicByCity() {
      await api.get(`/Clinica/BuscarPorCidade?cidade=${route.params.agendamento.localizacao}`)
      .then( response => {
         setClinicaLista(response.data)
      }). catch( error => {
         console.log(error)
      })
   }

   useEffect(() => {
    GetClinicByCity();
 }, []) 

 useEffect(() => {
   console.log(route);
 }, [route])
 
  
    // const onPressIn = () => {
    //   Animated.spring(animation, {
    //     toValue: 1,
    //     useNativeDriver: true,
    //   }).start();
    // };
    // const onPressOut = () => {
    //   Animated.spring(animation, {
    //     toValue: 0,
    //     useNativeDriver: true,
    //   }).start();
    // };

    
    return(
        <Container>
            <Title style={{ marginTop: 30, marginBottom: 70 }}>Selecionar clínica</Title>

            <ListComponent
               data={clinicaLista}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => (
               <ClinicCard clinica={item} 
               setClinica={setClinica}
               // selected={selected}
               />
               )}
               showsVerticalScrollIndicator={false}
             />

            <Button 
            onPress={() => handleContinue()}
            style={{ marginTop: 20 }}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <TextReenviar style={{ marginBottom: 20 }} onPress={() => navigation.replace("Main")}>Cancelar</TextReenviar>

            </Container>
    )
}