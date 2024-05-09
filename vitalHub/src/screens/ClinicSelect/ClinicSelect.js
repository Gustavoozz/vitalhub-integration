<<<<<<< HEAD
import { useEffect, useState } from "react"
import { Button, ButtonUnusable } from "../../components/Button/Style"
import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
=======

import { Button } from "../../components/Button/Style"
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { ButtonTitle, Title } from "../../components/Title/Style"
<<<<<<< HEAD
import { CancelLink } from "./Style"

// API importada
import api from "../../services/Service";
=======

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
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978

export const ClinicSelect = ({
  navigation,
  route,
}) => {
  // CONSTS
  const [clinica, setClinica] = useState([]); // informações da clínica

<<<<<<< HEAD
  const prioridadeId = route.params.prioridadeId; // id da prioridade
  const pacienteId = route.params.pacienteId; // id do usuário
  const prioridade = route.params.prioridade; // nome da prioridade
  const cidade = route.params.cidade;
  const [clinicaId, setClinicaId] = useState(null); // id da clínica



  // FUNCTIONS
  const ListarClinicas = async () => {
    await api.get(`/Clinica/BuscarPorCidade?cidade=${cidade}`)
      .then(response => {
        setClinica(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  const HandleSelectClinic = (rota) => {
    if (clinica != null) {
      navigation.replace(rota, {
        prioridadeId: prioridadeId,
        pacienteId: pacienteId,
        clinicaId: clinicaId,

        prioridade: prioridade,
        cidade: cidade
      })
    }
  }


  // EFFECTS
  useEffect(() => {
    ListarClinicas();
  }, [])



  return (
    <Container>
      <Title>Selecionar clínica</Title>
=======
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
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978

<<<<<<< HEAD
            <Button 
            onPress={() => handleContinue()}
            style={{ marginTop: 20 }}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <TextReenviar style={{ marginBottom: 20 }} onPress={() => navigation.replace("Main")}>Cancelar</TextReenviar>
=======
      <ListComponent
        data={clinica}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // card clínica
          <ClinicCard
            clinica={item}
            setClinicaId={setClinicaId}
          />
        )}
      />

<<<<<<< HEAD
      {
        clinicaId != null ?
=======
            <TextReenviar style={{ marginBottom: 20 }} onPress={() => navigation.replace("ClinicSelect")}>Cancelar</TextReenviar>
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
>>>>>>> develop

          <Button
            onPress={() => HandleSelectClinic("DoctorSelect")}>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>
          :
          <ButtonUnusable>
            <ButtonTitle>Continuar</ButtonTitle>
          </ButtonUnusable>
      }


      <CancelLink onPress={() => navigation.replace("Main")}>Cancelar</CancelLink>

    </Container>
  )
}