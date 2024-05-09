import { useEffect, useState } from "react"
import { Button } from "../../components/Button/Style"
import { Container, ContainerUser } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"

import { ButtonTitle, Title } from "../../components/Title/Style"
import api from "../../services/Service"
import DoctorCard from "../../components/DoctorCard/DoctorCard"
import { TextReenviar } from "../../components/Link/Style"


// const Medicos = [
//    {id: 1, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 2, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 3, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 4, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 5, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 6, nome: "Usmar", especialidade: "Cardiologista"},
// ]

export const DoctorSelect = ({ navigation, route, selected }) => {

   const [medicoLista, setMedicoLista] = useState([]);

   async function GetDoctor() {
      await api.get(`/Medicos/BuscarPorIdClinica?id=${route.params.agendamento.clinicaId}`)
      .then( response => {
         setMedicoLista(response.data)
      }). catch( error => {
         console.log(error)
      })
   }

   function handleContinue() {
      navigation.replace("DateSelect", { agendamento : {
         ...route.params.agendamento,
         ...medico
      }})
   }

   useEffect(() => {
      GetDoctor();
   }, []) 

   useEffect(() => {
      console.log(route);
    }, [route])
    
   
    return(
        <Container contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
             <Title style={{ marginTop: 30, marginBottom: 50 }}>Selecionar médico</Title>

             <ListComponent
               data={medicoLista}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => (
               <DoctorCard medico={item}
                  setMedico={setMedico}
               />
               )}
               showsVerticalScrollIndicator={false}
             />
              
            <Button 
               onPress={() => handleContinue()}
               style={{ marginTop: 40 }}>
               <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <TextReenviar style={{ marginBottom: 20 }} onPress={() => navigation.replace("ClinicSelect")}>Cancelar</TextReenviar>
        </Container>
    )  
}