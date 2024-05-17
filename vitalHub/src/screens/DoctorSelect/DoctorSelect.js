import { Button, ButtonUnusable } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
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
      <Container
         style={{
            paddingTop: 30
         }}
      >
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
}