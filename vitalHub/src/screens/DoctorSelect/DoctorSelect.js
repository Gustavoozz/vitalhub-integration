import { useEffect, useState } from "react"
import { Button } from "../../components/Button/Style"
import { Container, ContainerUser } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
<<<<<<< HEAD
import { DoctorPicture } from "../../components/Logo/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink, CardContent, TextClinic } from "../ClinicSelect/Style"
import { DoctorCard } from "../../components/DoctorCard/DoctorCard"
import { useEffect, useState } from "react"

// API importada
import api from "../../services/Service"

// FORA DO COMPONENTE
// criar o state para receber a lista de médicos (Array)
const Medicos = [];

// criar função para obter a lista de médicos da api e setar no state
const GetDoctors = async () => {
   const resource = await api.get("/Medicos");

   console.log(resource);

   Medicos.push(resource.data)
}

// criar um effect para chamada da função 
useEffect(() => {
   GetDoctors();
}, [])


export const DoctorSelect = ({
   navigation,
}) => {
   // passar os dados do state(array) para o flatlist
   // passar o médico com props no MedicalCard

   const [selected, setSelected] = useState(false);

   return (
      <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
         <Title style={{ marginTop: 30, marginBottom: 50 }}>Selecionar médico</Title>

         <ListComponent
            data={Dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               // card médico
               <DoctorCard
                  selected={selected}
                  doctorName={item.doctorName}
                  doctorRole={item.doctorRole}
               />
            )}
         />

         <Button
            onPress={() => navigation.replace("DateSelect")}
            style={{ marginTop: 40 }}>
            <ButtonTitle>Continuar</ButtonTitle>
         </Button>

         <CancelLink style={{ marginBottom: 0 }} onPress={() => navigation.replace("ClinicSelect")}>Cancelar</CancelLink>
      </ContainerUser>
   )
=======

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
>>>>>>> gustavo
}