import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink } from "../ClinicSelect/Style"
import { DoctorCard } from "../../components/DoctorCard/DoctorCard"
import { useEffect, useState } from "react"

// API importada
import api from "../../services/Service"
import { DoctorContainer } from "./Style"

export const DoctorSelect = ({
   navigation,
}) => {
   // STATES
   const [medicoLista, setMedicoLista] = useState([]);

   // FUNÇÕES
   async function ListarMedicos() {
      // instância da API
      api.get("/Medicos")
         .then(response => {
            setMedicoLista(response.data);

            console.log(medicoLista);
         }).catch(error => {
            console.log(error)
         });
   };

   // EFFECTS
   useEffect(() => {
      ListarMedicos();
   }, []);

   const [selected, setSelected] = useState(false);

   return (
      <DoctorContainer>
         <Title style={{ marginTop: 30, marginBottom: 50 }}>Selecionar médico</Title>
         
         <ListComponent
            data={medicoLista}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               // card médico
               <DoctorCard
                  selected={selected}
                  medico={item}
               />
            )}
         />

         <Button
            onPress={() => navigation.replace("DateSelect")}>
            <ButtonTitle>Continuar</ButtonTitle>
         </Button>

         <CancelLink style={{ marginBottom: 0 }} onPress={() => navigation.replace("ClinicSelect")}>Cancelar</CancelLink>
      </DoctorContainer>
   )
}