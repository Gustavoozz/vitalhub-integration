<<<<<<< HEAD
import { Button, ButtonUnusable } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
=======
import { useEffect, useState } from "react"
import { Button } from "../../components/Button/Style"
import { Container, ContainerUser } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
<<<<<<< HEAD
import { DoctorPicture } from "../../components/Logo/Style"
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink } from "../ClinicSelect/Style"
import { useEffect, useState } from "react"

// API importada
import api from "../../services/Service"
import { CardDoctor } from "../../components/CardDoctor/CardDoctor"

export const DoctorSelect = ({
   navigation,
   route,
}) => {
   // STATES
   const [medico, setMedico] = useState([]); // lista de médicos

   const prioridadeId = route.params.prioridadeId; // id da prioridade
   const pacienteId = route.params.pacienteId; // id do usuário
   const clinicaId = route.params.clinicaId; // id da clínica
   const prioridade = route.params.prioridade; // nome da prioridade
   const cidade = route.params.cidade; // cidade
   const [medicoId, setMedicoId] = useState(null); // id do médico

   // FUNÇÕES
   const ListarMedicos = async () => {
      // instância da API
      await api.get(`/Medicos/BuscarPorIdClinica?id=${clinicaId}`)
         .then(response => {
            setMedico(response.data);
         }).catch(error => {
            console.log(error)
         });
   };

   const HandleSelectDoctor = (rota) => {
      if (medico != null) {
         navigation.replace(rota, {
            prioridadeId: prioridadeId,
            pacienteId: pacienteId,
            clinicaId: clinicaId,
            medicoId: medicoId,
            cidade: cidade,

            prioridade: prioridade
         })
      }
   }

   const Return = (rota) => {
      navigation.replace(rota, {
         prioridadeId: prioridadeId,
         pacienteId: pacienteId,
         cidade: cidade,

         prioridade: prioridade
      })
   }

   // EFFECTS
   useEffect(() => {
      ListarMedicos();
   }, []);

   return (
      <Container>
         <Title style={{ marginTop: 30, marginBottom: 50 }}>Selecionar médico</Title>

         <ListComponent
            data={medico}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               // card médico
               <CardDoctor
                  medico={item}
                  setMedicoId={setMedicoId}
               />
            )}
         />


         {
            medicoId != null ?

               <Button
                  onPress={() => HandleSelectDoctor("DateSelect")}>
                  <ButtonTitle>Continuar</ButtonTitle>
               </Button>
               :
               <ButtonUnusable>
                  <ButtonTitle>Continuar</ButtonTitle>
               </ButtonUnusable>
         }

         <CancelLink onPress={() => Return("ClinicSelect")}>Cancelar</CancelLink>
      </Container>
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

export const DoctorSelect = ({ navigation }) => {

   const [medicoLista, setMedicoLista] = useState([]);

   async function GetDoctor() {
      await api.get('/Medicos')
      .then( response => {
         setMedicoLista(response.data)
      }). catch( error => {
         console.log(error)
      })
   }

   useEffect(() => {
      GetDoctor();
   }, []) 
   
    return(
        <Container contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
             <Title style={{ marginTop: 30, marginBottom: 50 }}>Selecionar médico</Title>

             <ListComponent
               data={medicoLista}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => (
               <DoctorCard medico={item}/>
               )}
               showsVerticalScrollIndicator={false}
             />
              
            <Button 
               onPress={() => navigation.replace("DateSelect")}
               style={{ marginTop: 40 }}>
               <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <TextReenviar style={{ marginBottom: 20 }} onPress={() => navigation.replace("ClinicSelect")}>Cancelar</TextReenviar>
        </Container>
    )  
>>>>>>> gustavo
}